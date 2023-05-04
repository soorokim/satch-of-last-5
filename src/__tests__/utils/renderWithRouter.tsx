import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { JSXElementConstructor, ReactElement } from 'react';
import userEvent from '@testing-library/user-event';

// TODO 자동완성 가능하도록 변경
type RoutePath = string;

const renderWithRouter = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  { route = '/' }: { route?: RoutePath },
) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export default renderWithRouter;
