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

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUsername: 'simonanomis'})
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHib API ...');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}
