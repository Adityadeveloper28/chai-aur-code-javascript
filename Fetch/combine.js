async function fetchGitHubUserDataAndRepos(username) {
    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;
  
    try {
      const [userResponse, reposResponse] = await Promise.all([
        fetch(userUrl),
        fetch(reposUrl)
      ]);
  
      if (!userResponse.ok || !reposResponse.ok) {
        throw new Error(`An error occurred: ${userResponse.statusText} / ${reposResponse.statusText}`);
      }
  
      const userData = await userResponse.json();
      const userRepos = await reposResponse.json();
  
      return {
        userData,
        userRepos
      };
    } catch (error) {
      console.error('Error fetching the GitHub user data and repositories:', error);
    }
  }
  
  // Usage
  fetchGitHubUserDataAndRepos('Adityadeveloper28').then(data => {
    if (data) {
      console.log('User Data:', data.userData);
      console.log('Repositories:', data.userRepos);
    }
  });
  