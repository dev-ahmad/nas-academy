import React from 'react';
import PropTypes from 'prop-types';
import { layouts, themes } from 'store/app/utils';

import { Header, Spacer, NavSection, Content, Icon, Title, ExternalLink, SpanTitle, Input } from './styles';


const Nav = ({ layout, theme, setLayout, setTheme, filterTitle }) => (
  <div>
    <Header>
      <Content>
        <NavSection>
          <ExternalLink href="https://nas.academy" target="_blank">
            <Title> HACKER<SpanTitle>NEWS</SpanTitle>.</Title>
          </ExternalLink>
        </NavSection>
        <NavSection>
          {layout === layouts.list ? (
            <Icon onClick={() => setLayout(layouts.grid)}>
              <i className="fas fa-th-large" />
            </Icon>
          ) : (
              <Icon onClick={() => setLayout(layouts.list)}>
                <i className="fas fa-th-list" />
              </Icon>
            )}
          {theme === themes.light ? (
            <Icon onClick={() => setTheme(themes.dark)}>
              <i className="fas fa-moon" />
            </Icon>
          ) : (
              <Icon onClick={() => setTheme(themes.light)}>
                <i className="fas fa-sun" />
              </Icon>
            )}
        </NavSection>
      </Content>
      <Input onChange={(e) =>filterTitle(e)} type="text" placeholder="Search for a Story"/>
    </Header>
    <Spacer />
  </div>
);

Nav.propTypes = {
  layout: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  setLayout: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
  filterTitle: PropTypes.func.isRequired,
};

export default Nav;
