import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import appConfig from '../../appConfig';
import { authService } from '../../service';

const Oauth = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = search.get('code');

    const grant_type = 'authorization_code';
    const client_id = import.meta.env.VITE_KAKAO_CLIENT_KEY;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${
          import.meta.env.VITE_SATCH_FRONTEND_URL
        }/oauth&code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then((res) => {
        authService.login(res.data.access_token, 'kakao').then((response) => {
          appConfig.accessToken = response?.accessToken;
          navigate('/setgoals');
        });
      });
  }, []);

  return <div>로그인 처리중 ...</div>;
};

export default Oauth;
