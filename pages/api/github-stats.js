export default async function handler(req, res) {
    const GITHUB_USERNAME = "KDasaradha";
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Secure, no NEXT_PUBLIC
  
    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: "GitHub token missing" });
    }
  
    const headers = { Authorization: `Bearer ${GITHUB_TOKEN}` };
  
    try {
      const query = `
        {
          user(login: "${GITHUB_USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
              latestRestrictedContributionDate
            }
            pullRequests { totalCount }
            issues { totalCount }
            gists { totalCount }
            createdAt
            followers {
              totalCount
            }
            repositories(first: 100, isFork: false) {
              totalCount
              nodes {
                stargazers { totalCount }
                forks { totalCount }
                primaryLanguage { name }
              }
            }
          }
        }
      `;
  
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) throw new Error("GitHub API request failed");
  
      const data = await response.json();
      const user = data.data.user;
  
      let totalStars = 0,
        totalForks = 0,
        languageCount = {};
  
      user.repositories.nodes.forEach((repo) => {
        totalStars += repo.stargazers.totalCount;
        totalForks += repo.forks.totalCount;
        if (repo.primaryLanguage) {
          languageCount[repo.primaryLanguage.name] =
            (languageCount[repo.primaryLanguage.name] || 0) + 1;
        }
      });
  
      res.json({
        repos: user.repositories.totalCount,
        stars: totalStars,
        forks: totalForks,
        followers: user.followers.totalCount,
        contributions: user.contributionsCollection.contributionCalendar.totalContributions,
        pullRequests: user.pullRequests.totalCount,
        issues: user.issues.totalCount,
        gists: user.gists.totalCount,
        topLanguage: Object.keys(languageCount).reduce((a, b) =>
          languageCount[a] > languageCount[b] ? a : b
        ),
        createdAt: new Date(user.createdAt).toDateString(),
        lastContribution: user.contributionsCollection.latestRestrictedContributionDate || "Unknown",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  