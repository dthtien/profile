import type { NextPage } from "next";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Certifications from "../components/Certifications";
import Contacts from "../components/Contacts";
import Education from "../components/Educations";
import { useState } from "react";
import Toast from "../components/Toast";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { summaryText } from "../components/shared/details";

const Home: NextPage = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-18 lg:px-8 xl:mt-28">
      {
        showToast && <Toast message="Email sent successfully. Thank you!" setShowToast={setShowToast} />
      }
      <div className="sm:text-center lg:text-left mb-5">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Dau The Tien</span>
          {" - "}
          <span className="block text-indigo-600 xl:inline">
            Software Engineer
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          { summaryText }
        </p>
      </div>
      <Contacts setShowToast={setShowToast} />
      <Skills />
      <WorkExperience />
      <Projects />
      <Education />
      <Certifications />
      <Footer />
    </main>
  );
};

export default Home;
