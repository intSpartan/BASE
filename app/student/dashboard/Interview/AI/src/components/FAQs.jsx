
import { Disclosure } from '@headlessui/react'
import { LiaPlusCircleSolid } from "react-icons/lia"
import { LiaMinusCircleSolid } from "react-icons/lia"

export const faqs = [
    {
      question: "Where do the coding questions come from?",
      answer:
        "Our coding questions are sourced from the renowned LeetCode Database, ensuring you get exposure to a wide range of interview-style problems commonly encountered in technical interviews.",
      
    },
    {
      question: "Are the practice sessions interactive?",
      answer:
        "Absolutely! Our practice sessions are designed to be highly interactive, allowing you to actively engage with the coding challenges, test your problem-solving skills, and receive real-time feedback to enhance your learning experience.",
      
    },
    {
      question: "How does the scoring system work?",
      answer:
        "Our scoring system evaluates your performance based on various factors, including problem-solving efficiency, code quality, and adherence to best practices. You'll receive a personalized score along with detailed insights to help you identify areas for improvement.",
      
    },
    {
      question: "Can I track my progress over time?",
      answer:
        "Yes, you can! Our platform offers comprehensive progress tracking features, allowing you to monitor your performance over time, track your strengths and weaknesses, and make informed decisions to optimize your preparation strategy.",
      
    },
    {
      question: "What if I need assistance during a practice session?",
      answer:
        "Don't worry, we've got you covered! Our platform provides real-time guidance and hints to help you navigate through challenging problems. Additionally, you can access our extensive resources and community forums for additional support and clarification.",
      
    },
    {
      question: "Is there a limit to the number of practice sessions I can undertake?",
      answer:
        "No, there's no limit! You can take as many practice sessions as you like, at any time that suits you. Our platform is available 24/7, ensuring you have the flexibility to practice and prepare for your technical interviews at your own pace.",
      
    },
    {
      question: "How can I get started with Interview Buddy?",
      answer:
        "Getting started is easy! Simply sign up for an account, choose your preferred coding language, and dive into our vast collection of coding questions and practice sessions. Start sharpening your skills and ace those technical interviews with Interview Buddy today!",
      
    }
  ];

const FaqSection = () => {
  return (
    <div id="FAQs" className="bg-indigo-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-900 text-center">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <LiaMinusCircleSolid className="h-6 w-6 text-violet-500" aria-hidden="true" />
                          ) : (
                            <LiaPlusCircleSolid className="h-6 w-6 text-violet-500" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FaqSection;