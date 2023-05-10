import { render } from '@testing-library/react';
import { JSXElementConstructor, ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../context/AuthProvider';

// TODO 자동완성 가능하도록 변경
type RoutePath = string;
const renderWithGlobalState = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  { route = '/' }: { route?: RoutePath },
  initialState?: ({ set }: any) => void,
) => {
  window.history.pushState({}, 'Test page', route);
  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: ({ children }) => (
        <BrowserRouter>
          <RecoilRoot initializeState={initialState}>
            <AuthProvider>{children}</AuthProvider>
          </RecoilRoot>
        </BrowserRouter>
      ),
    }),
  };
};

export default renderWithGlobalState;
