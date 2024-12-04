"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Keyboard, MessageSquare, Star, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../../../components/ui/card"
import { Button } from "../../../../../../components/ui/button"
import { Badge } from "../../../../../../components/ui/badge"
import Header_Student from "../../../../../../components/Header_Student"
import Footer from "../../../../../../components/Footer"

const companies = [
  {
    name: "Adobe",
    description: "Experience real-time coding challenges and in-depth technical questions.",
    features: [
      "Problem-solving skills assessment",
      "Data structure knowledge evaluation",
      "Interactive interview simulations",
    ],
  },
  {
    name: "Oracle",
    description: "Engage with database, systems, and enterprise software challenges.",
    features: [
      "Algorithmic thinking tests",
      "Database and system knowledge assessment",
      "Enterprise-level scenario simulations",
    ],
  },
  {
    name: "Intuit",
    description: "Tackle financial software and business logic problems.",
    features: [
      "Data structures and algorithms focus",
      "Financial software solution understanding",
      "User-centric platform development scenarios",
    ],
  },
  {
    name: "Samsung",
    description: "Focus on embedded systems and hardware-software integration.",
    features: [
      "Software optimization challenges",
      "Mobile technologies expertise evaluation",
      "Consumer electronics development problems",
    ],
  },
  {
    name: "Microsoft",
    description: "Solve problems related to cloud, AI, and enterprise software.",
    features: [
      "Distributed systems knowledge assessment",
      "Scalability and architecture challenges",
      "Global-scale platform design simulations",
    ],
  },
  {
    name: "Morgan Stanley",
    description: "Engage with financial technology and trading systems challenges.",
    features: [
      "Risk analysis and data-driven decision making",
      "Trading system design problems",
      "High-stakes financial services scenarios",
    ],
  },
]

const questions = [
  "two-sum", "reverse-linked-list", "valid-parentheses", "merge-two-sorted-lists",
  "maximum-subarray", "best-time-to-buy-and-sell-stock", "symmetric-tree", "fizz-buzz",
  "climbing-stairs", "intersection-of-two-linked-lists", "add-two-numbers",
  "longest-substring-without-repeating-characters", "3sum", "container-with-most-water",
  "group-anagrams", "decode-ways", "binary-tree-inorder-traversal",
  "search-in-rotated-sorted-array", "top-k-frequent-elements", "longest-palindromic-substring",
  "minimum-window-substring", "valid-sudoku", "rotate-list", "word-search",
  "subarray-sum-equals-k", "coin-change", "combination-sum", "unique-paths",
  "letter-combinations-of-a-phone-number", "product-of-array-except-self", "happy-number",
  "find-peak-element", "string-to-integer-atoi", "merge-intervals",
  "binary-tree-level-order-traversal", "median-of-two-sorted-arrays", "n-queens",
  "regular-expression-matching", "first-missing-positive", "trapping-rain-water",
  "wildcard-matching", "longest-valid-parentheses", "maximum-length-of-repeated-subarray",
  "insert-interval", "minimum-path-sum", "word-ladder", "largest-rectangle-in-histogram",
  "palindrome-partitioning", "number-of-islands", "3sum-closest"
]

const FeaturesSection = () => {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? "" : prevDots + "."))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* <Header_Student /> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-2">
            Interviews Pending<span className="ml-1">{dots}</span>
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Below is the list of all the AI interviews pending for you. Click on any card to start the respective company's interview.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{company.name}</CardTitle>
                  <CardDescription>{company.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {company.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => {
                      const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
                      window.location.href = `/student/dashboard/Interview/AI/src/question/${randomQuestion}`
                    }}
                  >
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default FeaturesSection

