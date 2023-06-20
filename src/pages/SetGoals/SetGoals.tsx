import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGoalList from '../../hooks/useGoalList';
import Emoticon1 from '../../assets/emoticon_01.png';
import Emoticon2 from '../../assets/emoticon_02.png';
import Emoticon3 from '../../assets/emoticon_03.png';
import SubmitBtn from '../../components/SubmitBtn';

interface SatchGoalsForm {
  goal: string;
  price: number;
}

const Wrapper = styled.div`
  padding: 40px 20px 36px;
`;

const Container = styled.div`
  position: relative;
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

const SatchTargetInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.span`
  display: block;
  text-align: start;
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 18px;
  color: #191919;
`;

const PriceWrapper = styled.div`
  position: relative;
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
  bottom: 15px;
  color: #191919;
  font-weight: 700;
`;

const Warning = styled.p`
  margin-top: 10px;
  font-size: medium;
  color: red;
`;

const NowDate = styled.div`
  text-align: center;
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

const emoticions = [Emoticon1, Emoticon2, Emoticon3];

const SetGoals = () => {
  const { createGoal } = useGoalList();
  const randomEmoji = Math.floor(Math.random() * emoticions.length);
  const [emojiUrl] = useState(() => emoticions[randomEmoji]);
  const today = new Date();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SatchGoalsForm>({ mode: 'onChange' });

  const onValid = ({ goal, price }: SatchGoalsForm) => {
    const goalPrice = Number(price);

    createGoal({
      name: goal,
      emoticon: '',
      price: goalPrice,
    });
    navigate('/');
  };

  return (
    <Wrapper>
      <Container>
        <OathTitle>삿치 선서</OathTitle>
        <EmoticonWrapper>
          <Emoticon src={`${emojiUrl}`} alt="Emoticon" />
        </EmoticonWrapper>
        <form onSubmit={handleSubmit(onValid)}>
          <SatchTargetInfo>
            <Title>목표 이름</Title>
            <Input {...register('goal', { required: '목표를 꼭 입력해주세요.' })} />
            <Warning>{errors?.goal?.message}</Warning>
          </SatchTargetInfo>
          <SatchTargetInfo>
            <Title>목표 금액</Title>
            <PriceWrapper>
              <Input
                {...register('price', {
                  required: '목표 금액을 꼭 입력해주세요.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '목표 금액은 숫자만 입력 가능합니다!',
                  },
                  min: {
                    value: 1,
                    message: '목표 금액은 0원보다 큰 금액이어야 합니다!',
                  },
                })}
              />
              <PriceUnit>원</PriceUnit>
            </PriceWrapper>
            {errors.price && <Warning>{errors.price.message}</Warning>}
          </SatchTargetInfo>
          <OathText>
            유혹이 다가올 때마다 그 물건을&nbsp;
            <Emphasis>샀다 치고</Emphasis> 이곳에 기록하여 목표에 꼭 도달할 수 있도록 하겠습니다.
          </OathText>
          <NowDate>
            <Today>{today.toISOString().slice(0, 10).replaceAll('-', '.')}</Today>
          </NowDate>
          <SubmitBtn
            text="등록하기"
            additionalStyles="position: absolute; left: 0; margin-top: 38px;"
          />
        </form>
      </Container>
    </Wrapper>
  );
};

export default SetGoals;
