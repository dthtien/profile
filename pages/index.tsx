import type { NextPage } from 'next'
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience'
import Certifications from '../components/Certifications'

const Home: NextPage = () => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-18 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Dau The Tien</span>{' - '}
          <span className="block text-indigo-600 xl:inline">Software Engineer</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Full-stack developer with a passion for building software that improves the lives of people.
        </p>
        <p className="text-base text-gray-500 sm:mt-2 sm:text-lg sm:mx-auto md:mt-2 md:text-xl lg:mx-0">
          I'm looking for a chance to gain work experience as a Software Engineer, opportunities to develop my skills, take on interesting projects, and work with people I can learn from. Willing to work hard and excited to continue learning new skills to become a successful developer.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>

      <Skills />
      <WorkExperience />
      <Certifications />
    </main>
  )
}

export default Home;
