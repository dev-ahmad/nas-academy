import styled from 'styled-components';
import { mobile } from 'styles/mediaQueries';

const RADIUS = 4;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.cardBackground};
  display: flex;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(191, 191, 191, 0.5);
  width: 270px;
  height: 132px;
  margin: auto;
`;

export const Card = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  height: 100%;
  width: 270px;
  padding: 21px 15px 0px 12px;
`;


export const Image = styled.img`
  background-size: 100%;
  width: 89px;
  height: 89px;
  object-fit: cover;
  flex-grow: 1;
`;

export const Content = styled.div`
  word-break: break-word;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: OpenSans;
  font-size: 12px;
  line-height: 16.34px;
  width: 142px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0px;
  font-weight: bold;
`;

export const Description = styled.p`
  color: #000000;
  font-family: OpenSans;
  font-size: 10px;
  line-height: 13.62px;
  width: 142px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0px;
  margin-top: 5px;
`;

export const Source = styled.div`
  color: ${({ theme }) => theme.textSecondary};
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

export const TimeDescription = styled.div`
  font-family: OpenSans;
  font-size: 8px;
  line-height: 10.89px;
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  position: absolute;
  bottom: 6px;
`;

export const CommentLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};

  &:visited {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const AddIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: -12px;
  background: #FFC700;
  left: 47%;
  border-radius: 100%;
`;

export const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  color: black;
`;