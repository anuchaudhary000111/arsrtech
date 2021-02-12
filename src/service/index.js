const username = 'facebook';

export const fetchRepositoryApi = () => {
    return fetch('https://api.github.com/users/' + username + '/repos').then(res => res.json())
}

export const fetchAllIssuesApi = (repo) => {
    return fetch('https://api.github.com/repos/' + username + '/' + repo + '/issues').then(res => res.json())
}

export const fetchIssueApi = (repo, issue_number) => {
    return fetch('https://api.github.com/repos/' + username + '/' + repo + '/issues/' + issue_number).then(res => res.json())
}

export const fetchCommentsApi = (repo, issue_number) => {
    return fetch('https://api.github.com/repos/' + username + '/' + repo + '/issues/' + issue_number + '/comments').then(res => res.json())
}

export const addCommentApi = (repo, issue_number, body) => {
    return fetch('https://api.github.com/repos/' + username + '/' + repo + '/issues/' + issue_number + '/comments', {
        method: 'POST',
        body
    }).then(res => res.json())
}