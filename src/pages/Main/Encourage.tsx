import styled from 'styled-components';
import GomImage from '../../assets/gom.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-left: 19px;
`;

const EmojiWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #ebf5ff;
  border: 1px solid #79bcf6;
  border-radius: 100px;
`;

const Emoji = styled.img`
  width: 42px;
  height: 42px;
  padding: 9px;
`;
const EncourageTitle = styled.div`
  width: 154px;
  height: 28px;
  line-height: 30px;
  background: #f1f1f5;
  border-radius: 4px 4px 4px 0px;
  margin-left: 12px;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  text-align: center;
`;

const Encourage = () => (
  <Wrapper>
    <EmojiWrapper>
      <Emoji src={GomImage} />
    </EmojiWrapper>
    <EncourageTitle>힘을 내요! 으쌰으쌰!</EncourageTitle>
  </Wrapper>
);

export default Encourage;
