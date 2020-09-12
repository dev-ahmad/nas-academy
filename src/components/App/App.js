import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import List from 'components/List';
import Grid from 'components/Grid';
import Loader from 'components/Loader';
import { layouts, themes } from 'store/app/utils';
import { colorsDark, colorsLight } from 'styles/palette';

import { Wrapper, EmptyContainer, NoData } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredStories: [],
      searchValue: ''
    };
  }

  static defaultProps = {
    stories: [],
  };

  static propTypes = {
    layout: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    stories: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    storyIds: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasMoreStores: PropTypes.bool.isRequired,
    fetchStories: PropTypes.func.isRequired,
    fetchStoriesFirstPage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    this.setBodyBackgroundColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
    this.setState({
      stories: this.props.stories
    })
  };

  filterTitle = (e) => {
    if (e.target.value.length == 0) {
      this.setState({
        searchValue: e.target.value,
        filteredStories: []
      })
    } else {
      this.setState({
        searchValue: e.target.value,
        filteredStories: this.props.stories.filter(function (story) {
          return story.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
      })
    }
  }


  render() {
    const { stories, layout, theme, hasMoreStores } = this.props;
    return (
      <ThemeProvider theme={theme === themes.light ? colorsLight : colorsDark}>
        <div>
          <Nav filterTitle={this.filterTitle} />
          <Wrapper>
            {
              this.state.searchValue.length > 0 && this.state.filteredStories.length == 0 ? (
                <EmptyContainer>
                  <NoData>There's No Story</NoData>
                </EmptyContainer>
              ) : (
                  <InfiniteScroll
                    dataLength={stories.length}
                    next={this.fetchStories}
                    hasMore={hasMoreStores}
                    loader={
                      this.state.filteredStories.length > 0 ? (
                        null
                      ) : (
                          <Loader />
                        )
                    }
                    style={{
                      height: '100%',
                      overflow: 'visible',
                      marginTop: '50px',
                    }}
                  >
                    {layout === layouts.list ? <List stories={stories} /> : <Grid stories={this.state.filteredStories.length > 0 ? this.state.filteredStories : stories} />}
                  </InfiniteScroll>
                )

            }
          </Wrapper>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
