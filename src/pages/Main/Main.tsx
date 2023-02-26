import { Goal } from '../../atoms/goalList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import NonStachList from '../../components/NonStachList';
import ProgressBar from '../../components/ProgressBar';
import SatchList from '../../components/SatchList';
import ToAchieve from './ToAchieve';

const Wrapper = styled.div`
  margin-top: 10%;
`;
const TotalSatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 11px;
`;

const TotalPrice = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #000000;
`;
const TotalTitle = styled.div`
  color: #000000;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
`;

const PlusWrapper = styled.div`
position: sticky;
bottom: 0;
float:right;
width: 50px;
height: 50px;
border: 1px solid #79BCF6;
border-radius: 100px;
margin: 20px;
`

const PlusButton = styled.button`
position: relative;
width: 50px;
height: 50px;
background: #79BCF6;
border: 1px solid #79BCF6;
border-radius: 100px;
z-index:0;
`
const Plus = styled.div`
position: absolute;
left: 8px;
top: -8px;
font-size: 50px;
z-index:9999;
font-weight: 250;
color: white;
`
const Main = () => {
    const [goal, setGoal] = useState<Goal>({
        emoticon: '', name: '', price: 0, satchList: [], percent: 0, id: '', createdAt: new Date, endedAt: new Date
    });

    useEffect(() => {
        fetch('http://localhost:5173/data/satch.json', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data: Goal[]) => {
                const currentGoal = data[0];
                setGoal(currentGoal);
            });
    }, []);
    console.log(goal)
    return (
        <Wrapper>
            <ToAchieve price={goal.price} satchList={goal.satchList} />
            <ProgressBar goal={goal} />
            <TotalSatch>
                <TotalTitle>삿치 리스트</TotalTitle>
                <TotalPrice>{`총 ${goal.price.toLocaleString('ko-KR')}원`}</TotalPrice>
            </TotalSatch>
            {goal.satchList.length === 0 ? <NonStachList /> : <SatchList satchList={goal.satchList} />}
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