'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle, Plus } from 'lucide-react';

import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Switch } from "../../../../components/ui/switch";
import { useToast } from "../../../../components/ui/use-toast";
import  TimePickerModal  from "./TimePickerModal";

const OA_creator = ({ jobId }) => {
  const [mcq, setMcq] = useState("5");
  const [codingQuestions, setCodingQuestions] = useState("1");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOA = async (time) => {
    try {
      const res = await fetch(`/api/jobs/${jobId}/OA`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          mcqs: parseInt(mcq, 10),
          coding_questions: parseInt(codingQuestions, 10),
          time: new Date(time).getTime(),
        }),
      });

      if (!res.ok) throw new Error("Failed to create OA");

      toast({
        title: "Success",
        description: "Online Assessment has been created successfully.",
        duration: 3000,
      });

      alert("Online Assessment has been created successfully.");
    } catch (error) {
      console.error("Error creating OA:", error);
      toast({
        title: "Error",
        description: "Failed to create Online Assessment. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-white p-4"
    >
      <Card className="w-full max-w-lg shadow-lg border border-gray-200">
        <CardHeader className="bg-black text-white rounded-t-lg">
          <CardTitle className="text-2xl">Create Online Assessment</CardTitle>
          <CardDescription className="text-gray-300">
            Design the assessment for candidates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="mcq" className="text-black hover:text-gray-100 transition duration-150">
              Multiple Choice Questions
            </Label>
            <Select value={mcq} onValueChange={setMcq}>
              <SelectTrigger id="mcq" className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none">
                <SelectValue placeholder="Select number of MCQs" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg">
                {[...Array(11)].map((_, i) => (
                  <SelectItem
                    key={i}
                    value={(i + 5).toString()}
                    className="px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-800 rounded-md transition duration-150"
                  >
                    {i + 5}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-black hover:text-gray-700 transition duration-150">
              Coding Questions
            </Label>
            <RadioGroup value={codingQuestions} onValueChange={setCodingQuestions} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="coding-1" />
                <Label htmlFor="coding-1">1 Question</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2" id="coding-2" />
                <Label htmlFor="coding-2">2 Questions</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="confirm"
              checked={isConfirmed}
              onCheckedChange={setIsConfirmed}
            />
            <Label htmlFor="confirm" className="text-black hover:text-gray-700 transition duration-150">
              I confirm the assessment structure
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            className="w-full bg-black text-white hover:bg-gray-800"
            onClick={handleOpenModal}
            disabled={!isConfirmed}
          >
            <Clock className="mr-2 h-4 w-4" /> Set Assessment Time
          </Button>
        </CardFooter>
      </Card>
      <TimePickerModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={handleOA}
      />
    </motion.div>
  );
};

export default OA_creator;
