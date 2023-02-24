import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 375px;
  width: 100%;
  margin: auto;
`;

type LayoutProps = ComponentPropsWithoutRef<'div'>;

const Layout = ({ children, ...rest }: LayoutProps) => <Wrapper {...rest}>{children}</Wrapper>;

export default Layout;
