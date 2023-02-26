import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { goalListState } from '../atoms/goalList';
import useGoal from '../hooks/useGoal';

const Container = styled.div`
  box-sizing: border-box;
  padding: 55px 20px 0 20px;
  width: 375px;
  text-align: start;
  font-family: 'LINE Seed Sans KR';
`;

const Header = styled.header`
  font-size: 24px;
  margin-bottom: 38px;
`;

const Emphasis = styled.span`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(to top, #79bcf6b2 30%, transparent 30%);
`;

const SatchGoal = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #191919;
  margin-bottom: 12px;
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

const SatchPrice = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
`;

const PriceUnit = styled.span`
  position: absolute;
  right: 0;
  bottom: 10px;
  color: #191919;
  font-weight: 700;
`;

const SatchDate = styled.div`
  position: relative;
  margin-bottom: 268px;
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
  margin-top: 20px;
  color: red;
  font-size: 12px;
`;

const SetSatchForm = () => {
  const goalList = useRecoilValue(goalListState);
  const goalId = goalList[goalList.length - 1].id;
  const { createSatch } = useGoal(goalId);
  const [date, setDate] = useState(new Date());
  const [editable] = useState(true);
  const [satchItem, setSatchItem] = useState('');
  const [satchPrice, setSatchPrice] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      satchItem === '' ||
      Number.isNaN(satchPrice) ||
      satchPrice === 0 ||
      satchPrice === undefined
    ) {
      setIsValid(false);
    } else {
      createSatch({
        name: satchItem,
        price: satchPrice,
        date,
      });
      navigate('/');
    }
  };

  return (
    <Container>
      <Header>
        오늘의 <Emphasis>삿치템!</Emphasis>
      </Header>
      <SatchGoal>
        <Title>삿치 목표명</Title>
        <Input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSatchItem(e.currentTarget.value)}
        />
      </SatchGoal>
      <SatchPrice>
        <Title>금액</Title>
        <Input
          type="text"
          value={satchPrice.toLocaleString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSatchPrice(Number(e.currentTarget.value.replace(/,/g, '')))
          }
        />
        <PriceUnit>원</PriceUnit>
      </SatchPrice>
      <SatchDate>
        <Title>날짜</Title>
        <Input
          type="date"
          value={date.toISOString().substring(0, 10)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(new Date(e.currentTarget.value))
          }
          readOnly={!editable}
        />
        {isValid ? (
          ''
        ) : (
          <Alert>
            삿치템과 금액은 필수입니다!
            <br />
            금액은 꼭 숫자를 입력해주세요.
          </Alert>
        )}
      </SatchDate>
      <SubmitBtn onClick={onClick}>등록하기</SubmitBtn>
    </Container>
  );
};

export default SetSatchForm;
