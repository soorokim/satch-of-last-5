import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { goalListState } from '../atoms/goalList';
import useGoal from '../hooks/useGoal';
import TextUnderline from './TextUnderline';

interface Edit {
  isEdit: boolean;
}

interface EditSatchInfo {
  editSatchId: string;
  name: string;
  price: number;
  update: Date;
}

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

const SetSatchForm = ({ isEdit }: Edit, { editSatchId, name, price, update }: EditSatchInfo) => {
  const goalList = useRecoilValue(goalListState);
  const goalId = goalList[goalList.length - 1].id;
  const { createSatch } = useGoal(goalId);
  const { updateSatch } = useGoal(editSatchId);

  // 삿치템 생성
  const [date, setDate] = useState(new Date());
  const [editable] = useState(true);
  const [satchItem, setSatchItem] = useState('');
  const [satchPrice, setSatchPrice] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  // 삿치템 수정
  const [editSatch, setEditSatch] = useState(name);
  const [editPrice, setEditPrice] = useState(price);
  const [editDate, setEditDate] = useState(update);

  const onSatchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (!isEdit) {
      setSatchItem(value);
    } else {
      setEditSatch(value);
    }
  };

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (!isEdit) {
      setSatchPrice(Number(value.replace(/,/g, '')));
    } else {
      setEditPrice(Number(value.replace(/,/g, '')));
    }
  };

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (!isEdit) {
      setDate(new Date(value));
    } else {
      setEditDate(new Date(value));
    }
  };

  const onCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  const onEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      satchItem === '' ||
      Number.isNaN(satchPrice) ||
      satchPrice === 0 ||
      satchPrice === undefined
    ) {
      setIsValid(false);
    } else {
      updateSatch(editSatchId);
      // navigate('/');
    }
  };

  return (
    <Container>
      <Header>
        오늘의{' '}
        <TextUnderline fontSize="24px" fontWeight="700">
          삿치템!
        </TextUnderline>
      </Header>
      <SatchGoal>
        <Title>삿치 목표명</Title>
        <Input type="text" value={isEdit ? editSatch : satchItem} onChange={onSatchChange} />
      </SatchGoal>
      <SatchPrice>
        <Title>금액</Title>
        <Input
          type="text"
          value={isEdit ? editPrice.toLocaleString() : satchPrice.toLocaleString()}
          onChange={onPriceChange}
        />
        <PriceUnit>원</PriceUnit>
      </SatchPrice>
      <SatchDate>
        <Title>날짜</Title>
        <Input
          type="date"
          value={
            isEdit ? editDate.toISOString().substring(0, 10) : date.toISOString().substring(0, 10)
          }
          onChange={onDateChange}
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
      <SubmitBtn onClick={isEdit ? onEdit : onCreate}>등록하기</SubmitBtn>
    </Container>
  );
};

export default SetSatchForm;
