export const projects = [
  {
    name: "Tradies Platform",
    title: "A multi-tenant SaaS for trade and service businesses, covering the full lead → quote → deposit → job → invoice → payment lifecycle.",
    urls: {
      github: "https://github.com/dthtien/service_platform_api",
      website: "https://elineelectrics.com.au/"
    },
    specs: [
      "Built a Rails 8 API and React 19 (Vite + TypeScript + Tailwind) frontend, with every record scoped per organisation for multi-tenant isolation.",
      "Developed an AI chat-to-quote flow with OpenAI function calling, turning a public visitor conversation into a structured lead and draft quote with line items and deposits.",
      "Added AI-assisted blog authoring with image upload and embedding, plus sitemap and robots.txt generation for SEO.",
      "Integrated Stripe Checkout and webhooks for deposits and invoice payments, and Google Reviews for reputation display.",
      "Implemented Devise + JWT authentication with Google OAuth, Sidekiq + Redis background jobs, and Alba serializers.",
      "Deployed to a VPS with Kamal, and enforced a green-check gate of RSpec, RuboCop, Brakeman, ESLint, and production build before every push."
    ]
  },
  {
    name: "DealHub",
    title: "A web application displaying updated deals from Australian online stores, with a car insurance price comparison feature.",
    urls: {
      github: "https://github.com/dthtien/deal-hub-backend",
      website: "https://www.ozvfy.com/"
    },
    specs: [
      "Built a Rails + ReactJS app for deal aggregation and insurance comparison, featuring automated scraping, CI/CD, and number plate lookup.",
      "Designed Material Design-inspired UI and deployed frontend to Vercel.",
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
Full-Stack Developer with 7+ years of experience in Ruby on Rails and 2+ years in ReactJS. Skilled in building scalable web applications and APIs, improving performance, and delivering clean, test-driven code. Experienced across backend, frontend, CI/CD, and cloud deployment (AWS, Heroku).
`

export const techstackText = `
My technical stack includes Ruby, JavaScript, Rails, ReactJS, Sidekiq, Rspec, PostgreSQL, Docker, and cloud platforms like AWS and Heroku.
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
      "Vitest",
    ]
  }
]

export const workExperiences = [
  {
    company: "Dealer Studio – Australia",
    position: "Intermediate Software Engineer",
    url: "https://www.dealerstudio.com.au/",
    duration: "Oct 2025 – Present",
    description: "Contributing to Dealer Studio — an end-to-end eCommerce platform for automotive dealerships covering dealer websites, lead management, and vehicle aggregation — by building scalable backend services and rich frontend experiences.",
    archivements: [
      "Developed and maintained core platform features with Ruby on Rails and ReactJS, supporting dealer websites, lead capture, and vehicle inventory management.",
      "Built AI-powered features, integrating LLM services into customer engagement and lead qualification workflows to improve conversion rates.",
      "Designed and maintained third-party integrations with automotive data providers, CRMs, and finance/insurance services, ensuring reliable data exchange across the dealer ecosystem.",
      "Implemented background processing pipelines with Sidekiq and Redis for vehicle feed ingestion, data synchronisation, and notification delivery.",
      "Collaborated with product and design teams to ship customer-facing features end to end, from API design through to responsive React UIs."
    ],
    techStack: [
      "Ruby on Rails",
      "ReactJS",
      "Sidekiq",
      "Redis",
      "PostgreSQL",
      "RSpec",
      "Vitest",
      "AI/LLM integration",
    ]
  },
  {
    company: "Global Health – Melbourne, VIC",
    position: "Senior Full-Stack Developer",
    url: "https://www.global-health.com/",
    duration: "May 2023 – Sept 2025",
    description: "Contributed to the HotHealth platform - a Digital Front Door and Patient Portal for healthcare organisations - by designing scalable, high-performance solutions.",
    archivements: [
      "Optimised application performance, reduced response time by 60% (7s → under 3s) through code refactoring and database query optimisation.",
      "Led the successful upgrade of Ruby on Rails from version 4 to 7 and Ruby from 2.6 to 3.3.1, ensuring full compatibility and performance improvements within 3.5 months.",
      "Increased test coverage of the HotHealth application from under 20% to over 80%, significantly improving code reliability and maintainability.",
      "Improved uptime and reliability by enhancing server configurations and implementing comprehensive monitoring and alerting with New Relic and Rollbar.",
      "Streamlined CI/CD pipelines, reducing deployment time from 11 minutes to under 6 minutes.",
      "Led cross-functional collaboration to implement the pre-admission form submission feature across integrated platforms.",
      "Mentored junior developers, improved onboarding efficiency and fostered a culture of collaboration and knowledge sharing."
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
    description: "Contributed to the Employment Hero platform — a high-traffic HR and payroll management system — by developing and maintaining key modules including security groups, document management, and LMS.",
    archivements: [
      "Delivered the Learning Management System (LMS) integration with Go1, enhancing training capabilities across the platform.",
      "Improved system performance by optimising database queries, reduced query time by 50% (6s → under 3s) and introducing effective caching and indexing strategies.",
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
    description: "Worked on BACS (a container and vessel management system) and SNIPE (a logistics pricing support tool) to streamline operations in the shipping and logistics sector.",
    archivements: [
      "Awarded Best Growth of the Year for outstanding performance and contributions to the team.",
      "Delivered the BACS system — a comprehensive container and vessel management tool — improving operational efficiency.",
      "Independently developed a full-featured website from concept to deployment, demonstrating strong full-stack development capabilities.",
      "Optimised search functionality using Elasticsearch, resulting in significantly faster queries and enhanced user experience.",
      "Built test suites from the ground up to improve code coverage and QA processes, ensuring consistent, high-quality software delivery.",
      "Consolidated duplicate pagination gems into a single, reusable gem, streamlining pagination across projects and significantly reducing code complexity and maintenance overhead."
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
