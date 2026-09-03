const GITHUB_USERNAME = "KDasaradha";
const GITHUB_API = "https://api.github.com";

async function githubFetch(path, token) {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  return response.json();
}

function getTopLanguage(languageCount) {
  return Object.keys(languageCount).reduce(
    (topLanguage, language) =>
      !topLanguage || languageCount[language] > languageCount[topLanguage]
        ? language
        : topLanguage,
    "Unknown"
  );
}

function summarizeRepositories(repositories) {
  return repositories.reduce(
    (summary, repository) => {
      summary.stars += repository.stargazers_count || 0;
      summary.forks += repository.forks_count || 0;

      if (repository.language) {
        summary.languages[repository.language] =
          (summary.languages[repository.language] || 0) + 1;
      }

      return summary;
    },
    { stars: 0, forks: 0, languages: {} }
  );
}

async function getPublicStats() {
  const [user, repositories] = await Promise.all([
    githubFetch(`/users/${GITHUB_USERNAME}`),
    githubFetch(`/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
  ]);
  const summary = summarizeRepositories(
    repositories.filter((repository) => !repository.fork)
  );

  return {
    repos: user.public_repos,
    stars: summary.stars,
    forks: summary.forks,
    followers: user.followers,
    contributions: "Unavailable",
    pullRequests: "Unavailable",
    issues: "Unavailable",
    gists: user.public_gists,
    topLanguage: getTopLanguage(summary.languages),
    createdAt: new Date(user.created_at).toDateString(),
    lastContribution: "Unavailable",
  };
}

async function getAuthenticatedStats(token) {
  const query = `
    {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection { contributionCalendar { totalContributions } latestRestrictedContributionDate }
        pullRequests { totalCount }
        issues { totalCount }
        gists { totalCount }
        createdAt
        followers { totalCount }
        repositories(first: 100, isFork: false) {
          totalCount
          nodes { stargazers { totalCount } forks { totalCount } primaryLanguage { name } }
        }
      }
    }
  `;
  const response = await fetch(`${GITHUB_API}/graphql`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

  const payload = await response.json();
  if (payload.errors?.length || !payload.data?.user) {
    throw new Error(payload.errors?.[0]?.message || "GitHub user not found");
  }

  const user = payload.data.user;
  const summary = user.repositories.nodes.reduce(
    (result, repository) => {
      result.stars += repository.stargazers.totalCount;
      result.forks += repository.forks.totalCount;
      if (repository.primaryLanguage) {
        const language = repository.primaryLanguage.name;
        result.languages[language] = (result.languages[language] || 0) + 1;
      }
      return result;
    },
    { stars: 0, forks: 0, languages: {} }
  );

  return {
    repos: user.repositories.totalCount,
    stars: summary.stars,
    forks: summary.forks,
    followers: user.followers.totalCount,
    contributions: user.contributionsCollection.contributionCalendar.totalContributions,
    pullRequests: user.pullRequests.totalCount,
    issues: user.issues.totalCount,
    gists: user.gists.totalCount,
    topLanguage: getTopLanguage(summary.languages),
    createdAt: new Date(user.createdAt).toDateString(),
    lastContribution:
      user.contributionsCollection.latestRestrictedContributionDate || "Unknown",
  };
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let stats;

    if (process.env.GITHUB_TOKEN) {
      try {
        stats = await getAuthenticatedStats(process.env.GITHUB_TOKEN);
      } catch (error) {
        console.warn("GitHub token rejected; using public stats:", error.message);
        stats = await getPublicStats();
      }
    } else {
      stats = await getPublicStats();
    }

    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
    return res.status(200).json(stats);
  } catch (error) {
    console.error("GitHub stats request failed:", error);
    return res.status(502).json({ error: "Unable to load GitHub stats" });
  }
}
