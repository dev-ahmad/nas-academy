import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

const HEIGHT = 95;

  export const Footer = styled.header`
  background: radial-gradient(98% 20% at top, transparent 50%, #FFC700 60%);
  height: ${HEIGHT}px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  box-shadow: 0 1px 0 0 black;
  position: fixed;
  bottom: 0;
`;

export const Content = styled.div`
  padding-top: 5px;
  height: 100%;
  width: 100%;
  align-items: center;
  ${tablet} {
    max-width: 96%;
  }
`;

export const Title = styled.p`
  color: black;
  font-family: FatFrank;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
`;
