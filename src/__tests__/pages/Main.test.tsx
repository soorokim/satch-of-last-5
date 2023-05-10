import { screen } from '@testing-library/react';
import Main from '../../pages/Main/Main';
import renderWithGlobalState from '../utils/renderWithGlobalState';
import { goalState } from '../../atoms/goalList';

test('Main 컴포넌트가 랜더링된다.', async () => {
  const initializeState = ({ set }: any) => {
    set(goalState, {
      id: 'test-id',
      emoticon: '',
      name: '파리 여행',
      price: 10000000,
      percent: 5,
      createdAt: new Date(),
      satchList: [
        {
          name: '삿치템',
          price: 34000,
          date: '2023-02-25T20:57:24.569Z',
          id: '350e8ca1-1d59-4a03-9d90-791be4fc5629',
        },
      ],
    });
  };

  renderWithGlobalState(<Main />, { initialState: initializeState });

  await screen.findByText(/힘을 내요!/);
});

test('Main 컴포넌트 satchList가 없을때 입력해달라는 문구가 확인된다.', async () => {
  const initializeState = ({ set }: any) => {
    set(goalState, {
      id: 'test-id',
      emoticon: '',
      name: '파리 여행',
      price: 10000000,
      percent: 5,
      createdAt: new Date(),
      satchList: [],
    });
  };

  renderWithGlobalState(<Main />, { initialState: initializeState });

  await screen.findByText(/아직 내역이 없어요./);
});
