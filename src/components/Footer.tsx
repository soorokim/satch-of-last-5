import { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 375px;
  height: 56px;
  margin-top: 35px;
  border-top: 1px solid #dcdee3;
`;
const IconWrapper = styled.div`
  width: 60px;
  align-items: center;
  margin: 0px 10px;
`;
const Icon = styled.img`
  width: 21.5px;
  height: 18px;
  margin-top: 10px;
`;
const Title = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #999999;
  font-family: 'Pretendard';
  font-style: normal;
`;
const WhitePlace = styled.div`
  height: 34px;
  background: #ffffff;
`;

const Footer = () => {
    const [tab] = useState([
        { src: '/src/assets/home.png', title: '홈', link: '/' },
        { src: '/src/assets/calendar.png', title: '달력', link: '/more' },
        { src: '/src/assets/history.png', title: '히스토리', link: '/history' },
    ]);

    return (
        <>
            <Wrapper>
                {tab.map((item) => (
                    <Link to={item.link} key={item.title}>
                        <IconWrapper>
                            <Icon key={item.title} src={item.src} />
                            <Title>{item.title}</Title>
                        </IconWrapper>
                    </Link>
                ))}
            </Wrapper>
            <WhitePlace />
        </>
    );
};

export default Footer;
