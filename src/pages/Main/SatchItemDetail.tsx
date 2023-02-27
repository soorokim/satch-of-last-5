import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Goal, Satch } from '../../atoms/goalList';
import useGoal from '../../hooks/useGoal';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  animation: ${slideUp} 0.3s ease-out;
  width: 377px;
  height: 356px;
  background: #ffffff;
  border-radius: 16px 16px 0px 0px;
  text-align: start;
  z-index: 9;
  padding-bottom: 35px;
`;
const StringWrapper = styled.div`
  margin-top: 50px;
  padding: 0px 20px;
`;

const Title = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #191919;
  margin-bottom: 6px;
`;
const Content = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #79bcf6;
  margin-bottom: 30px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button<{ color: string; bgColor: string }>`
  width: 160px;
  height: 52px;
  left: 195px;
  top: 304px;
  background: ${(props) => props.bgColor};
  border: ${(props) => `2px solid ${props.color}`};
  border-radius: 32px;
  color: ${(props) => props.color};
`;

interface SatchProps {
  selectedItem: Satch | null;
  currentGoal: Goal;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SatchItemDetail = ({ selectedItem, currentGoal, setOpen }: SatchProps) => {
  const date = selectedItem && new Date(selectedItem.date).toISOString().slice(0, 10);
  const { deleteSatch } = useGoal(currentGoal.id);

  const handleDelete = (satchId: string) => {
    deleteSatch(satchId);
    setOpen(false);
  };

  if (!selectedItem) return null;

  return (
    <Wrapper>
      <StringWrapper>
        <Title> 오늘의 삿치</Title>
        <Content>{selectedItem?.name}</Content>
        <Title>금액</Title>
        <Content>{`${selectedItem?.price.toLocaleString('ko-KR')}원`}</Content>
        <Title>날짜</Title>
        <Content>{date}</Content>
      </StringWrapper>
      <ButtonWrapper>
        <Link to={`/setsatchitem?id=${selectedItem.id}`}>
          <Button color="#79BCF6" bgColor="#FFFFFF">
            수정
          </Button>
        </Link>
        <Button color="#FFFFFF" bgColor="#79BCF6" onClick={() => handleDelete(selectedItem?.id)}>
          삭제
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SatchItemDetail;
