import Image from "next/image";
import { useState } from "react";

const certifications = [
  {
    name: "Mellori logo Principles & Design Patterns of React Programming",
    provider: "Mellori",
    time: "June 2022",
    logoSrc: "/icons/mellori.jpeg",
    logoAlt: "Mellori logo Principles & Design Patterns of React Programming",
    href: "https://www.credential.net/93ddb728-db4f-4a56-9e6a-750f0ecbe046",
  },
  {
    name: "Algorithmic Toolbox",
    provider: "Coursera",
    time: "June 2022",
    logoSrc: "/icons/coursera.jpeg",
    logoAlt: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/certificate/7DEJDTNTLZGQ",
  },
  {
    name: "Ruby (Intermediate) Certificate",
    provider: "HackerRank",
    time: "Sept 2020",
    logoSrc: "/icons/hackerank.jpeg",
    logoAlt: "Ruby (Intermediate) Certificate",
    href: "https://www.hackerrank.com/certificates/be0d46966113",
  },
  {
    name: "Fundamentals of AWS",
    provider: "Cloud Academy",
    time: "Nov 2020",
    logoSrc: "/icons/cloud_academy.jpeg",
    logoAlt: "Cloud Academy",
    href: "https://certificates.cloudacademy.com/70f6ad1038847ea34929ccb456845eb42d750cdb.pdf",
  },
  {
    name: "Architecting with Google Kubernetes Engine: Foundations",
    provider: "Coursera",
    time: "Apr 2020",
    logoSrc: "/icons/coursera.jpeg",
    logoAlt: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/certificate/JFR8LYJL74QA",
  },
  {
    name: "PTE - 50",
    provider: "Pearson",
    time: "Apr 2022",
    logoSrc: "/icons/pearson.svg",
    logoAlt: "Peason",
    href: "https://drive.google.com/file/d/1MAOS-HA0cQDgU_Qfu_rBr2Vp-yP7W62H/view?usp=sharing",
  },
  {
    name: "Toeic - 815",
    provider: "IIG",
    time: "Sep 2018",
    logoSrc: "/icons/iig.jpeg",
    logoAlt: "IIG",
    href: "https://drive.google.com/file/d/1K3hiqLrkPgIDUpC0Y5_wM4LZyXKmqz5z/view?usp=sharing",
  },
];

const Certifications = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-3">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto py-3 lg:max-w-none">
          <h2 className="text-2xl px-6 font-bold text-gray-900">
            Licenses & certifications
          </h2>
          <div className="mt-6">
            {certifications
              .slice(0, isShowAll ? certifications.length : 3)
              .map((certitfication) => (
                <a
                  key={certitfication.name}
                  href={certitfication.href}
                  target="_blank"
                  className="flex mb-4 sm:justify-start even:bg-white odd:bg-slate-50 px-6 py-3"
                >
                  <div className="relative items-center h-12 w-14 mt-3 mr-3 bg-gray-100 p-2 rounded-lg">
                    <Image
                      layout="fill"
                      src={certitfication.logoSrc}
                      alt={certitfication.logoAlt}
                      className="w-full h-full object-center object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {certitfication.name}
                    </h3>
                    <h3 className="text-sm text-gray-500">
                      {certitfication.provider}
                      <p className="text-gray-500">{certitfication.time}</p>
                    </h3>
                  </div>
                </a>
              ))}
          </div>

          <div className="align-middle flex justify-center items-center">
            {isShowAll ? (
              <button
                className="rounded-md border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white hover:bg-indigo-700 md:text-lg"
                onClick={() => setIsShowAll(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="rounded-md border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white hover:bg-indigo-700 md:text-lg"
                onClick={() => setIsShowAll(true)}
              >
                {`Show all ${certifications.length} certifications`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
