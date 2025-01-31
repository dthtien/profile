
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Toggle({ children, buttonComponent }: { children: React.ReactNode, buttonComponent: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Disclosure>
      <Disclosure.Button className="py-2 flex gap-2" onClick={() => setEnabled(!enabled)}>
        {buttonComponent}
        <ChevronRightIcon className={`${enabled ? 'rotate-90 transform' : ''} h-6 w-6`} />
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
}
