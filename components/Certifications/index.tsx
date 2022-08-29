const callouts = [
  {
    name: "Employment Hero",
    title: "Fullstack devloper - Ruby and ReactJS",
    time: "April 2020 - Present",
    imageSrc: "https://employmenthero.com/wp-content/uploads/2021/07/Full.svg",
    imageAlt: "All-In-One HR, Payroll & Benefits Platform",
    href: "https://employmenthero.com/",
  },
  {
    name: "Symphony Creative Solution",
    title: "Fullstack developer - Ruby and ReactJS",
    time: "Sept 2018 - Feb 2020",
    imageSrc:
      "data:image/jpeg;base64,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",
    imageAlt: "Accelerating Innovation in Shipping and Logistics Industries",
    href: "#",
  },
  {
    name: "Vinova",
    title: "Fullstack developer - Ruby on Rails",
    time: "Jun 2017 - Jan 2018",
    imageSrc:
      "https://vinova.sg/wp-content/uploads/2022/07/Vinova_Logo_Red_signature.png",
    imageAlt:
      "The trusted mobile application and software partner for enterprises, SMEs, and startups since 2010.",
    href: "https://vinova.sg/",
  },
];

export default () => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-3">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-3 lg:max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">Licenses & certifications</h2>
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="w-full h-full object-center"
                />
              </div>
              <h3 className="my-3 text-sm text-gray-500">
                <a href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
                <p className="text-gray-500 float-right">{callout.time}</p>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                {callout.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
