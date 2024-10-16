
import React from 'react';
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer id="contact" className="bg-indigo-100 text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-10 mx-auto sm:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <SiLeetcode className='h-10 w-auto px-4'/>
          <span className="ml-1 text-xl">Interview Buddy</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © 2024 Delta — <a href="https://snucdelta.tech" className="ml-1 text-gray-600" rel="noopener noreferrer" target="_blank">snucdelta.tech</a> — For Vivid 2024
        </p>
      </div>
    </footer>
    
  );
}

export default Footer;
