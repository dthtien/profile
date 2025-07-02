import React from "react";
import { projects } from "../components/Projects";

const PortfolioPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="space-y-10">
        {projects.map((project) => (
          <div key={project.name} className="p-6 border rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-3">{project.title}</p>
            <div className="flex gap-4 mb-3">
              {project.urls.github && (
                <a
                  href={project.urls.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  GitHub
                </a>
              )}
              {project.urls.website && (
                <a
                  href={project.urls.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  Website
                </a>
              )}
            </div>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {project.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
