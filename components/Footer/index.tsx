import Image from "next/image"

const Footer = () => {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
      <a
        href="https://github.com/dthtien/profile"
        target="_blank"
        className="items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white"
        rel="noreferrer"
      >
        <Image
          src="/icons/github.svg"
          width={30}
          height={30}
          alt="github"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </a>
    </div>
  )
}

export default Footer;
