// pages/blog.js
"use client"
import { useState } from 'react';
import Header_Student from '@/app/components/Header_Student';
import Blog from '../components/blog';
// Sample blog data
const blogs = [
    { id: 1, title: 'Google Interview Experience', author: 'Abhishek', content: "I'm thrilled to share my experience of interviewing with Google, one of the most renowned tech companies in the world! From the application process to the final interview rounds, it has been an incredible journey filled with challenges, learnings, and personal growth.The journey began with the initial application, where I had the opportunity to showcase my skills and experiences through my resume and cover letter. The process was smooth and well-organized, thanks to the clear communication and guidance from the Google recruitment team.As I progressed to the interview rounds, I was greeted with a series of technical assessments and coding challenges that pushed me to think critically and creatively. Each interview round provided me with valuable feedback and insights, allowing me to refine my skills and approach for the next round.One of the most memorable aspects of the interview process was the opportunity to engage with some of the brightest minds in the industry. The interviewers were not only experts in their respective fields but also genuinely passionate about helping candidates succeed. Their guidance and mentorship throughout the process were invaluable, and I'm incredibly grateful for the opportunity to learn from them.Finally, after several rounds of interviews, I received the news that I had been selected to join Google! The feeling of excitement and accomplishment was indescribable, knowing that I would soon be a part of a company that is at the forefront of innovation and technology." },
    { id: 2, title: 'Service Now Interview Experience', author: 'Sparsh & Abhishek', content: "I'm excited to share my experience of interviewing with ServiceNow, a leading company in the world of digital workflows and cloud computing. From the initial application to the final interview rounds, it has been an enlightening journey filled with valuable insights and personal development.The journey began with the initial application process, where I had the opportunity to showcase my skills, experiences, and passion for technology. ServiceNow's recruitment team provided clear communication and guidance throughout, making the process seamless and efficient.As I progressed to the interview rounds, I was presented with a series of technical assessments and discussions that challenged me to think critically and demonstrate my problem-solving abilities. Each interview round provided me with new perspectives and opportunities to showcase my expertise in areas such as cloud computing, IT service management, and software development.One of the most rewarding aspects of the interview process was the chance to engage with ServiceNow's talented and dedicated team members. From the interviewers to the hiring managers, everyone I interacted with demonstrated a genuine passion for their work and a commitment to fostering a culture of innovation and collaboration." },
    { id: 3, title: 'Saleforces Interview Experience', author: 'Deepshikha', content: "I'm excited to share my experience of interviewing with Salesforce, a pioneering company in cloud computing and customer relationship management (CRM). From the initial application to the final interview rounds, it has been an enlightening journey filled with valuable insights and personal development.The journey began with the initial application process, where I had the opportunity to showcase my skills, experiences, and passion for technology. Salesforce's recruitment team provided clear communication and guidance throughout, making the process seamless and efficient.As I progressed to the interview rounds, I was presented with a series of technical assessments and discussions that challenged me to think critically and demonstrate my problem-solving abilities. Each interview round provided me with new perspectives and opportunities to showcase my expertise in areas such as cloud computing, software development, and CRM solutions.One of the most rewarding aspects of the interview process was the chance to engage with Salesforce's talented and diverse team members. From the interviewers to the hiring managers, everyone I interacted with demonstrated a genuine passion for their work and a commitment to driving positive change in the world.Throughout the process, I received constructive feedback and support from the interviewers, which helped me refine my skills and approach for future rounds. Their guidance and encouragement motivated me to perform at my best and embrace every challenge as an opportunity for growth." },
    { id: 4, title: 'Dom Dog Working Experience', author: 'Lavesh', content: "I'm excited to share my journey of working in an information security company, where every day is a new opportunity to protect digital assets and mitigate cyber threats. From the dynamic challenges to the rewarding experiences, it has been an enriching journey filled with growth and learning.My role in the information security company has been multifaceted, involving a range of responsibilities aimed at ensuring the confidentiality, integrity, and availability of sensitive information. Whether it's conducting security assessments, implementing robust security controls, or responding to incidents, I've had the privilege of contributing to the organization's mission of safeguarding digital assets and building resilience against cyber threats.One of the most rewarding aspects of working in an information security company is the opportunity to collaborate with talented professionals from diverse backgrounds. From cybersecurity experts to risk analysts, everyone brings unique insights and perspectives to the table, fostering a culture of innovation and continuous improvement.In addition to the technical aspects of the job, I've also had the chance to develop soft skills such as communication, problem-solving, and critical thinking. Effective communication is crucial in conveying complex security concepts to stakeholders and promoting a culture of security awareness throughout the organization." },

];

export default function BlogPage() {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    return (
        <>
            <Header_Student />
            <div className="flex">
                <div className="w-64 h-screen bg-gray-200 p-4 overflow-y-auto transition-all duration-300 transform">
                    <h2 className="text-2xl font-bold mb-4">LATEST STORIES</h2>
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-blue-100 transform hover:scale-105"
                            onClick={() => handleBlogClick(blog)}
                        >
                            <h3 className="text-lg font-semibold">{blog.title}</h3>
                            <p className="text-gray-600">{blog.author}</p>
                        </div>
                    ))}
                </div>
                <div className="w-[1200px] h-screen bg-gray-100 p-8 overflow-y-auto transition-all duration-300">
                    {selectedBlog ? (
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
                            <p className="text-lg text-gray-700 mb-4">{selectedBlog.author}</p>
                            <p className="text-gray-600">{selectedBlog.content}</p>
                        </div>
                    ) : (
                        <p className="text-center transition-all duration-300 transform hover:scale-105">Click on a blog to read</p>
                    )}
                </div>
                <Blog />
            </div>
        </>
    );
}