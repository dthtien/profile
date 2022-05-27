import Image from "next/image";
import { FC } from "react";

const Icon: FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <span className="mr-2 ml-2 first:ml-0">
    <Image src={src} width={30} height={30} alt={alt}/>
  </span>
)

export default function Example() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-extrabold text-gray-900">Technical skills</h2>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm text-gray-500 font-extrabold">Programming languages</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Ruby, Javascript, HTML5, CSS3, Slim, Haml, CoffeeScript
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-extrabold text-gray-500">Frameworks / Libraries</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Icon src='/icons/ruby-on-rails.svg' alt='Ruby on Rails'/>
              <Icon src='/icons/react-js.svg' alt='React JS'/>
              <Icon src='/icons/redux.svg' alt='Redux'/>
              <Icon src='/icons/tailwind-css.svg' alt='Tailwind css'/>
              <Icon src='/icons/bootstrap-5-logo.svg' alt='Bootstrap'/>
              <Icon src='/icons/jquery.svg' alt='Jquery'/>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-extrabold text-gray-500">Cloud platforms</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">AWS EC2, Heroku</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-extrabold text-gray-500">Server administration</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Ubuntu server, Nginx</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-extrabold text-gray-500">Storage</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              PostgreSQL
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-extrabold text-gray-500">Tools</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Vim, Git, Alacritty
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-extrabold text-gray-500">Paradigms</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Behavior-driven Development, Test-driven Development, Object-oriented Programming, Responsive Web Design, Model-View-Controlle
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
