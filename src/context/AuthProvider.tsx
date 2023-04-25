import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../service';

interface AuthContextValue {
  token?: string;
  onLogin: (vendorToken: string, vendor: string) => Promise<void>;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (vendorToken: string, vendor: string) => {
    const response = await authService.login(vendorToken, vendor);

    if (response) {
      const origin = location.state?.from?.pathname || '/';

      setToken(response.accessToken);
      navigate(origin);
    } else {
      navigate('/initial');
    }
  };

  const handleLogout = () => {
    setToken(undefined);
  };

  const value = useMemo(
    () => ({
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }),
    [token],
  );

  useEffect(() => {
    const refresh = async () => {
      const response = await authService.refresh();

      if (response?.accessToken) {
        const origin = location.state?.from?.pathname || '/';

        setToken(response.accessToken);
        navigate(origin);
      } else {
        navigate('/initial');
      }
    };

    refresh();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
