async function fetchGitHubUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const repos = await response.json();
      return repos;
    } catch (error) {
      console.error('Error fetching the GitHub user repositories:', error);
    }
  }
  
  // Usage
  fetchGitHubUserRepos('Adityadeveloper28').then(repos => {
    if (repos) {
      console.log(repos);
    }
  });
  