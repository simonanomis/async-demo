console.log('Before');
getUser(1, function(user) {
    console.log('User', user);
    getRepositories(user.gitHubUsername, function(repositories) {
        console.log('Repositories', repositories);
    });
});
console.log('After');

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
