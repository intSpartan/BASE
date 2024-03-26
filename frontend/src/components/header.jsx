
import React from 'react';
import { SiLeetcode } from "react-icons/si";

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Prepare', href: '#prepare' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#FAQs' },
    { name: 'Contact', href: '#contact' },
]

const Header = () => {
  return (
        <div id="home" className="bg-gradient-to-br from-purple-50 to-indigo-100  shadow-md">
          <header className="relative z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <a href="#">
                  <span className="sr-only">Interview Buddy</span>
                  <img className='h-12' src="/logo.webp" alt="" />
                </a>
              </div>
              <div className="hidden lg:flex lg:gap-14">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-600 text-sm font-semibold leading-6 hover:text-gray-900 transition duration-200 ease-in-out">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-gray-50 bg-violet-500 rounded-full hover:bg-violet-600 hover:text-white hover:shadow-md transition duration-200 ease-in-out">
                  Log in / Sign Up 
                </a>
              </div>
            </nav>
          </header>
        </div>
  );
};

export default Header;

