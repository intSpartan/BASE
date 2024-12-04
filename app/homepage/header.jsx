import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            width="40"
            height="46"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path
              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xl font-bold">JoBro</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
            Services
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link href="/support" className="text-gray-600 hover:text-gray-900 transition-colors">
            Support
          </Link>
          <Link
            href="/auth"
            className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
          >
            Login / Register
          </Link>
        </nav>
        <button className="md:hidden text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

