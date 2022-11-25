import { ReactElement } from 'react';
import { Container } from './footer.styles';

export const Footer = ({ children }: { children: ReactElement }) => {
  return <Container>{children}</Container>;
};
