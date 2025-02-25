"use client";

import React from "react";
import { useTheme } from "next-themes";

const MkDocsLink = () => {
  const { theme } = useTheme();

  return (
    <section id="mkdocs" className="py-20 bg-primary/10 flex justify-center">
      <div className="max-w-3xl w-full mx-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold">
            📖 My MkDocs – A Collection of My Learnings & Notes
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
            This MkDocs website serves as my shorthand notes, covering things I
            have learned and want to explore further. Written in Markdown, it
            includes essential topics like Python, FastAPI, Pytest, DevOps, and
            more.
          </p>

          <div className="mt-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg max-w-2xl bg-secondary/10">
            <h3 className="text-lg font-semibold mb-2">📌 Key Topics Covered</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✅ Core Python Concepts</li>
              <li>✅ Functions & Classes</li>
              <li>✅ Decorators & Error Handling</li>
              <li>✅ OOP & Data Structures</li>
              <li>✅ Code Optimization</li>
              <li>✅ Docker & GitHub</li>
              <li>✅ FastAPI & HTTP Status Codes</li>
              <li>✅ Pytest & CI/CD Pipelines</li>
              <li>✅ DevOps Essentials</li>
              <li>✅ SQLAlchemy & SQLite Testing</li>
              <li>✅ RESTful APIs</li>
              <li>✅ Microservices Architecture</li>
            </ul>
          </div>

          <a
            href="https://night-fury.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 px-4 py-2 rounded-lg shadow-lg transition-all text-white font-medium ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            View My Documentation 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default MkDocsLink;
