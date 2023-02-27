import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { currentGoalState, Satch } from '../../atoms/goalList';
import NonStachList from '../../components/NonStachList';
import ProgressBar from '../../components/ProgressBar';
import SatchList from '../../components/SatchList';
import ToAchieve from './ToAchieve';
import Encourage from './Encourage';

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Card = styled.div`
  width: 100%;
  max-width: 375px;
  height: 336px;
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 16px;
`;
const NonSatchListWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
`;

const PlusWrapper = styled.div`
  position: sticky;
  bottom: 0;
  float: right;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  padding: 20px;
`;

const PlusButton = styled.button`
  position: sticky;
  bottom: 0px;
  right: 0px;
  width: 50px;
  height: 50px;
  background: #79bcf6;
  border: 1px solid #79bcf6;
  border-radius: 100px;
  z-index: 0;
`;
const Plus = styled.div`
  position: absolute;
  left: 10px;
  top: -5px;
  font-size: 50px;
  z-index: 9999;
  font-weight: 250;
  color: white;
`;

const Main = () => {
    const currentGoal = useRecoilValue(currentGoalState);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentGoal === undefined) {
            navigate('/initial');
        }
    }, [currentGoal]);

    if (currentGoal === undefined) {
        return null;
    }

    const satchTotalPrice = currentGoal.satchList.reduce(
        (acc: number, cur: Satch) => acc + cur.price,
        0,
    );

    return (
        <Wrapper>
            <Card>
                <ToAchieve
                    name={currentGoal.name}
                    price={currentGoal.price}
                    satchList={currentGoal.satchList}
                />
                <Encourage />
                <ProgressBar satchTotalPrice={satchTotalPrice} goalPrice={currentGoal.price} />
            </Card>
            {
                currentGoal.satchList.length === 0 ? (
                    <NonSatchListWrapper>
                        <NonStachList />
                    </NonSatchListWrapper>

                ) : (
                    <SatchList satchList={currentGoal.satchList} currentGoal={currentGoal} />
                )
            }
            <Link to="/setsatchitem">
                <PlusWrapper>
                    <PlusButton>
                        <Plus>+</Plus>
                    </PlusButton>
                </PlusWrapper>
            </Link>
        </Wrapper >
    );
};

export default Main;
