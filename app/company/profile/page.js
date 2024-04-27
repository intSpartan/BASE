"use client";

import Header_Company from "@/app/components/Header_Company";
import {
    EnvironmentOutlined,
    LinkOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Typography } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import Footer from "@/app/components/Footer";

const { Meta } = Card;
const { Title, Text } = Typography;

const CompanyProfile = () => {
    const router = useRouter();

    const company = {
        name: "ABC Technologies",
        industry: "Technology",
        description:
            "Welcome to our IT company, where innovation meets expertise to redefine the boundaries of technology. Founded on a passion for excellence and a drive for continuous improvement, we have emerged as a trusted leader in the ever-evolving landscape of digital solutions. Our journey is fueled by a team of dedicated professionals who bring together diverse skills and perspectives to deliver cutting-edge products and services tailored to meet the unique needs of our clients. With a relentless focus on quality, integrity, and customer satisfaction, we have earned a reputation for excellence and reliability in everything we do. At our core, we are more than just a technology company; we are partners in your success, committed to empowering businesses to thrive in the digital age and beyond. Join us as we embark on this exciting journey of innovation and transformation.",
        location: "San Francisco, CA",
        website: "https://www.abc-tech.com",
        logo: "https://via.placeholder.com/150",
        employees: 500,
        jobOpenings: [
            {
                id: 1,
                title: "Software Engineer",
                department: "Engineering",
                location: "San Francisco, CA",
                deadline: "May 15, 2024",
            },
            {
                id: 2,
                title: "Product Manager",
                department: "Product Management",
                location: "San Francisco, CA",
                deadline: "May 20, 2024",
            },
        ],
        goals:
            "At our IT company, our goals are firmly anchored in driving innovation, delivering exceptional solutions, and fostering long-lasting partnerships. We strive to push the boundaries of technology, consistently exceeding client expectations through our expertise and dedication. Our commitment lies in harnessing the power of cutting-edge tools and methodologies to solve complex challenges, while maintaining a customer-centric approach at every step. With a focus on continuous improvement and collaboration, we aim to be at the forefront of the ever-evolving IT landscape, empowering businesses to thrive in the digital age.",
        ambitions:
            "In the realm of ambitions, our IT company envisions a future where technological possibilities are limitless and transformative. We aspire to be pioneers in shaping the digital frontier, leading the charge towards a more connected and innovative world. With a steadfast commitment to excellence, we aim to expand our reach globally, forging new partnerships and ventures that drive progress and positive change. Our ambition extends beyond mere success; we strive to leave a lasting impact on industries, societies, and lives, through groundbreaking solutions and unwavering dedication to our mission.",
    };

    return (
        <>
            <Header_Company />
            <div className="container mx-auto py-8">
                <div className="flex flex-col items-center mb-8">
                    <Avatar size={150} src={company.logo} />
                    <div className="mt-4">
                        <Title level={3} className="text-center">
                            {company.name}
                        </Title>
                        <Text type="secondary" className="text-center">
                            {company.industry}
                        </Text>
                    </div>
                    <div className="mt-4">
                        <Button
                            type="primary"
                            href={company.website}
                            target="_blank"
                            icon={<LinkOutlined />}
                        >
                            Visit Website
                        </Button>
                    </div>
                </div>

                <Divider />

                <div className="mb-8">
                    <Title level={3}>About Us</Title>
                    <Text className="text-gray-700">{company.description}</Text>
                </div>

                <Divider />

                <div className="mb-8">
                    <Title level={3}>Our Goals</Title>
                    <Text className="text-gray-700">{company.goals}</Text>
                </div>

                <Divider />

                <div className="mb-8">
                    <Title level={3}>Our Ambitions</Title>
                    <Text className="text-gray-700">{company.ambitions}</Text>
                </div>

                <Divider />

                <div className="mb-8">
                    <Title level={3}>Company Details</Title>
                    <div className="flex items-center mb-2">
                        <TeamOutlined className="mr-2" />
                        <Text strong>{company.employees} Employees</Text>
                    </div>
                    <div className="flex items-center">
                        <EnvironmentOutlined className="mr-2" />
                        <Text strong>{company.location}</Text>
                    </div>
                </div>

                <Divider />

                <div className="mb-8">
                    <Title level={3}>Current Job Openings</Title>
                    {company.jobOpenings.map((job) => (
                        <Card
                            key={job.id}
                            hoverable
                            className="mb-4"
                            title={job.title}
                            extra={
                                <Button
                                    type="link"
                                    onClick={() => router.push(`/jobs/${job.id}`)}
                                >
                                    View Details
                                </Button>
                            }
                            style={{
                                borderRadius: 12,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            }}
                        >
                            <p className="mb-1">
                                <Text strong>Department:</Text> {job.department}
                            </p>
                            <p className="mb-1">
                                <Text strong>Location:</Text> {job.location}
                            </p>
                            <p className="mb-1">
                                <Text strong>Deadline:</Text> {job.deadline}
                            </p>
                            <Button
                                type="primary"
                                block
                                className="mt-4"
                                onClick={() => router.push(`/jobs/${job.id}`)}
                            >
                                Apply Now
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompanyProfile;
