"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Card, CardContent } from "../../../components/ui/card"
import Header_Student from "../../../components/Header_Student"
import Footer from "../../../components/Footer"
import Normal_Interview from "./normal_interviews"
import AI_Interview from "./AI/src/AI_Interview"
import GlobalContext from "../../../GlobalContext"

const InterviewPage = () => {
  const [selectedOption, setSelectedOption] = useState("normal")

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "normal":
        return <Normal_Interview />
      case "ai":
        return <AI_Interview />
      default:
        return <Normal_Interview />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header_Student />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full">
          <CardContent className="p-6">
            <Tabs value={selectedOption} onValueChange={setSelectedOption} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="normal">Normal Interview</TabsTrigger>
                <TabsTrigger value="ai">AI Interview</TabsTrigger>
              </TabsList>
              <TabsContent value="normal">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Normal_Interview />
                </motion.div>
              </TabsContent>
              <TabsContent value="ai">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <AI_Interview />
                </motion.div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default InterviewPage

