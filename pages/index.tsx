import type { NextPage } from "next";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Certifications from "../components/Certifications";
import Contacts from "../components/Contacts";

const Home: NextPage = () => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-18 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left mb-5">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Dau The Tien</span>
          {" - "}
          <span className="block text-indigo-600 xl:inline">
            Software Engineer
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I'm a full-stack developer passionate about building software that
          improves people's lives.
        </p>
        <p className="text-base text-gray-500 sm:mt-2 sm:text-lg sm:mx-auto md:mt-2 md:text-xl lg:mx-0">
          I'm looking for a chance to gain work experience as a Software
          Engineer, opportunities to develop my skills, take on exciting
          projects, and work with people I can learn. Willing to work hard and
          excited to continue learning new skills to become a successful
          developer.
        </p>
      </div>
      <Skills />
      <WorkExperience />
      <Certifications />
      <Contacts />
    </main>
  );
};

export default Home;
