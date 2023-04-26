import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Emoticon1 from '../assets/emoticon_01.png';
import Emoticon2 from '../assets/emoticon_02.png';
import Emoticon3 from '../assets/emoticon_03.png';
import { goalsService } from '../service';

const Wrapper = styled.div`
  padding: 40px 20px 36px;
`;
const Container = styled.div`
  width: 100%;
  max-width: 375px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  padding: 0 25px;
  box-sizing: border-box;
  font-family: 'LINE Seed Sans KR';
`;

const OathTitle = styled.header`
  margin-top: 26px;
  font-size: 20px;
  font-weight: 700;
`;

const EmoticonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #ebf5ff;
  border: 1px solid #79bcf6;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 14px;
  margin-bottom: 28px;
`;

const Emoticon = styled.img``;

const GoalForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 37px;
`;

const PriceForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const NowDate = styled.div`
  text-align: center;
`;

const Title = styled.span`
  display: block;
  text-align: start;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 18px;
  color: #191919;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  border: none;
  outline: none;
  border-bottom: 1px solid #dbdbdb;
  font-size: 18px;
  color: #767676;
`;

const PriceUnit = styled.span`
  position: absolute;
  right: 0;
  bottom: 10px;
  color: #191919;
  font-weight: 700;
`;

const OathText = styled.div`
  color: #767676;
  text-align: start;
  font-size: 16px;
  white-space: pre-line;
  line-height: 1.7;
  margin-bottom: 38px;
`;

const Emphasis = styled.span`
  color: #000000;
  font-weight: 700;
`;

const Today = styled.p`
  color: #767676;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 30px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 52px;
  font-family: 'LINE Seed Sans KR';
  border-radius: 100px;
  font-weight: 700;
  font-size: 16px;
  background-color: #79bcf6;
  color: #ffffff;
  margin-top: 38px;
  border: unset;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
    /* border-color: inherit; */
  }
`;

const Alert = styled.span`
  position: absolute;
  left: 70px;
  color: red;
  font-size: 12px;
`;

const emoticions = [Emoticon1, Emoticon2, Emoticon3];

const SetTargetForm = () => {
  const randomEmoji = Math.floor(Math.random() * emoticions.length);
  const [goal, setGoal] = useState('');
  const [price, setPrice] = useState(0);
  const [emojiUrl] = useState(() => emoticions[randomEmoji]);
  const [isValid, setIsValid] = useState(true);
  const today = new Date();
  const navigate = useNavigate();

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (goal === '' || Number.isNaN(price) || price === 0 || price === undefined) {
      setIsValid(false);
    } else {
      const res = await goalsService.create({
        name: goal,
        price,
      });

      if (res) {
        navigate('/');
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <OathTitle>삿치 선서</OathTitle>
        <EmoticonWrapper>
          <Emoticon src={`${emojiUrl}`} alt="Emoticon" />
        </EmoticonWrapper>
        <GoalForm>
          <Title>목표명</Title>
          {isValid ? (
            ''
          ) : (
            <Alert>
              목표와 금액은 필수입니다!
              <br />
              금액은 꼭 숫자를 입력해주세요.
            </Alert>
          )}
          <Input
            type="text"
            onChange={(e: React.FormEvent<HTMLInputElement>) => setGoal(e.currentTarget.value)}
            autoFocus
          />
        </GoalForm>
        <PriceForm>
          <Title>금액</Title>
          <Input
            type="text"
            value={price.toLocaleString()}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPrice(Number(e.currentTarget.value.replace(/,/g, '')))
            }
          />
          <PriceUnit>원</PriceUnit>
        </PriceForm>
        <OathText>
          유혹이 다가올 때마다 그 물건을&nbsp;
          <Emphasis>샀다 치고</Emphasis> 이곳에 기록하여 목표에 꼭 도달할 수 있도록 하겠습니다.
        </OathText>
        <NowDate>
          <Today>{today.toISOString().slice(0, 10).replaceAll('-', '.')}</Today>
        </NowDate>
      </Container>
      <SubmitBtn type="button" onClick={onClick}>
        등록하기
      </SubmitBtn>
    </Wrapper>
  );
};

export default SetTargetForm;
