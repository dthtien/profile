import Image from "next/image";

const educations = [
  {
    name: "University of Information Technology",
    degree: "Bachelor of Engineering in Information systems",
    time: "2014 - 2019",
    logoSrc: "/icons/uit.png",
    logoAlt: "UIT",
    href: "https://www.uit.edu.vn/",
    grade: "Good - 7.59",
  },
  {
    name: "CoderSchool",
    degree: "June Ruby course",
    time: "June 2017 - Aug 2017",
    logoSrc: "/icons/coderschool.svg",
    logoAlt: "coderschool",
    href: "https://www.coderschool.vn/en/",
  },
];

const Education = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-3">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto py-3 lg:max-w-none">
          <h2 className="text-2xl px-6 font-bold text-gray-900">Education</h2>
          <div className="mt-6">
            {educations.map((edu) => (
              <a
                key={edu.name}
                href={edu.href}
                target="_blank"
                rel="noreferrer"
                className="flex mb-4 sm:justify-start even:bg-white odd:bg-slate-50 px-6 py-3"
              >
                <div className="relative items-center h-12 w-14 mt-3 mr-3 bg-gray-100 p-2 rounded-lg">
                  <Image
                    src={edu.logoSrc}
                    alt={edu.logoAlt}
                    className="w-full h-full object-center object-contain"
                    fill
                    sizes="100vw" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {edu.name}
                  </h3>
                  <h3 className="text-sm text-gray-500">
                    {edu.degree}
                    <p className="text-gray-500">{edu.time}</p>
                  </h3>
                  {edu.grade && (
                    <h3 className="text-sm text-gray-500">
                      Grade: {edu.grade}
                    </h3>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
