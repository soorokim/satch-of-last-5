type AuthorizeSetting = {
  // 인가 코드를 받을 URI
  redirectUri?: string;

  // 인가 코드 요청과 응답 과정에서 유지할 수 있는 파라미터
  state?: string;

  // 추가 동의 받을 항목의 키 ex) "account_email,gender"
  // OpenID Connect 확장 기능 사용 시, 추가 동의 받을 항목의 키와 "openid"를 함께 전달해야 함
  scope?: string;
  prompts?: string;

  // 인가 코드 요청 시 추가 상호작용을 요청하고자 할 때 전달하는 파라미터 ex) "cert": 인증 로그인, "login": 다른 계정으로 로그인
  nonce?: string;

  // ID 토큰 재생 공격 방지를 위한 검증 값, 임의의 문자열, ID 토큰 검증 시 사용
  throughTalk?: boolean;
};

interface Window {
  Kakao: {
    init: (appKey: string) => void;
    isInitialized: () => boolean;
    Auth: {
      authorize: (settings?: AuthorizeSetting) => void;
      setAccessToken: (token: string) => void;
    };
    API: any;
  };
}
