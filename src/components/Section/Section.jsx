import { Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);
