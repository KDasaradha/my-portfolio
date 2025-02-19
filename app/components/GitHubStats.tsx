// "use client";

// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/app/components/ui/card";
// import { useEffect, useState } from "react";

// const GITHUB_USERNAME = "KDasaradha";
// const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Store this securely in .env.local

// export default function GitHubStats() {
//   const [stats, setStats] = useState({
//     repos: 0,
//     stars: 0,
//     forks: 0,
//     followers: 0,
//     contributions: 0,
//     pullRequests: 0,
//     issues: 0,
//     gists: 0,
//     topLanguage: "",
//     createdAt: "",
//     lastContribution: "",
//   });

//   useEffect(() => {
//     const fetchGitHubStats = async () => {
//       try {
//         const headers: HeadersInit = GITHUB_TOKEN
//           ? { Authorization: `token ${GITHUB_TOKEN}` }
//           : {};

//         // Fetch all repositories
//         const reposRes = await fetch(
//           `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
//           { headers }
//         );
//         const repos = await reposRes.json();

//         let totalStars = 0;
//         let totalForks = 0;
//         let languageCount: Record<string, number> = {};

//         repos.forEach((repo: any) => {
//           totalStars += repo.stargazers_count;
//           totalForks += repo.forks_count;
//           if (repo.language) {
//             languageCount[repo.language] =
//               (languageCount[repo.language] || 0) + 1;
//           }
//         });

//         // Get the most used language
//         const topLanguage = Object.keys(languageCount).reduce(
//           (a, b) => (languageCount[a] > languageCount[b] ? a : b),
//           ""
//         );

//         // Fetch user details
//         const userRes = await fetch(
//           `https://api.github.com/users/${GITHUB_USERNAME}`,
//           { headers }
//         );
//         const userData = await userRes.json();

//         // Fetch total contributions, pull requests, and issues (GitHub GraphQL API)
//         const graphqlRes = await fetch("https://api.github.com/graphql", {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${GITHUB_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             query: `
//               {
//                 user(login: "${GITHUB_USERNAME}") {
//                   contributionsCollection {
//                     contributionCalendar {
//                       totalContributions
//                     }
//                     latestRestrictedContributionDate
//                   }
//                   pullRequests(first: 100, states: MERGED) {
//                     totalCount
//                   }
//                   issues(first: 100) {
//                     totalCount
//                   }
//                   gists(first: 100) {
//                     totalCount
//                   }
//                   createdAt
//                 }
//               }
//             `,
//           }),
//         });
//         const graphqlData = await graphqlRes.json();
//         const userGraphQL = graphqlData.data?.user;

//         setStats({
//           repos: repos.length,
//           stars: totalStars,
//           forks: totalForks,
//           followers: userData.followers || 0,
//           contributions:
//             userGraphQL?.contributionsCollection?.contributionCalendar
//               ?.totalContributions || 0,
//           pullRequests: userGraphQL?.pullRequests?.totalCount || 0,
//           issues: userGraphQL?.issues?.totalCount || 0,
//           gists: userGraphQL?.gists?.totalCount || 0,
//           topLanguage: topLanguage || "Unknown",
//           createdAt: new Date(userGraphQL?.createdAt).toDateString(),
//           lastContribution:
//             userGraphQL?.contributionsCollection
//               ?.latestRestrictedContributionDate || "Unknown",
//         });
//       } catch (error) {
//         console.error("Error fetching GitHub stats:", error);
//       }
//     };

//     fetchGitHubStats();
//   }, []);

//   return (
//     <section id="github-stats" className="py-20 bg-secondary/10">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">
//           <span className="gradient-text">GitHub Activity</span>
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {Object.entries(stats).map(([key, value]) => (
//             <motion.div
//               key={key}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-center capitalize">
//                     {key.replace(/([A-Z])/g, " $1")}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-2xl font-bold text-center">
//                     {typeof value === "string" ? value : value.toLocaleString()}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { useEffect, useState } from "react";

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch("/api/github-stats");
        if (!response.ok) throw new Error("Failed to fetch GitHub stats");
        const data = await response.json();
        setStats(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) return <p className="text-center">Loading GitHub stats...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const labels = {
    repos: "Repositories",
    stars: "Stars",
    forks: "Forks",
    followers: "Followers",
    contributions: "Contributions",
    pullRequests: "Pull Requests",
    issues: "Issues",
    gists: "Gists",
    topLanguage: "Top Language",
    createdAt: "Joined GitHub",
    lastContribution: "Last Contribution",
  };

  return (
    <section id="github-stats" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">GitHub Activity</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stats && Object.entries(stats).map(([key, value]: [keyof typeof stats, any]) => (
            <motion.div
              key={String(key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">{labels[key as keyof typeof labels]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-center">
                    {typeof value === "string" ? value : (value as number).toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
