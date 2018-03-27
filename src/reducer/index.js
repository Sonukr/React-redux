import {combineReducers} from 'redux';

/**
 * A reducer takes two arguments, the current state and an action.
 */
const quotes = (state = []) => {
  return state;
};

export const Reducer = combineReducers({
    quotes
})