"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { 
  Github, 
  Star, 
  GitBranch, 
  Users, 
  Code, 
  GitPullRequest, 
  AlertCircle, 
  FileText,
  Calendar,
  Clock,
  TrendingUp,
  Trophy,
  GitFork,
  FolderGit2
} from "lucide-react";

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

  // Enhanced stat configuration with icons and colors
  const statConfig = {
    repos: {
      label: "Repositories",
      icon: FolderGit2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      category: "code"
    },
    stars: {
      label: "Stars Earned",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      category: "achievement"
    },
    forks: {
      label: "Forks",
      icon: GitFork,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      category: "collaboration"
    },
    followers: {
      label: "Followers",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      category: "social"
    },
    contributions: {
      label: "Contributions",
      icon: TrendingUp,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      category: "activity"
    },
    pullRequests: {
      label: "Pull Requests",
      icon: GitPullRequest,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      category: "collaboration"
    },
    issues: {
      label: "Issues",
      icon: AlertCircle,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      category: "maintenance"
    },
    gists: {
      label: "Gists",
      icon: FileText,
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50 dark:bg-gray-950/20",
      category: "code"
    },
    topLanguage: {
      label: "Top Language",
      icon: Code,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      category: "skill"
    },
    createdAt: {
      label: "Joined GitHub",
      icon: Calendar,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      category: "milestone"
    },
    lastContribution: {
      label: "Last Contribution",
      icon: Clock,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      category: "activity"
    },
  };

  // Loading component
  if (loading) {
    return (
      <section id="github-stats" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Github className="text-2xl text-gray-700 dark:text-gray-300 animate-spin" />
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Loading GitHub stats...
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Error component
  if (error) {
    return (
      <section id="github-stats" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50/30 to-orange-50/20 dark:from-red-950/20 dark:via-pink-950/10 dark:to-orange-950/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border border-red-200 dark:border-red-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AlertCircle className="text-2xl text-red-500" />
              <div className="text-left">
                <p className="text-lg font-medium text-red-600 dark:text-red-400">
                  Error loading GitHub stats
                </p>
                <p className="text-sm text-red-500 dark:text-red-300">
                  {error}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Group stats by category
  const groupedStats = Object.entries(stats || {}).reduce((acc, [key, value]) => {
    const config = statConfig[key as keyof typeof statConfig];
    if (config) {
      if (!acc[config.category]) {
        acc[config.category] = [];
      }
      acc[config.category].push({ key, value, config });
    }
    return acc;
  }, {} as Record<string, Array<{ key: string; value: any; config: any }>>);

  const categoryLabels = {
    code: "Code & Repositories",
    achievement: "Achievements",
    collaboration: "Collaboration",
    social: "Community",
    activity: "Activity",
    maintenance: "Maintenance",
    skill: "Skills",
    milestone: "Milestones"
  };

  return (
    <section id="github-stats" className="relative py-16 overflow-hidden">
      {/* Compact background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/20 to-purple-50/10 dark:from-slate-900/50 dark:via-blue-950/20 dark:to-purple-950/10"></div>
      
      {/* Reduced animated background elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-200/10 dark:bg-blue-800/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200/10 dark:bg-purple-800/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative container mx-auto px-4">
        {/* Compact header section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4 p-3 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-black text-white shadow-md">
              <Github className="text-xl" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-200 dark:via-gray-400 dark:to-gray-200 bg-clip-text text-transparent">
                GitHub Activity
              </h2>
              <p className="text-xs text-muted-foreground font-medium">
                Live Statistics
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Compact stats grid - all in one section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {Object.entries(stats || {}).map(([key, value], statIndex) => {
              const config = statConfig[key as keyof typeof statConfig];
              if (!config) return null;
              
              const Icon = config.icon;
              return (
                <motion.div
                  key={key}
                  className="group"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: statIndex * 0.03,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <Card className="github-stats-card-compact relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <CardContent className="relative z-10 p-3 flex flex-col items-center text-center">
                      {/* Compact icon container */}
                      <div className={`mb-2 p-2 rounded-lg ${config.bgColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <Icon className={`text-lg bg-gradient-to-br ${config.color} bg-clip-text text-transparent`} />
                      </div>
                      
                      {/* Compact value */}
                      <span className={`text-sm font-bold bg-gradient-to-br ${config.color} bg-clip-text text-transparent mb-1`}>
                        {typeof value === "string" ? value : (value as number).toLocaleString()}
                      </span>
                      
                      {/* Compact label */}
                      <span className="text-xs text-muted-foreground font-medium text-center leading-tight">
                        {config.label}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Compact call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/KDasaradha525"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="text-sm group-hover:rotate-12 transition-transform duration-300" />
            <span>View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
