import { addCommentApi, fetchAllIssuesApi, fetchCommentsApi, fetchIssueApi, fetchRepositoryApi } from "../service";
import { FETCH_COMMENTS, FETCH_ISSUE, FETCH_ISSUES, FETCH_REPOSITORIES } from "./actionTypes";

export const fetchRepositoryAction = (dispatch) => {
    fetchRepositoryApi().then(data => {
        dispatch({
            type: FETCH_REPOSITORIES,
            payload: data
        })
    })
}

export const fetchAllIssuesAction = (dispatch, repo) => {
    fetchAllIssuesApi(repo).then(data => {
        dispatch({
            type: FETCH_ISSUES,
            payload: data
        })
    })
}

export const fetchIssueAction = (dispatch, repo, issueid) => {
    fetchIssueApi(repo, issueid).then(data => {
        dispatch({
            type: FETCH_ISSUE,
            payload: data
        })
    });
    fetchCommentsApi(repo, issueid).then(data => {
        dispatch({
            type: FETCH_COMMENTS,
            payload: data
        })
    });
}

export const addCommentAction = (dispatch, repo, issueid, body) => {
    addCommentApi(repo, issueid, body);
}