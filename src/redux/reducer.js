import { FETCH_COMMENTS, FETCH_ISSUE, FETCH_ISSUES, FETCH_REPOSITORIES } from "./actionTypes";

const initialState = {
  repositories: [],
  issues: [],
  issue: {},
  comments: []
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload
      }
    case FETCH_ISSUES:
      return {
        ...state,
        issues: action.payload
      }
    case FETCH_ISSUE:
      return {
        ...state,
        issue: action.payload
      }
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    default:
      return state
  }
}
