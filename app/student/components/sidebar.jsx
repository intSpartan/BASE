  import React from "react";
  import { Wallet, BellRing, GitCompareArrows, LayoutDashboard } from "lucide-react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import { cn } from "../../../lib/utils";

  const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
      { href: "/student/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { href: "/student/dashboard/OA", icon: Wallet, label: "OA" },
      { href: "/student/dashboard/Interview", icon: BellRing, label: "Interview" },
      { href: "/student/dashboard/compareJobs", icon: GitCompareArrows, label: "Compare Jobs" },
    ];

    return (
      <aside className="w-64 bg-white border-r border-gray-200 px-4 py-6 flex flex-col h-screen">
        <div className="mb-8">
          <svg
            width="40"
            height="46"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528Z"
              fill="black"
            />
          </svg>
        </div>
        <nav className="space-y-2 flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="w-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
            Sign Out
          </button>
        </div>
      </aside>
    );
  };

  export default Sidebar;
