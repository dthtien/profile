import Image from "next/image";
import { FC } from "react";

const Icon: FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <span className="mr-2 ml-2 first:ml-0">
    <Image
      src={src}
      width={30}
      height={30}
      alt={alt}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  </span>
);

const Item: FC<{ title: string; icons: { alt: string; src: string }[] }> = ({
  title,
  icons,
}) => {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm text-gray-500 font-extrabold">{title}</dt>
      <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {icons.map(({ alt, src }) => (
          <Icon alt={alt} key={alt} src={src} />
        ))}
      </dd>
    </div>
  );
};

const Skills = () => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h1 className="text-2xl leading-6 font-extrabold text-gray-900">
        Technical skills
      </h1>
    </div>
    <div className="border-t border-gray-200">
      <dl>
        <Item
          title="Programing Languages"
          icons={[
            {
              alt: "Ruby",
              src: "/icons/ruby-programming-language.svg",
            },
            {
              alt: "Javascript",
              src: "/icons/javascript-programming-language.svg",
            },
          ]}
        />
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-extrabold text-gray-500">
            Frameworks / Libraries
          </dt>
          <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Icon src="/icons/ruby-on-rails.svg" alt="Ruby on Rails" />
            <Icon src="/icons/react-js.svg" alt="React JS" />
            <Icon src="/icons/jquery.svg" alt="Jquery" />
          </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-extrabold text-gray-500">
            Cloud platforms
          </dt>
          <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Icon src="/icons/aws_ec2.png" alt="AWS EC2" />
            <Icon src="/icons/heroku.svg" alt="Heroku" />
          </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-extrabold text-gray-500">
            Server administration
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Icon src="/icons/linux-ubuntu.svg" alt="Ubuntu server" />
          </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-extrabold text-gray-500">Storage</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Icon src="/icons/postgresql.svg" alt="Postgresql" />
          </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-extrabold text-gray-500">Tools</dt>
          <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Icon src="/icons/neovim.svg" alt="Neovim" />
            <Icon src="/icons/git.svg" alt="Git" />
            <Icon src="/icons/alacritty.svg" alt="Alacritty" />
          </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-extrabold text-gray-500">Paradigms</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Event-driven Development, Test-driven Development,
            Object-oriented Programming, Model-View-Controller
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default Skills;
