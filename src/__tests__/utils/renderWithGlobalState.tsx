import { render } from '@testing-library/react';
import { JSXElementConstructor, ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import AuthProvider from '../../context/AuthProvider';

// TODO 자동완성 가능하도록 변경
type RoutePath = string;
const renderWithGlobalState = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  { route = '/', initialState }: { route?: RoutePath; initialState?: ({ set }: any) => void },
) => {
  // window.history.pushState({}, 'Test page', route);
  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={[route]}>
          <RecoilRoot initializeState={initialState}>
            <AuthProvider>{children}</AuthProvider>
          </RecoilRoot>
        </MemoryRouter>
      ),
    }),
  };
};

export default renderWithGlobalState;
