import React from 'react'

const Blog = () => {
    return (
      <div className="flex justify-end">
        <div className="w-96 py-6">
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
          <textarea className="border-2 rounded-md p-4 w-full" placeholder="Add your story" cols="30" rows="26"></textarea>
          <button className="mt-4 bg-green-600 text-white font-bold py-3 px-6 rounded-lg">Create Blog</button>
        </div>
      </div>
    );
  };  

export default Blog