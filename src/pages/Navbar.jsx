import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../assets/react.svg";
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', refName: 'heroRef' },
  { name: 'About Us', refName: 'aboutRef' },
  { name: 'Services', refName: 'servicesRef' },
  { name: 'Testimonials', refName: 'testimonialsRef' },
  { name: 'Gallery', refName: 'gallery' },
  { name: 'Pricing', refName: 'pricingRef' },
  { name: 'Contact', refName: 'contactRef' },
];

export default function Navbar({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (refName) => {
    if (refName === "gallery") {
      navigate("/gallery");
    } else {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(refName), 300);
      } else {
        scrollToSection(refName);
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/20 backdrop-blur-md shadow-md">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Newton Driving School</span>
            <img alt="Newton Driving School Logo" src={logo} className="h-16 w-48" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.refName)}
              className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="tel:+17786973322" className="flex items-center text-sm font-semibold text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-2"
              style={{
                background: "linear-gradient(to right, #ff80b5, #9089fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <path d="M6.62 10.79a15.534 15.534 0 006.59 6.59l2.2-2.2a1 1 0 01.9-.27 11.564 11.564 0 003.61.56 1 1 0 011 1v3.71a1 1 0 01-1 1A17.93 17.93 0 013 4.05a1 1 0 011-1H7.7a1 1 0 011 1 11.564 11.564 0 00.56 3.61 1 1 0 01-.27.9l-2.2 2.2z" />
            </svg>
            +1 - (778) - 697 3322
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Newton Driving School</span>
              <img alt="Newton Driving School Logo" src="../vite.svg" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.refName)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
