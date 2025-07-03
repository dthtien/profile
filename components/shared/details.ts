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
      "Implemented daily data scraping using Sidekiq and custom web crawlers",
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
      "Published as RubyGem 'wf' with clear documentation, gaining significant community adoption."
    ]
  },
  {
    name: "TopLand",
    title: "A real estate statistics application for Ho Chi Minh City, Vietnam",
    urls: {
      github: "https://github.com/dthtien/real_estate_researcher"
    },
    specs:
    [
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
Proven track record of building scalable, high-performance web applications and APIs, with expertise spanning backend development, front-end integration, CI/CD pipelines, and cloud deployment.
Passionate about clean, test-driven code, system architecture, and solving real-world challenges.
`

export const technicalSkills = [
  {
    category: "Languages",
    skills: [
      "Ruby (6+ years)",
      "JavaScript (2+ years)",
    ]
  },
  {
    category: "Frameworks",
    skills: [
      "Ruby on Rails (6+ years)",
      "ReactJS (2+ years)",
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
    category: "DevOps & Deployment",
    skills: [
      "Docker",
      "Nginx",
      "Puma",
      "Capistrano",
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
  },
  {
    category: "Other Tools",
    skills: [
      "Git",
      "Vim"
    ]
  }
]

export const workExperiences = [
  {
    company: "Global Health – Melbourne, VIC",
    position: "Full-Stack Developer",
    url: "https://www.global-health.com/",
    duration: "May 2023 – Present",
    activities: [
      "Implemented CI/CD and testing procedures by creating an optimised Git workflow, setting up Bitbucket pipelines, and developing a unit test suite achieving over 80% coverage.",
      "Delivered the Hot Health application – an all-in-one patient engagement platform using Rails, Vue, PostgreSQL, and RSpec.",
      "Managed the Rails upgrade process from version 4 to 7, delivering a seamless transition with no major regressions.",
      "Collaborated with cross-functional teams to implement complex queries for research and reporting.",
      "Mentored new team members, improving team knowledge and onboarding efficiency.",
      "Conducted code maintenance and refactoring to optimise performance and scalability.",
      "Liaised with third-party providers to manage integrations and synchronisation.",
      "Delivered well-estimated software modules on time, aligned with business objectives.",
      "rovided client support including report generation and integration issue resolution."
    ]
  },
  {
    company: "Employment Hero – Ho Chi Minh City, Vietnam",
    position: "Full-Stack Developer",
    url: "https://employmenthero.com/",
    duration: "April 2020 – May 2023",
    activities: [
      "Developed and maintained security group settings within management modules using Rails, PostgreSQL, RSpec, ReactJS, and TypeScript.",
      "Built document management systems to handle official employment records.",
      "Integrated a third-party Learning Management System (Go1) using Sinatra, ReactJS, and PostgreSQL.",
      "Designed monitoring tools to proactively detect and resolve integration issues.",
      "Created services for complex management feature flows and legacy data migration.",
      "Provided technical mentorship to junior developers and supported mobile design integration.",
      "Contributed to the design and implementation of a seamless legacy data migration flow."
    ]
  },
  {
    company: "CyberLogitec – Ho Chi Minh City, Vietnam",
    position: "Full-Stack Developer",
    url: "https://www.cyberlogitec.com",
    duration: "Sept 2018 – Feb 2020",
    activities: [
      "Received 'Best Growth of the Year' award in 2018.",
      "Implemented full-text search optimisations using Elasticsearch.",
      "Built test suites from scratch to improve code coverage and QA processes.",
      "Applied ReactJS and Redux to enhance the frontend user experience.",
      "Developed SNIPE – a pricing support tool built with Rails and PostgreSQL.",
      "Built ONE-chatbot using Node.js, Dialogflow, and Google Cloud Functions for customer support.",
      "Delivered the BACS system – a containers and vessels management tool using Rails, React, Elasticsearch, and PostgreSQL.",
      "Independently developed a website from concept to completion using Rails and React."
    ]
  }
]
