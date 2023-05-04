import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Spacer = styled.div`
  margin-top: 57px;
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  height: 57px;
  background-color: white;
`;
const Nav = styled.nav`
  overflow: hidden;
  border-top: 1px solid #dcdee3;
`;

const NavButton = styled.div`
  text-align: center;
  float: left;
  width: 50%;

  /* 세로길이 설정 */
  height: 57px;
  line-height: 57px;
`;

const IconWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #999999;
  font-family: 'Pretendard';
  font-style: normal;
`;

interface SvgIcon {
  isActive: boolean;
}

const HomeSvg = ({ isActive }: SvgIcon) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.4685 1.40202C10.7716 1.13259 11.2283 1.13259 11.5314 1.40202L20.5314 9.40202C20.7022 9.55384 20.7999 9.77144 20.7999 9.99995V20C20.7999 20.4418 20.4418 20.7999 20 20.7999H14C13.5581 20.7999 13.2 20.4418 13.2 20V15C13.2 13.7418 12.2581 12.8 11 12.8C9.74178 12.8 8.79995 13.7418 8.79995 15V19.9999C8.79995 20.4417 8.44178 20.7999 7.99995 20.7999H1.99995C1.55812 20.7999 1.19995 20.4418 1.19995 20V9.99995C1.19995 9.77144 1.29767 9.55384 1.46846 9.40202L10.4685 1.40202Z"
      stroke={isActive ? '#79BCF6' : '#999999'}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarSvg = ({ isActive }: SvgIcon) => (
  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.8999 6.9999C4.8999 6.66853 5.16853 6.3999 5.4999 6.3999H12.4999C12.8313 6.3999 13.0999 6.66853 13.0999 6.9999C13.0999 7.33127 12.8313 7.5999 12.4999 7.5999H5.4999C5.16853 7.5999 4.8999 7.33127 4.8999 6.9999Z"
      fill={isActive ? '#79BCF6' : '#999999'}
    />
    <path
      d="M4.8999 10.9999C4.8999 10.6685 5.16853 10.3999 5.4999 10.3999H9.4999C9.83127 10.3999 10.0999 10.6685 10.0999 10.9999C10.0999 11.3313 9.83127 11.5999 9.4999 11.5999H5.4999C5.16853 11.5999 4.8999 11.3313 4.8999 10.9999Z"
      fill={isActive ? '#79BCF6' : '#999999'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.1001 1.4999C18.1001 1.16853 17.8315 0.899902 17.5001 0.899902H1.50015C1.16878 0.899902 0.900146 1.16853 0.900146 1.4999V16.4999C0.900146 17.9358 2.06421 19.0999 3.50015 19.0999H19.5001C20.9361 19.0999 22.1001 17.9358 22.1001 16.4999V6.4999C22.1001 6.16853 21.8315 5.8999 21.5001 5.8999H18.1001V1.4999ZM16.9001 16.4999C16.9001 17.0154 17.0501 17.4958 17.3089 17.8999H3.50015C2.72695 17.8999 2.10015 17.2731 2.10015 16.4999V2.0999H16.9001V16.4999ZM20.9001 16.4999C20.9001 17.2731 20.2733 17.8999 19.5001 17.8999C18.7269 17.8999 18.1001 17.2731 18.1001 16.4999V7.0999H20.9001V16.4999Z"
      fill={isActive ? '#79BCF6' : '#999999'}
    />
  </svg>
);

// const HistorySvg = ({ isActive }: SvgIcon) => (
//   <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M17.48 6.09003C17.22 5.77003 16.75 5.72003 16.43 5.98003C16.11 6.24003 16.06 6.71003 16.32 7.03003C17.45 8.43003 18.08 10.09 18.14 11.83C18.3 16.31 14.78 20.09 10.29 20.24C5.80003 20.4 2.03003 16.88 1.87003 12.4C1.71003 7.92003 5.23003 4.14003 9.72003 3.99003C10.29 3.97003 10.89 4.02003 11.54 4.15003C11.58 4.16003 11.62 4.15003 11.66 4.15003C11.76 4.20003 11.88 4.23003 11.99 4.23003C12.16 4.23003 12.32 4.18003 12.46 4.06003C12.78 3.80003 12.83 3.33003 12.58 3.01003L10.6 0.540034C10.34 0.220034 9.87003 0.160034 9.55003 0.420034C9.23003 0.680034 9.18003 1.15003 9.43003 1.47003L10.26 2.50003C10.07 2.49003 9.87003 2.48003 9.68003 2.49003C4.37003 2.67003 0.200033 7.15003 0.390033 12.46C0.580033 17.77 5.05003 21.94 10.36 21.75C15.67 21.56 19.84 17.09 19.65 11.78C19.56 9.71003 18.82 7.74003 17.48 6.09003Z"
//       fill={isActive ? '#79BCF6' : '#999999'}
//     />
//   </svg>
// );

const tab = [
  { Svg: HomeSvg, title: '홈', link: '/' },
  { Svg: CalendarSvg, title: '달력', link: '/calendar' },
  // { Svg: HistorySvg, title: '히스토리', link: '/history' },
];

interface BottomNavigationBarProps {
  hasAuth: boolean;
}

const BottomNavigationBar = ({ hasAuth }: BottomNavigationBarProps) => {
  const [activeNav, setActiveNav] = useState(0);

  if (!hasAuth) return null;

  return (
    <>
      <Wrapper>
        <Nav>
          {tab.map(({ Svg, link, title }, index) => (
            <Link to={link} key={title} onClick={() => setActiveNav(index)}>
              <NavButton>
                <IconWrapper>
                  <Svg isActive={activeNav === index} />
                  <Title style={{ color: activeNav === index ? '#79BCF6' : '#999999' }}>
                    {title}
                  </Title>
                </IconWrapper>
              </NavButton>
            </Link>
          ))}
        </Nav>
      </Wrapper>
      <Spacer />
    </>
  );
};

export default BottomNavigationBar;
