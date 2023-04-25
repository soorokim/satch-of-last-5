import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { kakaoOAuthService } from '../../service';

const Oauth = () => {
  const [search] = useSearchParams();
  const { onLogin } = useAuth();

  useEffect(() => {
    const login = async () => {
      const code = search.get('code');

      if (code) {
        const response = await kakaoOAuthService.accessToken({ code });

        if (response) {
          await onLogin(response.accessToken, 'kakao');
        }
      }
    };

    login();
  }, []);

  return <div>로그인 처리중 ...</div>;
};

export default Oauth;
