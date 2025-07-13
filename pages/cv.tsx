import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { projects, technicalSkills, workExperiences } from "../components/shared/details";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};
const Section = ({ title, children }: SectionProps) => (
  <section className="mt-5 print:mt-3">
    <h2 className="text-xl print:text-lg font-semibold border-b pb-1 print:pb-0">{title}</h2>
    {children}
  </section>
);

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
            <h1 className="text-3xl font-bold">TIEN DAU</h1>
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

      {/* Technical Skills */}
      <Section title="Technical Skills">
        <ul className="list-disc list-inside text-gray-700 mt-2 print:text-xs">
          {
            technicalSkills.map((skill) => (
              <li key={skill.category}>
                <strong>{skill.category}:</strong> {skill.skills.join(", ")}
              </li>
            ))
          }
        </ul>
      </Section>
      {/* Work Experience */}
      <Section title="Work Experience">
        {
          workExperiences.map((experience) => (
            <div className="mt-3 border-b pb-2 print:break-inside-avoid" key={experience.company}>
              <p className="text-gray-600 mt-1 font-bold print:text-sm">{experience.position} ({experience.duration})</p>
              <a className="mb-1 print:text-sm" href={experience.url} target="_blank">
                {experience.company}
              </a>

              <p className="text-gray-600 mt-1 print:text-xs">{experience.description}</p>
              <p className="text-gray-600 mt-1 print:text-xs">
                <strong>Archivements:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 print:text-xs">
                {
                  experience.archivements.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))
                }
              </ul>
              <p className="text-gray-600 mt-1 print:text-xs">
                Tech Stack: { " " }
                {
                  experience?.techStack?.map((tech, index) => (
                    <strong key={index} className="text-gray-600 text-sm print:text-xs">
                      {tech}{index < experience.techStack.length - 1 ? ', ' : ''}
                    </strong>
                  ))
                }
              </p>
            </div>
          ))
        }
      </Section>

      {/* Personal Projects */}
      <Section title="Personal Projects">
        {
          projects.map((project) => (
            <div className="mt-3" key={project.name}>
              <div className="grid">
                <h3 className="font-bold text-left print:text-sm">{project.name}</h3>
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
                    <span className="mx-2 text-gray-600">|</span>
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
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="text-gray-700 mt-2">
          <p className="font-bold print:text-sm">Bachelor of Engineering (Software) (2014 - 2019)</p>
          <p className="text-sm print:text-xs">Viet Nam National University HCMC - University Of Information Technology</p>
        </div>
        <p className="mt-2 print:text-sm">Major: <strong>Information System</strong> </p>
      </Section>
    </div>
  );
};

export default CV;

