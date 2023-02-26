import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { currentGoalState } from '../atoms/goalList';
import useGoal from '../hooks/useGoal';

const Container = styled.div`
  box-sizing: border-box;
  padding: 55px 20px 0 20px;
  width: 375px;
  text-align: start;
`;

const Header = styled.header`
  font-size: 24px;
  margin-bottom: 38px;
`;

const Emphasis = styled.span`
  font-size: 24px;
  font-weight: 700;
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

const SetSatchForm = () => {
  const currentGoal = useRecoilValue(currentGoalState);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('0');
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();

  if (!currentGoal) return null;

  const { createSatch } = useGoal(currentGoal.id);

  const onClick = () => {
    if (name.length === 0 || parseInt(price, 10) === 0) {
      return;
    }

    createSatch({ name, date: new Date(), price: parseInt(price, 10) });
    navigate('/');
  };

  return (
    <Container>
      <Header>
        오늘의 <Emphasis>삿치템!</Emphasis>
      </Header>
      <SatchGoal>
        <Title>삿치 목표명</Title>
        <Input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
      </SatchGoal>
      <SatchPrice>
        <Title>금액</Title>
        <Input type="text" value={price} onChange={(e) => setPrice(e.currentTarget.value)} />
        <PriceUnit>원</PriceUnit>
      </SatchPrice>
      <SatchDate>
        <Title>날짜</Title>
        <Input
          type="date"
          value={date}
          onClick={() => setEditable(true)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.currentTarget.value)}
          readOnly={!editable}
        />
      </SatchDate>
      <SubmitBtn onClick={onClick}>등록하기</SubmitBtn>
    </Container>
  );
};

export default SetSatchForm;
