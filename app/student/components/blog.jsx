import React from 'react'

const Blog = () => {
    return (
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
        <textarea 
          className="w-full p-4 border-2 border-gray-300 rounded-md resize-none focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition-all" 
          placeholder="Write your story here..."
          rows="10"
        ></textarea>
        <button className="mt-4 w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
          Create Blog
        </button>
      </div>
    );
  };  

export default Blog

