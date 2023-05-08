import { useCallback, useEffect, useState } from 'react';

const { Kakao } = window;
const KAKAO_SDK_APP_KEY = process.env.VITE_KAKAO_SDK_APP_KEY;
const useKakaoSdk = () => {
  const [sdk, setSdk] = useState<Window['Kakao']['Auth']>();

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      try {
        if (!KAKAO_SDK_APP_KEY) {
          throw new Error('카카오 로그인을 사용하려면 카카오 SDK APP KEY가 필요합니다.');
        }

        Kakao.init(KAKAO_SDK_APP_KEY);
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

  return { sdk: { requestLogin: auth } };
};

export default useKakaoSdk;
