"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Card, CardContent } from "../../../components/ui/card";
import { Building2, BriefcaseIcon, ArchiveIcon } from "lucide-react";
import { cn } from "../../../../lib/utils";
import FormPage from "../../../form/page";
import JobList from "../../joblist/page";
import ClosedJobsList from "../../closedjobs/page";

const tabItems = [
  {
    value: "add-job",
    label: "Add a Job",
    icon: BriefcaseIcon,
    component: FormPage,
  },
  {
    value: "active-jobs",
    label: "Active Jobs",
    icon: Building2,
    component: JobList,
  },
  {
    value: "closed-jobs",
    label: "Closed Jobs",
    icon: ArchiveIcon,
    component: ClosedJobsList,
  },
];

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="add-job" className="space-y-6">
      <TabsList className="grid w-full grid-cols-3 h-auto gap-4 bg-muted/50 p-1 rounded-xl">
        {tabItems.map(({ value, label, icon: Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className={cn(
              "data-[state=active]:bg-background flex items-center gap-2 py-3",
              "data-[state=active]:shadow-sm transition-all duration-200",
              "hover:bg-background/50"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabItems.map(({ value, component: Component }) => (
        <TabsContent key={value} value={value} className="space-y-4">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <Component />
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}