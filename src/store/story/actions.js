import hackerNewsApi from 'services/hackerNewsApi';
import { buildRequestCreator } from 'store/utils';

export const actionTypes = {
  FETCH_STORY_IDS: `FETCH_STORY_IDS`,
  FETCH_STORIES: `FETCH_STORIES`,
};

const actions = {
  fetchStoryIds: buildRequestCreator(
    actionTypes.FETCH_STORY_IDS,
    ({ request, payload, dispatch }) => {
      dispatch(request.request(payload));
      return hackerNewsApi
        .getTopStoryIds()
        .then(storyIds => {
          dispatch(request.success({ storyIds }));
          dispatch(actions.fetchStories({ storyIds, page: 0 }));
          return storyIds;
        })
        .catch(err => dispatch(request.failure(err)));
    },
  ),
  fetchStories: buildRequestCreator(actionTypes.FETCH_STORIES, ({ request, payload, dispatch }) => {
    const { storyIds, page } = payload;
    dispatch(request.request(payload));
    return hackerNewsApi
      .getStoriesByPage(storyIds, page)
      .then(stories => dispatch(request.success({ stories })))
      .catch(err => dispatch(request.failure(err)));
  }),
};

export default actions;
