import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../service';

interface AuthContextValue {
  hasAuth?: boolean;
  onLogin: (vendorToken: string, vendor: string) => Promise<void>;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [hasAuth, setHasAuth] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (vendorToken: string, vendor: string) => {
    const response = await authService.login(vendorToken, vendor);

    if (response) {
      const origin = location.state?.from?.pathname || '/';

      setHasAuth(true);
      navigate(origin);
    } else {
      navigate('/initial');
    }
  };

  const handleLogout = () => {
    setHasAuth(false);
  };

  const value = useMemo(
    () => ({
      hasAuth,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }),
    [hasAuth],
  );

  useEffect(() => {
    const refresh = async () => {
      try {
        const response = await authService.refresh();

        if (response?.accessToken) {
          const origin = location.state?.from?.pathname || '/';

          setHasAuth(true);
          navigate(origin);
          return;
        }
      } catch {
        console.log('refresh error');
      }
      navigate('/initial');
    };

    refresh();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
