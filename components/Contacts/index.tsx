import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react'

import { Fragment, useState } from 'react';

type ContactModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: Error | undefined | null;
  isLoading: boolean;
}

const ContactModal = ({ showModal, setShowModal, handleSubmit, error, isLoading }: ContactModalProps) => (
  <Transition appear show={showModal} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={() => setShowModal(false)}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg text-center font-medium leading-6 text-gray-900"
              >
                Hi there! Please leave your contact here. I will get back to you soon.
                {
                  error && (
                    <p className="mt-2 text-red-500">{error.message}</p>
                  )
                }
              </Dialog.Title>
              <div className="mt-2">
                <section className="bg-white">
                  <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                          required
                          placeholder="Please enter your email"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block mb-2 text-sm font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Input your name if you don't mind"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Leave a comment..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="text-center">
                        {
                          isLoading ? (
                            <Loading />
                          ) : (
                            <button
                              type="submit"
                              className="inline-flex text-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              disabled={isLoading}
                            >
                              Send
                            </button>
                          )
                        }
                      </div>
                    </form>
                  </div>
                </section>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
)

type FormData = {
  name: { value: string };
  email: { value: string };
  message: { value: string };
}

type Error = {
  message: string,
  status: number
}

const Loading = () => (
  <div className="text-center mb-3">
    <div role="status">
      <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)


const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null | undefined>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = e.target as typeof e.target & FormData;
    const values = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    setLoading(true)
    fetch(
      `${process.env.API_URL}/api/v1/contact`,
      {
        method: 'POST',
        body: JSON.stringify(values),
        headers: new Headers({'content-type': 'application/json'})
      }).then((res) => res.json())
      .then(() => {
        setLoading(false);
        setError(null);
        setShowModal(false);
      }).catch(error => {
        setError({ message: error.message, status: error.status })
        setLoading(false);
    });
  }
  return (
    <div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <div className="rounded-md shadow">
          <a
            href="/files/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            CV
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            onClick={() => setShowModal(true)}
            className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            target="_blank"
            rel="noreferrer"
          >
            Contact me
          </a>
        </div>
      </div>

      <ContactModal showModal={showModal} setShowModal={setShowModal} handleSubmit={handleSubmit} error={error} isLoading={isLoading} />

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
  )};

export default Contacts;
