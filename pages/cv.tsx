import React from "react";
import Toggle from "../components/Toggle";
import { projects } from "../components/Projects";
import { useSearchParams } from "next/navigation";

const CV = () => {
  const searchParams = useSearchParams();
  const print = searchParams.get("print");

  React.useEffect(() => {
    if (print) handlePrint();
  }, [print]);

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
          I'm a full-stack developer passionate about building software that improves people's lives.
          I'm looking for a chance to gain work experience as a Software Engineer, opportunities to develop my skills, take on exciting projects, and work with people I can learn.
          Willing to work hard and excited to continue learning new skills to become a successful developer.
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
        {
          projects.map((project) => (
            <div className="mt-3" key={project.name}>
              <Toggle
                buttonComponent={
                  <>
                    <h3 className="font-bold text-left">{project.name}</h3>
                    <p className="text-gray-600">{project.title}</p>
                  </>
                }
              >
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

                <ul className="list-disc list-inside text-gray-700 mt-2">
                  {project.specs.map((spec) => (
                    <li key={spec} className="text-sm">
                      {spec}
                    </li>
                  ))}
                </ul>
              </Toggle>
            </div>
          ))
        }
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
        <p className="text-gray-700 mt-2">
          <strong>Viet Nam National University HCMC - University Of Information Technology</strong>
          <br /> Bachelor of Engineering (Software) (2014 - 2019)
        </p>
        <p className="mt-2">Major: <strong>Information System</strong> </p>
      </section>
    </div>
  );
};

export default CV;

