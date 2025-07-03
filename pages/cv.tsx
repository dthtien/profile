import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { projects, summaryText, technicalSkills, workExperiences } from "../components/shared/details";

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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-base print:shadow-none">
      <div className="print:hidden text-right mb-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md print:hidden"
          onClick={handlePrint}
        >
          Print CV
        </button>
      </div>
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-3xl font-bold">THE TIEN DAU</h1>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-500">Melbourne, VIC</p>
          </div>
          <div>
            <ul className="text-left print:text-sm">
              <li className="flex gap-1">
                <PhoneIcon width="20" height="20"/>
                <a href="tel:+61499380358">+61499 380 358</a>
              </li>
              <li className="flex gap-1">
                <AtSymbolIcon width="20" height="20"/>
                <a href="mailto:tiendt2311@gmail.com">tiendt2311@gmail.com</a>
              </li>
              <li className="flex gap-1">
                <Image
                  src="/icons/github.svg"
                  width={20}
                  height={20}
                  alt="github"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <a href="https://github.com/dthtien" className="text-blue-500">
                  https://github.com/dthtien
                </a>
              </li>
              <li className="flex gap-1">
                <Image
                  src="/icons/linkedin.svg"
                  width={20}
                  height={20}
                  alt="github"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <a href="https://linkedin.com/in/dthtien" className="text-blue-500">
                  https://linkedin.com/in/dthtien
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="mt-5">
        <h2 className="text-xl font-semibold border-b pb-1">Summary</h2>
        <p className="text-gray-700 mt-2 print:text-xs">
          { summaryText }
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mt-5">
        <h2 className="text-xl font-semibold border-b pb-1">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 print:text-xs">
          {
            technicalSkills.map((skill) => (
              <li key={skill.category}>
                <strong>{skill.category}:</strong> {skill.skills.join(", ")}
              </li>
            ))
          }
        </ul>
      </section>

      {/* Work Experience */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Work Experience</h2>
        {
          workExperiences.map((experience) => (
            <div className="mt-3 border-b pb-2" key={experience.company}>
              <a className="font-bold mb-1" href={experience.url} target="_blank">
                {experience.company}
              </a>

              <p className="text-gray-600 mt-1">{experience.position} ({experience.duration})</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 print:text-xs">
                {
                  experience.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </section>

      {/* Personal Projects */}
      <section className="mt-5">
        <h2 className="text-xl font-semibold border-b pb-1">Personal Projects</h2>
        {
          projects.map((project) => (
            <div className="mt-3" key={project.name}>
              <div className="grid">
                <h3 className="font-bold text-left">{project.name}</h3>
                <p className="text-gray-600 text-left print:text-xs">{project.title}</p>
              </div>
              <div className="mt-2">
                {
                  project.urls.github && (
                    <a
                      href={project.urls.github}
                      target="_blank"
                      rel="noreferrer"
                      className="print:text-xs text-gray-900"
                    >
                      GitHub:
                      <strong className="ml-1 text-xs">
                        {project.urls.github}
                      </strong>
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
                      className="print:text-xs text-gray-900"
                    >
                      Website:
                      <strong className="ml-1 text-xs">
                        {project.urls.website}
                      </strong>
                    </a>
                  </>
                )}
              </div>

              <ul className="list-disc list-inside text-gray-700 mt-2 print:text-xs">
                {project.specs.map((spec) => (
                  <li key={spec}>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      </section>

      {/* Education */}
      <section className="mt-5">
        <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
        <div className="text-gray-700 mt-2">
          <p className="font-bold print:text-sm">Bachelor of Engineering (Software) (2014 - 2019)</p>
          <p className="text-sm print:text-xs">Viet Nam National University HCMC - University Of Information Technology</p>
        </div>
        <p className="mt-2 print:text-sm">Major: <strong>Information System</strong> </p>
      </section>

      { /* References*/ }
      <section className="mt-5">
        <h2 className="text-xl font-semibold border-b pb-1">References</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 print:text-xs">
          <li>
            <strong>Loc Nguyen</strong> - Global Health, Senior Software Engineer
            <br />
            <a href="mailto:loc.nguyen@global-health.com">loc.nguyen@global-health.com</a>
          </li>

          <li>
            <strong>Phat Le</strong> - Employment Hero, Engineering Manager
            <br />
            <a href="mailto: phat.tan@employmenthero.com">phat.tan@employmenthero.com</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CV;

