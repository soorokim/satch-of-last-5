import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useGoalList from '../hooks/useGoalList';

const Container = styled.div`
  width: 335px;
  height: 605px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  padding: 0 25px;
  box-sizing: border-box;
  margin-bottom: 38px;
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

const NowDate = styled.div``;

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
  font-weight: 700;
  color: #767676;
  text-align: start;
  font-size: 15px;
  white-space: pre-line;
  line-height: 1.7;
  margin-bottom: 38px;
`;

const Emphasis = styled.span`
  color: #000000;
  font-weight: 700;
`;

const Today = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #767676;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 16px;
  background-color: #79bcf6;
  color: #ffffff;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: inherit;
  }
`;

const Alert = styled.span`
  position: absolute;
  left: 70px;
  color: red;
  font-size: 12px;
`;

const emoticions = [
  '/src/assets/emoticon_01.png',
  '/src/assets/emoticon_02.png',
  '/src/assets/emoticon_03.png',
];

const SetTargetForm = () => {
  const randomEmoji = Math.floor(Math.random() * emoticions.length);
  const [goal, setGoal] = useState('');
  const [price, setPrice] = useState(0);
  const [emojiUrl] = useState(() => emoticions[randomEmoji]);
  const [isValid, setIsValid] = useState(true);
  const today = new Date();
  const { createGoal } = useGoalList();
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (goal === '' || Number.isNaN(price) || price === 0 || price === undefined) {
      setIsValid(false);
    } else {
      createGoal({
        name: goal,
        emoticon: '',
        price,
      });
      navigate('/');
    }
  };

  return (
    <>
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
          유혹이 다가올 때마다 그 물건을
          <br /> <Emphasis>샀다 치고</Emphasis> 이곳에 기록하여 목표에 꼭 도달할 수 있도록
          하겠습니다.
        </OathText>
        <NowDate>
          <Today>{today.toISOString().slice(0, 10)}</Today>
        </NowDate>
      </Container>
      <SubmitBtn type="button" onClick={onClick}>
        등록하기
      </SubmitBtn>
    </>
  );
};

export default SetTargetForm;
