import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { currentGoalState, Satch } from '../../atoms/goalList';
import Footer from '../../components/Footer';
import NonStachList from '../../components/NonStachList';
import ProgressBar from '../../components/ProgressBar';
import SatchList from '../../components/SatchList';
import ToAchieve from './ToAchieve';
import Encourage from './Encourage';


const Wrapper = styled.div`
  margin-top: 40px;
`;

const Card = styled.div`
width: 375px;
height: 336px;
background: #FFFFFF;
border: 1px solid #EDEDED;
border-radius: 16px;
`;


const PlusWrapper = styled.div`
  position: sticky;
  bottom: 0;
  float: right;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  padding:20px;
`;

const PlusButton = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  background: #79bcf6;
  border: 1px solid #79bcf6;
  border-radius: 100px;
  z-index: 0;
`;
const Plus = styled.div`
position: absolute;
left: 8px;
top: -8px;
font-size: 50px;
z-index:9999;
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

    const satchTotalPrice = currentGoal.satchList.reduce((acc: number, cur: Satch) => acc + cur.price, 0);

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
                    <NonStachList />
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
            <Footer />
        </Wrapper >
    );
};

export default Main;
