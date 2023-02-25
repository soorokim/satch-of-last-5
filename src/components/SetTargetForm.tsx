import { useEffect, useState, MouseEvent, FormEvent } from 'react';
import styled from 'styled-components';

interface Satch {
  id: number;
  name: string;
  price: number;
  date: Date;
}

interface Goal {
  id: number;
  emoticon: string;
  name: string;
  price: number;
  percent: number;
  createdAt: Date;
  endedAt?: Date;
  satchList: Satch[];
}

const Container = styled.div``;

const OathTitle = styled.header``;

const Title = styled.h3``;

const Input = styled.input``;

const NowDate = styled.div``;

const Alert = styled.p``;

const SubmitBtn = styled.button``;

const SetTargetForm = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goal, setGoal] = useState('');
  const [price, setPrice] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const priceFormAlert = '숫자를 꼭 입력해주세요.';
  const today = new Date();

  useEffect(() => {
    const storedGoals = localStorage.getItem('goals');

    if (storedGoals && goals.length === 0) {
      setGoals(JSON.parse(storedGoals));
    } else {
      localStorage.setItem('goals', JSON.stringify(goals));
    }
  }, [goals]);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (goal === '') {
      e.preventDefault();
    } else if (typeof price === 'string' || price === 0) {
      setIsValid(false);
    } else {
      const data = {
        id: Date.now(),
        name: goal,
        emoticon: '',
        price,
        percent: 0,
        createdAt: today,
        satchList: [],
      };

      setGoals([data, ...goals]);
    }
  };

  return (
    <Container>
      <OathTitle>선서</OathTitle>
      <Title>목표명</Title>
      <Input
        type="text"
        onChange={(e: FormEvent<HTMLInputElement>) => setGoal(e.currentTarget.value)}
        placeholder="목표를 입력해주세요."
      />
      <Title>금액</Title>
      <Input
        type="number"
        onChange={(e: FormEvent<HTMLInputElement>) => setPrice(Number(e.currentTarget.value))}
        placeholder="목표를 이루기 위한 금액을 입력해주세요."
      />
      <Alert>{isValid ? '' : priceFormAlert}</Alert>
      <NowDate>{today.toISOString().slice(0, 10)}</NowDate>
      <SubmitBtn type="button" onClick={onClick}>
        등록하기
      </SubmitBtn>
    </Container>
  );
};

export default SetTargetForm;
