'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Users, FileSpreadsheet } from 'lucide-react';

import { cn } from "../../../../../lib/utils";
import { Button } from "../../../../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import { ScrollArea } from "../../../../components/ui/scroll-area";

import AboutJob from "./AboutJob";
import ApplicantApplied from "./ApplicantApplied";
import FinalSelects from "./FinalSelects";
import Interview from "./Interview";
import OA_Scores from "./OA_Scores";
import OA_company from "./OA_company";
import Header_Company from "../../../../components/Header_Company";
import Footer from "../../../../components/Footer";

const sidebarItems = [
  { id: "1", label: "About Job", icon: BarChart, component: AboutJob },
  { id: "2", label: "Applicants", icon: Users, component: ApplicantApplied },
  { id: "3", label: "OA", icon: FileSpreadsheet, component: OA_company },
  { id: "4", label: "Interview", icon: BellRing, component: Interview },
  { id: "5", label: "OA Scores", icon: Newspaper, component: OA_Scores },
  { id: "6", label: "Selected", icon: Paperclip, component: FinalSelects },
];

export default function Sidebar({ jobId }) {
  const [selectedOption, setSelectedOption] = useState("1");
  const router = useRouter();

  const renderSelectedComponent = () => {
    const selected = sidebarItems.find(item => item.id === selectedOption);
    if (!selected) return <AboutJob />;
    
    const Component = selected.component;
    return <Component jobId={jobId} functionality={selected.label === "Applicants" ? "Shortlist" : undefined} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header_Company />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => router.push('/')}
                  >
                    <svg
                      width="40"
                      height="46"
                      viewBox="0 0 50 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to Home</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-1 p-2">
              {sidebarItems.map((item) => (
                <TooltipProvider key={item.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={selectedOption === item.id ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start",
                          selectedOption === item.id && "bg-muted"
                        )}
                        onClick={() => setSelectedOption(item.id)}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </ScrollArea>
        </aside>
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <motion.div
            key={selectedOption}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderSelectedComponent()}
          </motion.div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
