export const projects = [
  {
    name: "DealHub",
    title: "The website displays bargain details from AU online stores, updated every hour and helps users compare car insurance prices among different providers in Australia.",
    urls: {
      github: "https://github.com/dthtien/deal-hub-backend",
      website: "https://www.beneficiumvilis.com/"
    },
    specs: [
      "Developed a ReactJS and Rails application for AU online stores' deals and car insurance price comparison.",
      "Built web crawlers to scrape data from various stores and insurance providers with daily updates via Sidekiq.",
      "Designed Material Design-inspired UI and deployed frontend to Vercel with CI/CD pipeline.",
      "Configured backend with Nginx, Puma, and Let's Encrypt, integrated Facebook Graph API and Slack."
    ]
  },
  {
    name: "DWF",
    title: "A distributed workflow runner using Sidekiq and Redis",
    urls: {
      github: "https://github.com/dthtien/wf",
      website: "https://rubygems.org/gems/dwf"
    },
    specs: [
      "Developed a distributed workflow runner using Sidekiq and Redis for efficient background processing.",
      "Implemented comprehensive test suite with RSpec and CI/CD pipeline using GitHub Actions.",
      "Published as RubyGem 'wf' with clear documentation, gaining significant community adoption."
    ]
  },
  {
    name: "TopLand",
    title: "A real estate statistics application for Ho Chi Minh City, Vietnam",
    urls: {
      github: "https://github.com/dthtien/real_estate_researcher"
    },
    specs:
    [
      "Built a ReactJS/Redux/Rails real estate statistics app for Ho Chi Minh City.",
      "Deployed API to Azure VPS using Capistrano and frontend to Heroku.",
      "Implemented Material Design UI with daily data scraping via Sidekiq.",
      "Configured CI/CD with CircleCI, Nginx, Puma, and Let's Encrypt.",
      "Integrated Facebook Graph API, Google Analytics, Skylight, and Slack."
    ]
  }
]

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
