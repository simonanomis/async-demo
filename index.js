console.log('Before');

// Callback-based approach
//
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

//Promise-based approach
// getUser(1)
//         .then(user => getRepositories(user.gitHubUsername))
//         .then(repos => getCommits(repos[0]))
//         .then(commits => console.log('Commits: ', commits))
//         .catch(error => console.log("Error", error.message));

//Async and await approach
async function displayCommits() {
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits); 
    } catch (err) {
        console.log('Error', error.message);
    }
}

displayCommits();

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
            console.log('Calling GitHib API for repos...');
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API for commits...');
            resolve(['commit']);
        }, 2000);
    });
}

console.log('After');