import { buildActionCreator } from 'store/utils';

export const actionTypes = {
  SET_THEME: `SET_THEME`,
  SET_LAYOUT: `SET_LAYOUT`,
};

const actions = {
  setTheme: buildActionCreator(actionTypes.SET_THEME),
  setLayout: buildActionCreator(actionTypes.SET_LAYOUT),
};

export default actions;
