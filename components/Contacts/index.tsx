import Image from "next/image";

const Contacts = () => (
  <div>
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
      <div className="rounded-md shadow">
        <a
          href="https://drive.google.com/file/d/1vq_qBgXf8MwikJDhA0I5zp97l80SJls-/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          CV
        </a>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tiendt2311@gmail.com"
          className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          target="_blank"
          rel="noreferrer"
        >
          Contact me
        </a>
      </div>
    </div>

    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
      <a
        href="https://github.com/dthtien"
        target="_blank"
        className="items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white"
        rel="noreferrer"
      >
        <Image src="/icons/github.svg" width={30} height={30} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/dthtien/"
        target="_blank"
        className="items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white"
        rel="noreferrer"
      >
        <Image
          src="/icons/linkedin.svg"
          width={30}
          height={30}
          alt="linkedin"
        />
      </a>
      <a
        href="https://twitter.com/dthtien"
        target="_blank"
        rel="noreferrer"
        className="items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white"
      >
        <Image src="/icons/twitter.svg" width={30} height={30} alt="twitter" />
      </a>
    </div>
  </div>
);

export default Contacts;
