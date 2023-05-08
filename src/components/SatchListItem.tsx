import styled from 'styled-components';
import { Satch } from '../atoms/goalList';
import ButtonImage from '../assets/button.png';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  height: 64px;
  margin-top: 14px;
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 16px;
`;
const Text = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-left: 20px;
`;
const ButtonBeside = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #000000;
`;

const Button = styled.button`
  background-color: white;
  width: 15px;
  margin-right: 15px;
  margin-top: 4px;
`;

const ButtonIcon = styled.img`
  width: 7px;
  height: 14px;
`;

interface SatchItemProps {
  item: Satch;
  onClick: (item: Satch) => void;
}

const SatchListItem = ({ item, onClick }: SatchItemProps) => {
  const handleOnClick = () => {
    onClick(item);
  };

  return (
    <Item>
      <Text>{item.name}</Text>
      <ButtonBeside>
        <Price>{`+ ${item.price.toLocaleString('ko-KR')}원`}</Price>
        <Button onClick={handleOnClick}>
          <ButtonIcon src={ButtonImage} />
        </Button>
      </ButtonBeside>
    </Item>
  );
};

export default SatchListItem;
