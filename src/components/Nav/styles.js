import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

const HEIGHT = 48;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.menuBackground};
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  height: ${HEIGHT}px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  box-shadow: 0 1px 0 0 black;
  position: fixed;
  top: 0;
  z-index: 99999;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${tablet} {
    max-width: 96%;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-left: 12px;
  font-size: 18px;
  cursor: pointer;
`;

export const Title = styled.p`
  color: #FFC700;
  font-family: FatFrank;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  margin-left: 25px;
  font-weight: bold;
`;

export const SpanTitle = styled.span`
  color: ${({ theme }) => theme.spanTitle};
  font-family: FatFrank;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
`;

export const Spacer = styled.div`
  height: ${HEIGHT}px;
`;

export const ExternalLink = styled.a`
  display: flex;
`;


export const Input = styled.input`
  height: 44px;
  width: 100%;
  color: black;
  background: #FFC700;
  border-radius: 0px;
  padding-left: 10px;
  &:hover {
    outline-width: 0;
  }
`;