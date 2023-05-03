import { useCallback, useEffect, useState } from 'react';

const { Kakao } = window;

const useKakaoSdk = () => {
  const [sdk, setSdk] = useState<Window['Kakao']['Auth']>();

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      try {
        Kakao.init(process.env.VITE_KAKAO_SDK_APP_KEY);
        setSdk(Kakao.Auth);
      } catch {
        alert('카카오 SDK사용이 불가능합니다.');
      }
    } else {
      setSdk(Kakao.Auth);
    }
  }, []);

  const auth = useCallback(() => {
    if (sdk) {
      sdk.authorize({ redirectUri: `${process.env.VITE_SATCH_FRONTEND_URL}/oauth` });
    }
  }, [sdk]);

  return { requestLogin: auth };
};

export default useKakaoSdk;
