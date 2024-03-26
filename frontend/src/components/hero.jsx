
import React from 'react';

const HeroSection = () => {
    return (
      <div>
        <section className="bg-indigo-50 h-[650px] py-10 px-10 md:px-8">
          <div className='flex flex-row h-[600px]'>
            <div className="max-w-7xl mx-auto text-left py-60 text-gray-900">
              <h1 className="text-5xl md:text-5xl font-bold mb-4">Interview Buddy</h1>
              <p className="text-lg md:text-xl mb-8">Your companion for technical interview preparation</p>
              <a href="/question/two-sum" className="bg-violet-500 hover:bg-violet-600 text-white font-semibold hover:shadow-md py-3 px-6 rounded-full transition duration-300">Try Two Sum</a>
            </div>
            <div className=' h-[612px] w-[612px] py-10 mx-10 pb-10'>
            <img src="/feature.png" alt="" className='h-[512px] object-cover rounded-2xl border border-neutral-700'/>
            </div>
          </div>
        </section>
      </div>
  
    );
  };
  
export default HeroSection;

  