export async function getRepos(username) {
    try {
        const res = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`,
            { next: { revalidate: 3600 } }
        );
        if (!res.ok) throw new Error('Failed to fetch repos');
        const repos = await res.json();
        return repos.filter(repo => !repo.fork);
    } catch (error) {
        console.error(error);
        return [];
    }
}
