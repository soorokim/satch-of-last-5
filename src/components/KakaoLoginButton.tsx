import styled from 'styled-components';

const StartBtn = styled.button`
  width: 100%;
  max-width: 375px;
  height: 52px;
  border-radius: 100px;
  background: #fee500;
  color: #191919;
  outline: none;
  border: none;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  :focus {
    outline: none;
  }
`;

interface KakaoLoginButtonProps {
  sdk: {
    requestLogin: () => void;
  };
}

const KakaoLoginButton = ({ sdk }: KakaoLoginButtonProps) => {
  if (!sdk) return null;

  const onClickLogin = () => {
    if (sdk) {
      sdk.requestLogin();
    }
  };

  return (
    <div className="buttonWrap">
      <StartBtn onClick={onClickLogin}>카카오로 시작하기</StartBtn>
    </div>
  );
};

export default KakaoLoginButton;
