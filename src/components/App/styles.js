import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

export const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;

  ${tablet} {
    width: 100%;
  }
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;

  ${tablet} {
    width: 100%;
  }
`;

export const NoData = styled.p`
  color: ${({ theme }) => theme.text};  
  font-size: 20px;
  text-align: center;
  margin-top: 200px;
  ${tablet} {
    width: 100%;
    margin-top: 100px;
  }
`;