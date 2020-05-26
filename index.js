console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repository) {
    getCommits(repository, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({id: id, gitHubUsername: 'simonanomis'})
        }, 2000);
    });  
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHib API ...');
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}
