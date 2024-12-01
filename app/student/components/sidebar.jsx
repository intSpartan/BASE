import React from 'react'
import { Wallet, BellRing, GitCompareArrows } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 px-4 py-6">
      <div className="mb-8">
        <svg width="40" height="46" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528Z" fill="black"/>
        </svg>
      </div>
      <nav className="space-y-4">
        <Link href="/student/dashboard/OA" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Wallet className="h-5 w-5 mr-3" />
          <span className="text-sm font-medium">OA</span>
        </Link>
        <Link href="/student/dashboard/Interview" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <BellRing className="h-5 w-5 mr-3" />
          <span className="text-sm font-medium">Interview</span>
        </Link>
        <Link href="/student/dashboard/compareJobs" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <GitCompareArrows className="h-5 w-5 mr-3" />
          <span className="text-sm font-medium">Compare Jobs</span>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar

