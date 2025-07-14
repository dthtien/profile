export const projects = [
  {
    name: "DealHub",
    title: "A web application displaying updated deals from Australian online stores, with a car insurance price comparison feature.",
    urls: {
      github: "https://github.com/dthtien/deal-hub-backend",
      website: "https://www.ozvfy.com/"
    },
    specs: [
      "Built with ReactJS and Rails for deal aggregation and car insurance comparison.",
      "Implemented daily data scraping using Sidekiq and custom web crawlers.",
      "Designed Material Design-inspired UI and deployed frontend to Vercel.",
      "Enabled car detail lookup via number plate input.",
      "Configured CI/CD with GitHub Actions, Docker, Nginx, Puma.",
      "Integrated APIs including Facebook Graph and Slack."
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
      "Developed a distributed workflow runner using Sidekiq and Redis for efficient background processing.",
      "Implemented comprehensive test suite with RSpec and CI/CD pipeline using GitHub Actions.",
      "Published as the RubyGem 'dwf' with clear documentation, gaining significant community adoption."
    ]
  },
  {
    name: "TopLand",
    title: "A real estate statistics application for Ho Chi Minh City, Vietnam",
    urls: {
      github: "https://github.com/dthtien/real_estate_researcher"
    },
    specs: [
      "Built a ReactJS/Redux/Rails real estate statistics app for Ho Chi Minh City.",
      "Deployed API to Azure VPS using Capistrano and frontend to Heroku.",
      "Implemented Material Design UI with daily data scraping via Sidekiq.",
      "Configured CI/CD with CircleCI, Nginx, Puma, and Let's Encrypt.",
      "Integrated Facebook Graph API, Google Analytics, Skylight, and Slack."
    ]
  }
]

export const summaryText = `
I'm a Full-Stack Developer with 6+ years of experience specializing in Ruby on Rails and 2+ years of React development.
My focus is building scalable, high-performance web applications and APIs, with expertise spanning backend development, front-end integration, CI/CD pipelines, and cloud deployment.
I’m passionate about creating clean, test-driven code and designing systems that solve real-world problems. My motivation lies in building products that make a meaningful impact on users and businesses.
`

export const techstackText = `
My technical stack includes Ruby, JavaScript, Rails, React, Sidekiq, PostgreSQL, Docker, and cloud platforms like AWS and Heroku.
`

export const technicalSkills = [
  {
    category: "Languages",
    skills: [
      "Ruby",
      "JavaScript",
    ]
  },
  {
    category: "Frameworks/Libraries",
    skills: [
      "Ruby on Rails",
      "ReactJS",
      "Sidekiq"
    ]
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
    ]
  },
  {
    category: "DevOps and Tools",
    skills: [
      "Docker",
      "Puma",
      "Capistrano",
      "Kamal",
      "GitHub Actions",
      "Terraform",
      "Linux",
    ]
  },
  {
    category: "Cloud Platforms",
    skills: [
      "AWS",
      "Heroku",
    ]
  },
  {
    category: "Testing",
    skills: [
      "RSpec",
      "Minitest",
      "Jest",
    ]
  }
]

export const workExperiences = [
  {
    company: "Global Health – Melbourne, VIC",
    position: "Senior Full-Stack Developer",
    url: "https://www.global-health.com/",
    duration: "May 2023 – Present",
    description: "Working as Full-Stack Developer on the HotHealth application — a Digital Front Door and Patient Portal for healthcare organisations. Led the development of high-impact features by translating complex requirements into scalable solutions, optimised for high traffic and performance. Worked closely with cross-functional teams to build robust modules, integrate third-party systems, and manage complex business logic to support diverse healthcare workflows.",
    archivements: [
      "Optimised application performance, significantly reducing average response time fom 7s to under 3s through code refactoring and database query optimisation.",
      "Led the successful upgrade of Ruby on Rails from version 4 to 7 and Ruby from 2.6 to 3.3.1, ensuring full compatibility and performance improvements within 3.5 months.",
      "Increased test coverage of the HotHealth application from under 20% to over 80%, significantly improving code reliability and maintainability.",
      "Improved uptime and reliability by enhancing server configurations and implementing comprehensive monitoring and alerting with New Relic and Rollbar.",
      "Streamlined CI/CD pipelines, reducing deployment time from 11 minutes to under 6 minutes.",
      "Led cross-functional collaboration to implement the pre-admission form submission feature across integrated platforms.",
      "Mentored junior developers, improving onboarding efficiency and fostering a culture of collaboration and knowledge sharing."
    ],
    techStack: [
      "Ruby on Rails",
      "PostgreSQL",
      "Minitest",
      "Docker",
      "Bitbucket Pipelines",
      "AWS (S3, EC2, RDS)",
    ]
  },
  {
    company: "Employment Hero – Ho Chi Minh City, Vietnam",
    position: "Intermediate Full-Stack Developer",
    url: "https://employmenthero.com/",
    duration: "April 2020 – May 2023",
    description: "Worked as a Full-Stack Developer on the Employment Hero platform, a comprehensive HR and payroll management system. Built and maintained various modules such as security groups, document management, and learning management systems to support high traffic and usage.",
    archivements: [
      "Delivered the Learning Management System (LMS) integration with Go1, enhancing training capabilities across the platform.",
      "Improved system performance by optimising database queries reduce haft of querying time from 6 seconds to under 3 seconds and introducing effective caching and indexing strategies.",
      "Led a complex migration of legacy data to a new PostgreSQL schema, ensuring data integrity and consistency throughout the process.",
      "Contributed to the development of a mobile application, significantly improving the user experience and delivering a large-scale project on schedule.",
      "Mentored junior developers, promoting a culture of knowledge sharing and continuous improvement within the team."
    ],
    techStack: [
      "Ruby on Rails",
      "ReactJS",
      "PostgreSQL",
      "Redis",
      "Sidekiq",
      "RSpec",
      "Docker",
    ]
  },
  {
    company: "CyberLogitec – Ho Chi Minh City, Vietnam",
    position: "Full-Stack Developer",
    url: "https://www.cyberlogitec.com",
    duration: "Sept 2018 – Feb 2020",
    description: "Worked as a Full-Stack Developer on the BACS system, a tool for managing containers and vessels, and SNIPE, a pricing support tool designed to handle user requests related to logistics calculations and checks.",
    archivements: [
      "Awarded Best Growth of the Year for outstanding performance and contributions to the team.",
      "Delivered the BACS system — a comprehensive container and vessel management tool — improving operational efficiency.",
      "Independently developed a full-featured website from concept to deployment, demonstrating strong full-stack development capabilities.",
      "Optimised search functionality using Elasticsearch, resulting in significantly faster queries and enhanced user experience.",
      "Built test suites from the ground up to improve code coverage and QA processes, ensuring consistent, high-quality software delivery.",
      "Consolidated multiple duplicated pagination gems into a single, reusable gem, streamlining pagination across projects and significantly reducing code complexity and maintenance overhead."
    ],
    techStack: [
      "Ruby on Rails",
      "ReactJS",
      "PostgreSQL",
      "Elasticsearch",
      "RSpec"
    ]
  }
]
