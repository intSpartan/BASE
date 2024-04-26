// pages/blog.js
"use client"
import { useState } from 'react';
import Header_Company from '@/app/components/Header_Company';
import Blog from './blog';
// Sample blog data
const blogs = [
    { id: 1, title: 'Blog 1', author: 'Author 1', content: 'Content for Blog 1' },
    { id: 2, title: 'Blog 2', author: 'Author 2', content: 'Content for Blog 2' },
    { id: 3, title: 'Blog 3', author: 'Author 3', content: 'Content for Blog 3' },
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