import React from "react";
import { ChevronRight } from 'lucide-react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Stay Connected</h2>
            <p className="text-gray-400">
              Get the latest job opportunities and career insights delivered to your inbox.
            </p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 focus:ring-1 focus:ring-white"
              />
              <Button type="submit" variant="outline" className="bg-white text-gray-900 hover:bg-gray-200">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Our Mission", "Team", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Blog", "Help Center", "Contact", "Terms of Service", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {["LinkedIn", "Twitter", "Facebook", "Instagram", "YouTube"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg
              width="40"
              height="46"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528Z"
                fill="currentColor"
              />
            </svg>
            <span className="ml-4 text-xl font-bold">JoBro</span>
          </div>
          <p className="text-sm text-gray-400">© 2024 JoBro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

