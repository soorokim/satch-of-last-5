import styled from 'styled-components';
import { UseFormRegister, UseFormHandleSubmit, FormState } from 'react-hook-form';
import TextUnderline from './TextUnderline';
import SubmitBtn from './SubmitBtn';

interface SatchItemProps {
  name: string;
  price: number;
  date: Date;
}

interface SatchProps {
  register: UseFormRegister<SatchItemProps>;
  handleSubmit: UseFormHandleSubmit<SatchItemProps, undefined>;
  formState: FormState<SatchItemProps>;
  onValid: ({ name, price, date }: SatchItemProps) => void;
  satchItem: string | undefined;
  satchPrice: number | undefined;
  satchDate: Date | undefined;
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

const SatchInput = styled.div`
  position: relative;
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

const SatchInputWrapper = styled.div`
  position: relative;
`;

const PriceUnit = styled.span`
  position: absolute;
  right: 0;
  top: 20px;
  color: #191919;
  font-weight: 700;
`;

const SatchDate = styled.div`
  position: relative;
  margin-bottom: 268px;
`;

const Warning = styled.p`
  position: absolute;
  top: 50px;
  color: red;
  font-size: medium;
`;

const DateWarning = styled.p`
  position: absolute;
  top: 75px;
  color: red;
  font-size: medium;
`;

const SetSatchForm = ({
  register,
  handleSubmit,
  formState: { errors },
  onValid,
  satchItem,
  satchPrice,
  satchDate,
}: SatchProps) => (
  <Container>
    {satchItem ? (
      <Header>
        삿치템{' '}
        <TextUnderline fontSize="24px" fontWeight="700">
          수정하기
        </TextUnderline>
      </Header>
    ) : (
      <Header>
        오늘의{' '}
        <TextUnderline fontSize="24px" fontWeight="700">
          삿치템!
        </TextUnderline>
      </Header>
    )}
    <form onSubmit={handleSubmit(onValid)}>
      <SatchInput>
        <Title>삿치템명</Title>
        <Input
          defaultValue={satchItem}
          {...register('name', { required: '삿치템을 꼭 입력해주세요!' })}
        />
        <Warning>{errors?.name?.message}</Warning>
      </SatchInput>
      <SatchInput>
        <Title>금액</Title>
        <SatchInputWrapper>
          <Input
            defaultValue={satchPrice}
            type="text"
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
        </SatchInputWrapper>
        <Warning>{errors?.price?.message}</Warning>
      </SatchInput>
      <SatchDate>
        <Title>날짜</Title>
        <DateWarning>{errors?.date?.message}</DateWarning>
        <Input
          defaultValue={satchDate ? `${satchDate}` : new Date().toISOString().substring(0, 10)}
          type="date"
          {...register('date', { required: '날짜를 꼭 입력해주세요!' })}
        />
      </SatchDate>
      <SubmitBtn text={satchItem ? '수정하기' : '등록하기'} />
    </form>
  </Container>
);

export default SetSatchForm;
