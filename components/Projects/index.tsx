import { projects } from "../shared/details";

const Projects = () => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-3">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl mx-auto py-3 lg:max-w-none">
        <h2 className="text-2xl px-6 font-bold text-gray-900">
          Personal Projects
        </h2>
        <div className="mt-6">
          {
            projects.map((project) => (
              <div key={project.name} className="flex flex-col mb-4 sm:justify-start even:bg-white odd:bg-slate-50 px-6 py-3">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <h3 className="text-sm text-gray-500 print:text-xs">
                    {project.title}
                  </h3>
                  <div className="mt-2">
                    {
                      project.urls.github && (
                        <a
                          href={project.urls.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-gray-900"
                        >
                          GitHub
                        </a>

                      )
                    }
                    {project.urls.website && (
                      <>
                        <span className="mx-2 text-gray-500">|</span>
                        <a
                          href={project.urls.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-gray-900"
                        >
                          Website
                        </a>
                      </>
                    )}
                  </div>
                  <ul className="list-disc list-inside mt-2">
                    {project.specs.map((spec) => (
                      <li key={spec} className="text-sm text-gray-500">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
