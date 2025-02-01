export const projects = [
  {
    name: "Deal Hub",
    title: "The website displays bargain details from AU online stores, updated every hour.",
    urls: {
      github: "https://github.com/dthtien/deal-hub-backend",
      website: "https://www.beneficiumvilis.com/"
    },
    specs: [
      "Developed an application, focused on AU online stores' deals, utilizing ReactJS, and Rails as the technology stack.",
      "Implemented CI/CD to run tests and distribute the app to Vultr cloud.",
      "Designed a user-friendly web-based UI inspired by Google Material Design, enhancing the overall user experience.",
      "Deployed the front-end to Vercel, ensuring high availability and scalability of the application.",
      "Utilized background processing with Sidekiq to scrape data daily, ensuring up-to-date and accurate information for users.",
      "Implemented continuous integration with CircleCI, ensuring the stability and reliability of the application through automated testing and deployment.",
      "Configured the backend with Nginx, Puma, and Let's Encrypt, optimizing performance and security.",
      "Integrated various third-party APIs, including Facebook Graph API and Slack, enhancing functionality and providing valuable insights.",
      "Managed the project on GitHub, maintaining a clean and organized codebase for efficient collaboration and version control."
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
      "Developed Dwf, a distributed workflow runner utilizing Sidekiq and Redis, enabling efficient background processing and storage of workflow state.",
      "Implemented a comprehensive test suite using RSpec and SimpleCov to ensure thorough coverage of all possible scenarios, enhancing the reliability and stability of the application.",
      "Integrated Continuous Integration with GitHub Actions, automating the build and testing process for seamless development and deployment.",
      "Garnered significant recognition and popularity within the developer community, with numerous stars on GitHub and a high number of installations on RubyGem.",
      "Published the RubyGem 'wf', providing developers with a powerful and user-friendly tool for managing and executing workflows.",
      "Maintained clear and concise documentation, enabling easy adoption and understanding of the Dwf framework.",
      "Ensured consistency in coding style and best practices, adhering to industry standards and guidelines.",
      "Diligently proofread all code and documentation, eliminating errors and ensuring the highest quality and reliability of the application."
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
      "Developed a statistics application, TopLands, focused on Ho Chi Minh real estate prices, utilizing ReactJS, Redux, and Rails as the technology stack.",
      "Implemented Capistrano to deploy the API to Azure VPS, ensuring smooth and efficient deployment processes.",
      "Designed a user-friendly web-based UI inspired by Google Material Design, enhancing the overall user experience.",
      "Deployed the front-end to Heroku, ensuring high availability and scalability of the application.",
      "Utilized background processing with Sidekiq to scrape data daily, ensuring up-to-date and accurate information for users.",
      "Implemented continuous integration with CircleCI, ensuring the stability and reliability of the application through automated testing and deployment.",
      "Configured the backend with Nginx, Puma, and Let's Encrypt, optimizing performance and security.",
      "Integrated various third-party APIs, including Facebook Graph API, Google Analytics, Skylight, and Slack, enhancing functionality and providing valuable insights.",
      "Managed the project on GitHub, maintaining a clean and organized codebase for efficient collaboration and version control."
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
                  <h3 className="text-sm text-gray-500">
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
