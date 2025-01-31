import React from "react";
import Toggle from "../components/Toggle";

const CV = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="print:hidden text-right">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md print:hidden"
          onClick={handlePrint}
        >
          Print CV
        </button>
      </div>
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">THE TIEN DAU</h1>
        <p className="text-gray-600">Software Engineer</p>
        <p className="text-gray-500">Sunshine West, VIC 3020</p>
        <p className="text-gray-500">+61 499 380 358</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:tiendt2311@gmail.com" className="text-blue-500">Email</a>
          <a href="https://github.com/dthtien" className="text-blue-500">GitHub</a>
          <a href="https://linkedin.com/in/dthtien" className="text-blue-500">LinkedIn</a>
        </div>
      </div>

      {/* Summary */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Summary</h2>
        <p className="text-gray-700 mt-2">
          Full-stack developer passionate about building software that improves people's lives.
          Seeking opportunities to develop skills, take on exciting projects, and work with a team.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Languages:</strong> Ruby (5+ years), JavaScript (3+ years)</li>
          <li><strong>Frameworks:</strong> Ruby on Rails, ReactJS, Redux</li>
          <li><strong>Cloud:</strong> AWS, Heroku</li>
          <li><strong>Databases:</strong> PostgreSQL</li>
          <li><strong>Tools:</strong> Vim, Git, Docker, Terraform</li>
          <li><strong>Paradigms:</strong> OOP, MVC, TDD</li>
        </ul>
      </section>

      {/* Work Experience */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Work Experience</h2>
        <div className="mt-3 border-b pb-2">
          <a className="font-bold mb-1" href="https://www.global-health.com/" target="_blank">
            Global Health - Melbourne
          </a>
          <p className="text-gray-600 mt-1">Full-stack Developer (May 2023 - Present)</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Implemented CI/CD and Testing procedures by creating an optimized GIT flow, setting up Bitbucket pipelines, and developing a unit test suite with over 80% code coverage</li>
            <li>Implemented the Hot Health application - the all-in-one patient engagement platform using <strong>Rails</strong>, <strong>Vue</strong>, <strong>Postgresql</strong> and <strong>Rspec</strong></li>
            <li>Work with other teams to implement queries for research purposes</li>
            <li>Mentored new team members to enhance team knowledge and efficiency</li>
            <li>Conducted code maintenance and refactoring to optimize system performance</li>
            <li>Supported integration team with new techniques to meet project deadlines.</li>
            <li>Led the Rails Upgrade project, ensuring a seamless upgrade of Ruby on Rails versions</li>
            <li>Collaborated with third-party providers to effectively manage integration and data synchronization</li>
            <li>Developed, estimated, and delivered software modules on schedule in alignment with strategic objectives</li>
            <li>Provided essential customer support, including building reports, identifying the issue during the integration process</li>
          </ul>
        </div>
        <div className="mt-3 border-b pb-2">
          <a href="https://employmenthero.com/" target="_blank" className="font-bold mb-1">
            Employment Hero - Ho Chi Minh
          </a>
          <p className="text-gray-600 mt-1">Full-stack Developer (April 2020 - May 2023)</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Implemented security group setting features within management modules using Rails, Postgresql, Rspec, ReactJS, and Typescript</li>
            <li>Managed official employment documents within a document management system utilizing Rails, Postgresql, Rspec, ReactJS, Typescript, and React Native</li>
            <li>Integrated a learning management system with third-party Go1, utilizing stacks including Sinatra, Postgresql, Rspec, and ReactJS</li>
            <li>Collaborated directly with third-party providers to ensure seamless integration and data synchronization</li>
            <li>Constructed monitoring pages to identify and resolve unexpected issues with integration processes</li>
            <li>Developed a complex service for creating and updating management features</li>
            <li>Provided mentorship to new team members and assisted the mobile team with implementing new design concepts across various modules</li>
            <li>Designed and implemented a migration flow for transferring legacy data to new data structures without errors</li>
          </ul>
        </div>

        <div className="mt-3 border-b pb-2">
          <a className="font-bold mb-1" href="http://www.scs71.com" target="_blank">
            Cyber Logistics (Pty) Ltd - Ho Chi Minh
          </a>
          <p className="text-gray-600 mt-1">Full-stack Developer (Sept 2018 - Feb 2020)</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Awarded the best growth of the year prize since 2018</li>
            <li>Optimized full-text search with Elasticsearch</li>
            <li>Built and maintained test suites from scratch</li>
            <li>Applied ReactJS and Redux to the Frontend repository</li>
            <li>Implemented SNIPE, a pricing support system using Rails and Postgresql</li>
            <li>Implemented ONE-chatbot to support the BACS project with NodeJS, Dialogflow, and Google Cloud Function</li>
            <li>Worked independently and efficiently in a team to develop a website from scratch to completion using Rails and React</li>
            <li>Developed BACS, a containers and vessels checking system using Rails, ReactJS, Elasticsearch, and Postgresql</li>
          </ul>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Personal Projects</h2>
        <div className="mt-3">
          <Toggle
            buttonComponent={
              <>
                <h3 className="font-bold text-left">Deal Hub</h3>
                <p className="text-gray-600">The website displays bargain details from AU online stores, updated every hour.</p>
              </>
            }
          >
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Developed an application, focused on AU online stores' deals, utilizing ReactJS, and Rails as the technology stack.</li>
              <li>Implemented CI/CD to run test and distribute the app to Vultr clould</li>
              <li>Designed a user-friendly web-based UI inspired by Google Material Design, enhancing the overall user experience.</li>
              <li>Deployed the front-end to Vercel, ensuring high availability and scalability of the application.</li>
              <li>Utilized background processing with Sidekiq to scrape data daily, ensuring up-to-date and accurate information for users.</li>
              <li>Implemented continuous integration with CircleCI, ensuring the stability and reliability of the application through automated testing and deployment.</li>
              <li>Configured the backend with Nginx, Puma, and Let's Encrypt, optimizing performance and security.</li>
              <li>Integrated various third-party APIs, including Facebook Graph API, and Slack, enhancing functionality and providing valuable insights.</li>
              <li>Managed the project on GitHub, maintaining a clean and organized codebase for efficient collaboration and version control.</li>
              <li>Project Link:
                <ul>
                  <li><a href="https://github.com/dthtien/deal-hub-backend" target="_blank">GitHub Repository: DealHub</a></li>
                  <li><a href="https://www.beneficiumvilis.com/" target="_blank">Website</a></li>
                </ul>
              </li>
            </ul>
          </Toggle>
        </div>
        <div className="mt-3">
          <Toggle
            buttonComponent={
              <>
                <h3 className="font-bold text-left">Dwf</h3>
                <p className="text-gray-600">A distributed workflow runner using Sidekiq and Redis</p>
              </>
            }
          >
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Developed <strong>Dwf</strong>, a distributed workflow runner utilizing Sidekiq and Redis, enabling efficient background processing and storage of workflow state.</li>
              <li>Implemented a comprehensive test suite using RSpec and SimpleCov to ensure thorough coverage of all possible scenarios, enhancing the reliability and stability of the application.</li>
              <li>Integrated Continuous Integration with GitHub Actions, automating the build and testing process for seamless development and deployment.</li>
              <li>Garnered significant recognition and popularity within the developer community, with numerous stars on GitHub and a high number of installations on RubyGem.</li>
              <li>Published the RubyGem <code>wf</code>, providing developers with a powerful and user-friendly tool for managing and executing workflows.</li>
              <li>Maintained clear and concise documentation, enabling easy adoption and understanding of the Dwf framework.</li>
              <li>Ensured consistency in coding style and best practices, adhering to industry standards and guidelines.</li>
              <li>Diligently proofread all code and documentation, eliminating errors and ensuring the highest quality and reliability of the application.</li>
              <li>Project Links:
                <ul>
                  <li><a href="https://rubygems.org/gems/dwf" target="_blank">RubyGem: dwf</a></li>
                  <li><a href="https://github.com/dthtien/wf" target="_blank">GitHub Repository: wf</a></li>
                </ul>
              </li>
            </ul>
          </Toggle>
        </div>
        <div className="mt-3">
          <Toggle
            buttonComponent={
              <>
                <h3 className="font-bold text-left">TopLands</h3>
                <p className="text-gray-600">A real estate statistics application for Ho Chi Minh</p>
              </>
            }
          >
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Developed a statistics application, <strong>TopLands</strong>, focused on Ho Chi Minh real estate prices, utilizing ReactJS, Redux, and Rails as the technology stack.</li>
              <li>Implemented Capistrano to deploy the API to Azure VPS, ensuring smooth and efficient deployment processes.</li>
              <li>Designed a user-friendly web-based UI inspired by Google Material Design, enhancing the overall user experience.</li>
              <li>Deployed the front-end to Heroku, ensuring high availability and scalability of the application.</li>
              <li>Utilized background processing with Sidekiq to scrape data daily, ensuring up-to-date and accurate information for users.</li>
              <li>Implemented continuous integration with CircleCI, ensuring the stability and reliability of the application through automated testing and deployment.</li>
              <li>Configured the backend with Nginx, Puma, and Let's Encrypt, optimizing performance and security.</li>
              <li>Integrated various third-party APIs, including Facebook Graph API, Google Analytics, Skylight, and Slack, enhancing functionality and providing valuable insights.</li>
              <li>Managed the project on GitHub, maintaining a clean and organized codebase for efficient collaboration and version control.</li>
              <li>Project Link:
                <ul>
                  <li><a href="https://github.com/dthtien/real_estate_researcher" target="_blank">GitHub Repository: TopLands</a></li>
                </ul>
              </li>
            </ul>
          </Toggle>
        </div>
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
        <p className="text-gray-700 mt-2">
          <strong>Viet Nam National University HCMC - University Of Information Technology</strong>
          <br /> Bachelor of Engineering (Software) (2014 - 2019)
        </p>
      </section>
    </div>
  );
};

export default CV;

