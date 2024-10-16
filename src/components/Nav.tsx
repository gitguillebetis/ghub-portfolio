import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import data from '../assets/json/data.json';

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const companies = data.companies;
    const location = useLocation(); // Get current route location

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
                        className="-m-2.5 inline-flex items-center justify-center p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <FiMenu aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex">
                    {companies.map((company) => {
                        const isActive = location.pathname === company.href;

                        return (
                            <Link
                                key={company.companyID}
                                to={isActive ? '#' : company.href}
                                className={`text-sm font-semibold leading-6 px-6 py-2 ${
                                    isActive
                                        ? 'text-white cursor-default'
                                        : 'text-white rounded-md hover:bg-white/20'
                                }`}
                                style={{
                                    borderBottom: isActive ? '2px solid rgba(255, 255, 255, 0.5)' : 'none'
                                }}
                                onClick={(e) => isActive && e.preventDefault()} // Prevents navigation if link is active
                            >
                                {company.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50">
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 p-2.5 text-white-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <FiX aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-white-500/10">
                                <div className="space-y-2 py-6">
                                    {companies.map((company) => {
                                        const isActive = location.pathname === company.href;

                                        return (
                                            <a
                                                key={company.companyID}
                                                href={isActive ? '#' : company.href}
                                                className={`-mx-3 block px-3 py-2 text-base font-semibold leading-7 ${
                                                    isActive
                                                        ? 'text-white cursor-default'
                                                        : 'text-white rounded-md hover:bg-white/20'
                                                }`}
                                                style={{
                                                    borderBottom: isActive ? '2px solid rgba(255, 255, 255, 0.5)' : 'none'
                                                }}
                                                onClick={(e) => isActive && e.preventDefault()}
                                            >
                                                {company.name}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </header>
    );
}
