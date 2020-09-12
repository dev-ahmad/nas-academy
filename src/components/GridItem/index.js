import React from 'react';
import PropTypes from 'prop-types';
import getSiteHostname from 'utils/getSiteHostname';
import TimeAgo from 'react-timeago';
import getArticleLink, { HN_USER, HN_ITEM } from 'utils/getArticleLink';

import { Item, Card, Image, Content, Title, Source, TimeDescription, Description, AddIcon, Icon } from './styles';

const GridItem = ({ by, kids = [], score, url, title, id, time, type }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, id });
  const commentUrl = `${HN_ITEM}${id}`;

  return (
    <a href={link} target="_blank" rel="nofollow noreferrer nofollow">
      <Item>
        <Card>
          <Content>
            <Title>{title}</Title>
            <Description>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
            </Description>
            <TimeDescription>
              <TimeAgo date={new Date(time * 1000).toISOString()} />{' | '}
              {type}
            </TimeDescription>
          </Content>
          <Image src="https://marvel-live.freetls.fastly.net/canvas/2020/5/8fb03cbbacf84f24af62f3ad9e64384d?quality=95&fake=.png" />
          <AddIcon>
            <Icon className="fas fa-plus" />
          </AddIcon>
        </Card>
      </Item>
    </a>
  );
};

GridItem.propTypes = {
  by: PropTypes.string.isRequired,
  kids: PropTypes.array,
  score: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default GridItem;
