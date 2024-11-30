"use client";

import { Card, CardContent } from "../../../components/ui/card";
import { LayoutDashboard, Bell } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 h-48" />
      <div className="relative container mx-auto px-4">
        <Card className="mt-8">
          <CardContent className="p-6 flex justify-between items-start">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-1">Company Dashboard</h1>
                <p className="text-muted-foreground">
                  Manage your job postings and track applications efficiently
                </p>
              </div>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}