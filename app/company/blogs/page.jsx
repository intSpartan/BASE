"use client";

import Blog from "./blog";
import Header_Company from "../../components/Header_Company";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Inside Google",
    author: "Adams James",
    content:
      "Google, the tech giant known for its groundbreaking innovations and disruptive ideas, is not just a company—it's a culture. From its humble beginnings in a garage to becoming a global powerhouse, Google has cultivated a unique work environment that fosters creativity, collaboration, and a passion for solving big problems. In this blog post, we'll take a closer look at the culture of Google and what makes it one of the most admired companies to work for.Embracing Innovation:At Google, innovation is at the heart of everything they do. Employees are encouraged to think outside the box, challenge the status quo, and pursue ambitious ideas that have the potential to change the world. From self-driving cars to artificial intelligence, Google's culture of innovation empowers employees to dream big and make a difference.Unleashing Creativity:Creativity thrives in Google's dynamic and inclusive work environment. Employees are given the freedom to explore their passions, experiment with new technologies, and collaborate with colleagues from diverse backgrounds. Whether it's through hackathons, design sprints, or brainstorming sessions, Google provides countless opportunities for employees to unleash their creative potential and turn ideas into reality.Building a Culture of Collaboration:Google's culture is built on the foundation of collaboration and teamwork. From open office spaces to shared communal areas, the physical layout of Google's campuses is designed to facilitate interaction and communication among employees. Cross-functional teams work together seamlessly to tackle complex challenges and drive innovation forward.",
  },
  {
    id: 2,
    title: "Exploring Service Now",
    author: "John Doe",
    content:
      "Welcome to the world of ServiceNow, where innovation, collaboration, and a passion for making work better are at the heart of everything we do. In this blog, we'll take a deep dive into the vibrant culture that defines ServiceNow and sets us apart as a leading force in the tech industry.Embracing Innovation:At ServiceNow, innovation isn't just encouraged – it's celebrated. Our culture fosters a spirit of curiosity and creativity, where employees are empowered to think outside the box, challenge the status quo, and bring bold ideas to life. Whether it's developing cutting-edge solutions to solve complex business challenges or revolutionizing the way people work, innovation is woven into the fabric of our company.Cultivating Collaboration:Collaboration is key to our success at ServiceNow. We believe that great ideas are born from the collective efforts of diverse teams working together towards a common goal. Our open and inclusive culture encourages collaboration at every level, from cross-functional project teams to company-wide initiatives. Through open communication, mutual respect, and a shared sense of purpose, we're able to achieve remarkable results and drive meaningful impact for our customers and communities.Empowering Employees:At ServiceNow, our greatest asset is our people. We believe in empowering every employee to reach their full potential and make a difference in the world. From comprehensive training and development programs to opportunities for career growth and advancement, we invest in our employees' success and well-being. Our inclusive and supportive culture ensures that everyone has a voice and a seat at the table, regardless of background or experience.Fostering Diversity and Inclusion:Diversity and inclusion are fundamental to who we are as a company. We recognize that diverse perspectives drive innovation and fuel creativity, which is why we're committed to creating a workplace where everyone feels welcome, valued, and respected. Through initiatives like our Employee Resource Groups (ERGs) and diversity-focused recruitment efforts, we're building a culture that celebrates individuality and embraces the unique contributions of every employee.Giving Back to the Community:ServiceNow is more than just a technology company – we're also a force for good in the communities where we live and work. Through our corporate social responsibility (CSR) initiatives and volunteer programs, we're dedicated to making a positive impact on society and driving positive change. Whether it's through charitable giving, environmental stewardship, or employee volunteerism, we're committed to using our resources and expertise to create a better world for future generations.Conclusion:In conclusion, the culture of ServiceNow is one of innovation, collaboration, empowerment, diversity, and inclusion. It's what sets us apart and fuels our continued success as a company. We're proud to be part of a culture that values people, fosters creativity, and drives positive change – and we invite you to join us on this incredible journey. Together, we can make the world of work better for everyone.",
  },
  {
    id: 3,
    title: "Diving into Salesforces",
    author: "Mary Seoul",
    content:
      "Welcome to Salesforce, where Ohana isn't just a word – it's a way of life. In this blog, we'll delve into the unique culture that defines Salesforce and sets us apart as a trailblazing force in the tech industry. From our commitment to equality and sustainability to our culture of innovation and giving back, discover why Salesforce is more than just a company – it's a movement.Ohana: Family FirstAt Salesforce, we believe that business is personal and that our success is tied to the success of our Ohana – our employees, customers, partners, and communities. Ohana isn't just a word; it's a philosophy that guides everything we do. From our inclusive hiring practices to our supportive work environment, we're committed to creating a culture where everyone feels like they belong and are valued for who they arEquality for All Equality is at the core of our culture at Salesforce. We believe that everyone deserves equal opportunities and respect, regardless of race, gender, sexual orientation, or background. Through initiatives like our Equality Groups and pay equality audits, we're working to create a more diverse and inclusive workforce and break down barriers to success for underrepresented groups. Our commitment to equality extends beyond the workplace to our advocacy for social justice and human rights around the world.Innovation and Trailblazing Spirit At Salesforce, we're not afraid to dream big and think differently. Our culture of innovation and entrepreneurship encourages employees to push the boundaries of what's possible and embrace change as an opportunity for growth. From our cutting-edge technology to our agile development processes, innovation is ingrained in everything we do. We empower our employees to be trailblazers in their fields and drive positive change in the world through bold ideas and fearless execution.Giving Back and Making a Difference Giving back is in our DNA at Salesforce. Through our 1-1-1 model of philanthropy, we donate 1% of our time, 1% of our product, and 1% of our equity to support nonprofits and charitable causes around the world. From volunteering in local communities to providing free software to nonprofit organizations, we're committed to using our resources and expertise to make a positive impact on society and create a more sustainable future for all.Sustainability and Environmental Stewardship As stewards of the planet, we're committed to minimizing our environmental footprint and building a more sustainable future for generations to come. From our commitment to renewable energy and carbon neutrality to our efforts to reduce waste and promote eco-friendly practices, sustainability is a core value at Salesforce. We believe that business can be a force for good in the world, and we're dedicated to leading by example and inspiring others to do the same.Conclusion:In conclusion, the culture of Salesforce is one of Ohana, equality, innovation, giving back, and sustainability. It's what sets us apart and fuels our mission to change the world for the better. We're proud to be part of a company that values people over profits and is committed to making a positive impact on society and the planet. Join us at Salesforce and experience the power of Ohana firsthand. Together, we can create a brighter future for all.",
  },
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <>
      <Header_Company />
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
              <p className="text-lg text-gray-700 mb-4">
                {selectedBlog.author}
              </p>
              <p className="text-gray-600">{selectedBlog.content}</p>
            </div>
          ) : (
            <p className="text-center transition-all duration-300 transform hover:scale-105">
              Click on a blog to read
            </p>
          )}
        </div>
        <Blog />
      </div>
    </>
  );
}
