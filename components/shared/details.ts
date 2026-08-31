export const positioningText = "Rails specialist for legacy rescue, third-party integrations, and shipping AI features to production."

export const availability = {
  status: "Available now for contract engagements",
  commitment: "40 hrs/week · ABN registered",
  location: "Melbourne, VIC · AEST/AEDT (UTC+10/+11)",
  overlap: "Full overlap AU/NZ · partial overlap US West"
}

export const coreStrengths = [
  {
    title: "Third-party integration",
    detail: "Automotive data providers, CRMs, finance and insurance services, Go1 LMS, Stripe, Facebook Graph, Google OAuth. Undocumented partner APIs, edge cases, retries, and failure handling."
  },
  {
    title: "Payments and money flows",
    detail: "Stripe Checkout plus signature-verified webhooks for deposits and invoice payments, reconciled back to invoice status and lead deposit state."
  },
  {
    title: "Multi-tenant SaaS architecture",
    detail: "Shared-schema, row-level tenancy: every record carries an organization_id and is reachable only through its organisation association, with membership-based role checks at the controller boundary."
  },
  {
    title: "Regulated-domain experience",
    detail: "Healthcare patient portal work across patient records, PII, and pre-admission forms, built to the privacy, consent, and access-control requirements of healthcare compliance."
  },
  {
    title: "Production LLM work",
    detail: "Shipped an OpenAI function-calling flow into a live product for Eline Electrics, turning a public visitor conversation into a structured lead and a draft quote with line items."
  }
]

export const summaryText = `
Full-Stack Developer with 7+ years in Ruby on Rails and 5+ years in ReactJS. I get hired for legacy Rails rescue, third-party integration work, and shipping AI features to production, across healthcare, HR, automotive, and logistics.
`

export const techstackText = `
Ruby, JavaScript, TypeScript, Rails, ReactJS, Sidekiq, Redis, PostgreSQL, Elasticsearch, RSpec, Minitest, Vitest, Docker, Kamal, GitHub Actions, AWS, Heroku.
`

export const openSourceText = "dwf - distributed workflow runner built on Sidekiq and Redis, published as a RubyGem with 24k+ downloads. github.com/dthtien/wf"

export const technicalSkills = [
  {
    category: "Languages",
    skills: [
      "Ruby",
      "JavaScript",
      "TypeScript",
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
    category: "AI",
    skills: [
      "OpenAI API",
      "Function calling",
      "LLM integration",
    ]
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
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
    category: "Payments and Integrations",
    skills: [
      "Stripe",
      "OAuth 2.0",
      "REST APIs",
      "Webhooks",
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

export const projects = [
  {
    name: "Tradies Platform",
    title: "A multi-tenant SaaS for trade and service businesses, covering the full lead to quote to deposit to job to invoice to payment lifecycle.",
    urls: {
      github: "https://github.com/dthtien/service_platform_api",
      website: "https://elineelectrics.com.au/"
    },
    specs: [
      "Built an AI chat-to-quote flow with OpenAI function calling that turns a public visitor conversation into a structured lead and a draft quote with line items and deposits.",
      "Designed shared-schema multi-tenancy where every record is scoped to an organisation and reached only through its association, with membership-based role checks.",
      "Integrated Stripe Checkout and signature-verified webhooks for deposits and invoice payments, plus Devise + JWT auth with Google OAuth.",
      "Shipped it live on a VPS with Kamal, behind a green-check gate of RSpec, RuboCop, Brakeman, and ESLint on every push."
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
      "Built a Rails + ReactJS app for deal aggregation and insurance comparison, with automated scraping and number plate lookup.",
      "Integrated the Facebook Graph and Slack APIs, and ran the whole thing through CI/CD."
    ]
  },
  {
    name: "DWF",
    cvHidden: true,
    title: "A distributed workflow runner using Sidekiq and Redis",
    urls: {
      github: "https://github.com/dthtien/wf",
      website: "https://rubygems.org/gems/dwf"
    },
    specs: [
      "Developed a distributed workflow runner using Sidekiq and Redis for background processing.",
      "Published as the RubyGem 'dwf' with 24k+ downloads, covered by RSpec and GitHub Actions CI."
    ]
  },
  {
    name: "TopLand",
    cvHidden: true,
    title: "A real estate statistics application for Ho Chi Minh City, Vietnam",
    urls: {
      github: "https://github.com/dthtien/real_estate_researcher"
    },
    specs: [
      "Built a ReactJS/Redux/Rails real estate statistics app with daily Sidekiq scraping, deployed to an Azure VPS with Capistrano and CircleCI."
    ]
  }
]

export const workExperiences = [
  {
    company: "Dealer Studio – Australia",
    position: "Intermediate Software Engineer",
    url: "https://www.dealerstudio.com.au/",
    duration: "Oct 2025 – Present",
    description: "End-to-end eCommerce platform for automotive dealerships, covering dealer websites, lead management, and vehicle aggregation.",
    archivements: [
      "Built and maintained third-party integrations with automotive data providers, CRMs, and finance and insurance services, handling undocumented partner APIs, per-partner edge cases, retries, and failure paths.",
      "Ran background processing on Sidekiq and Redis for vehicle feed ingestion, data synchronisation, and notification delivery.",
      "Delivered features end to end from API design to responsive React UIs, covered by RSpec and Vitest."
    ],
    techStack: [
      "Ruby on Rails",
      "ReactJS",
      "Sidekiq",
      "Redis",
      "PostgreSQL",
      "RSpec",
      "Vitest",
    ]
  },
  {
    company: "Global Health – Melbourne, VIC",
    position: "Senior Full-Stack Developer",
    url: "https://www.global-health.com/",
    duration: "May 2023 – Sept 2025",
    description: "HotHealth, a Digital Front Door and patient portal for healthcare organisations.",
    archivements: [
      "Inherited a Rails 4 healthcare application at under 20% test coverage. Built coverage past 80%, then upgraded through to Rails 7 and Ruby 3.3 in 3.5 months with no production incidents.",
      "Built patient-facing features across patient records, PII, and pre-admission forms, to the privacy, consent, and access-control requirements of healthcare compliance.",
      "Cut response time 60% (7s to under 3s) by eliminating N+1 queries, adding covering indexes, and introducing caching.",
      "Cut CI/CD pipeline time from 11 minutes to under 6, and raised uptime with New Relic and Rollbar monitoring and alerting.",
      "Led cross-functional delivery of pre-admission form submission across integrated platforms, and mentored two juniors through the Rails upgrade work."
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
    description: "High-traffic HR and payroll platform. Owned security groups, document management, and the LMS module.",
    archivements: [
      "Delivered the Learning Management System integration with Go1, negotiating their API contract, sync edge cases, and failure handling.",
      "Cut query time 50% (6s to under 3s) through indexing and caching strategies on the platform's hottest paths.",
      "Led a migration of legacy data to a new PostgreSQL schema, with integrity checks that kept the cutover clean."
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
    description: "Shipping and logistics systems: BACS for container and vessel management, SNIPE for logistics pricing. Awarded Best Growth of the Year.",
    archivements: [
      "Delivered BACS, a container and vessel management system, from concept through to deployment.",
      "Optimised search with Elasticsearch, cutting query times across the logistics catalogue.",
      "Consolidated duplicate pagination gems into one reusable gem, removing the maintenance overhead across projects."
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
