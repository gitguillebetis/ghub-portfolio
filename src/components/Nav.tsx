import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FiMenu, FiX } from "react-icons/fi";


const navigation = [
  { name: 'Grundfos', href: '/grundfos' },
  { name: 'Concordium', href: '/concordium' },
  { name: 'Vass', href: '/vass' },
  { name: 'AGCO', href: '/agco' },
  { name: 'Altapay', href: '/altapay' },
  { name: 'Philips', href: '/philips' },
]

export default function Nav() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50 text-white py-6 px-4 sm:px-6 md:px-8 lg:px-10">
            <nav aria-label="Global" className="flex justify-between">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">G Hub</span>
                        <img
                            alt="G Hub"
                            src="/assets/companyLogo/ghub.svg"
                            className="h-5 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                        <span className="sr-only">Open main menu</span>
                        <FiMenu aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50">
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-white-700"
                                >
                                <span className="sr-only">Close menu</span>
                                <FiX aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-white-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </header>
    )
}
