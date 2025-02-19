class GitHubAPI {
	url = "https://api.github.com";

	getRepos(userName) {
		// https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
		return fetch(`${this.url}/users/${userName}/repos`, {
			headers: {
				Accept: "application/vnd.github+json",
			},
		}).then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			throw Error(resp.status);
		});
	}
}

export default GitHubAPI;