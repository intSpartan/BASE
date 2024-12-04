export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-20 mt-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#F67036] to-[#AB3BD2] text-transparent bg-clip-text">
              JoBro
            </span>
          </h1>
          <p className="text-xl mb-8">Where your future takes flight</p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 border-2 border-[#F67036] text-[#F67036] font-medium rounded-md hover:bg-[#F67036] hover:text-white transition-colors">
              Applicants
            </button>
            <button className="px-6 py-3 border-2 border-[#AB3BD2] text-[#5d276f] font-medium rounded-md hover:bg-[#AB3BD2] hover:text-white transition-colors">
              Companies
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For Applicants</h2>
            <p className="text-gray-600">
              Launch your career with tailored job matches, seamless assessments, and interview opportunities. Your future starts here.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For Companies</h2>
            <p className="text-gray-600">
              Simplify recruitment with streamlined processes, connect with top talent effortlessly, and build your dream team efficiently. Elevate your hiring experience today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

