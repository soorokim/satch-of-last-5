/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-return-assign */
import dayjs from 'dayjs';
import { groupBy } from 'lodash';
import { useMemo, useState } from 'react';
import Calendar, { ViewCallbackProperties } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { goalState, Satch } from '../atoms/goalList';

const Wrapper = styled.div`
  margin-top: 52px;
  padding: 0 20px;
  box-sizing: border-box;
  .react-calendar {
    border: none;
    .react-calendar__navigation__label > span {
      font-family: 'LINE Seed Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: #79bcf6;
    }
    .react-calendar__month-view__weekdays {
      abbr {
        font-family: 'LINE Seed Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-decoration: none;
      }
    }
    .react-calendar__tile {
      width: 32px;
      height: 52px;
      font-family: 'LINE Seed Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #767676;
      padding: 0px;
      :hover {
        background-color: white;
      }
      .activeDate {
        margin: 0 auto;
        background-color: #79bcf6;
        width: 30px;
        height: 30px;
        line-height: 21px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .dateSummary {
        margin-top: 2px;
        font-family: 'LINE Seed Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        height: 10px;
        line-height: 13px;
        color: #191919;
      }
    }

    .react-calendar__tile--now {
      background-color: white;
      abbr {
        background-color: white;
        font-weight: bold;
      }
    }

    .react-calendar__navigation__arrow {
      :hover {
        background-color: white;
      }
      :focus {
        background-color: white;
      }
    }
    .react-calendar__navigation {
      display: block;
      margin-bottom: 0;
    }
    .react-calendar__navigation__label {
      background-color: white;
      :hover {
        background-color: white;
      }
      :focus {
        background-color: white;
      }
    }
    .react-calendar__tile--active {
      background-color: white;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
      color: white;
    }

    .react-calendar__month-view__days__day--weekend {
      color: #f24822;
    }

    .react-calendar__month-view__weekdays__weekday--weekend {
      color: #f24822;
    }
  }
`;

const Summary = styled.div`
  margin-top: 32px;
  width: 100%;
  max-width: 375px;
  background: #ffffff;

  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;

  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  letter-spacing: 0.04em;

  /* F폰트 컬러 / 900 */

  color: #191919;
  display: flex;
  justify-content: space-between;
  .number {
    color: #79bcf6;
  }
`;

const PrevIcon = () => (
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 13L1 7L7 1"
      stroke="#79BCF6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NextIcon = () => (
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.999999 13L7 7L1 1"
      stroke="#79BCF6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarPage = () => {
  const currentGoal = useRecoilValue(goalState);
  const [currentMonth, setCurrentMonth] = useState(dayjs().format('YYYY-MM'));
  const [monthString, setMonthString] = useState(dayjs().format('M월'));

  const satchData = useMemo(() => {
    const groupedData = groupBy(currentGoal.satchList, (stach: Satch) =>
      stach.date.toString().substring(0, 10),
    );

    const output = {} as Record<any, Satch[]>;

    Object.keys(groupedData)
      .filter((key) => key.includes(currentMonth))
      .forEach((key: string) => {
        output[key] = groupedData[key];
      });

    return output;
  }, [currentMonth, currentGoal]);

  const summaryOfMonth = useMemo(() => {
    let summary = 0;

    Object.keys(satchData).map((key) =>
      satchData[key].forEach((satch) => {
        summary += satch.price;
      }),
    );
    return summary;
  }, [satchData.length, currentMonth]);

  const onChangeMonth = ({ activeStartDate }: ViewCallbackProperties) => {
    setCurrentMonth(dayjs(activeStartDate).format('YYYY-MM'));
    setMonthString(dayjs(activeStartDate).format('M월'));
  };

  if (!currentGoal) return null;

  return (
    <Wrapper>
      <Calendar
        onActiveStartDateChange={onChangeMonth}
        calendarType="US"
        locale="ko-KR"
        prev2Label={null}
        next2Label={null}
        nextLabel={NextIcon()}
        prevLabel={<PrevIcon />}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        // eslint-disable-next-line
        // @ts-ignore
        formatDay={(_locale, date) => {
          const dateFormatString = dayjs(date).format().toString().substring(0, 10);

          if (satchData[dateFormatString]) {
            return <div className="activeDate">{date.getDate()}</div>;
          }

          return date.getDate().toString();
        }}
        tileContent={({ date }) => {
          const dateFormatString = dayjs(date).format().toString().substring(0, 10);
          let sum = 0;

          if (satchData[dateFormatString]) {
            // eslint-disable-next-line no-param-reassign
            sum = satchData[dateFormatString].reduce((prev, cur) => (prev += cur.price), 0);
          }

          return <div className="dateSummary">{sum > 0 ? sum.toLocaleString('ko-KR') : ' '}</div>;
        }}
      />
      <Summary>
        <span className="summaryOfMonth">{monthString}의 삿치</span>
        <span className="amount">
          총 <span className="number">{summaryOfMonth.toLocaleString('ko-KR')}</span> 원
        </span>
      </Summary>
    </Wrapper>
  );
};

export default CalendarPage;
