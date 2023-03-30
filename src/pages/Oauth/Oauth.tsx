import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Oauth = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = search.get('code');

    if (code) {
      alert('카카오 로그인에 성공했습니다!');
      navigate('/setgoals');
    }
  }, []);

  return <div>hi</div>;
};

export default Oauth;
