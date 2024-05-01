import supabase from "../authCompany";
import Header from "../homepage/header";
import Footer from "./Footer";
import FileUpload from "./resume/page";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ApplicantDetails() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [company, setCompany] = useState("");
  const [cgpa, setCGPA] = useState("");

  const [loginid, setloginId] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
      } else {
        setloginId(user.id);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      alert("Fill the Form Properly!");
      return;
    }

    try {
      await fetch("http://localhost:3000/api/applicants", {
        method: "POST",
        headers: {
          "Content-type": "applications/json",
        },
        body: JSON.stringify({ name, college, company, cgpa, loginid }),
      });
      alert("Profile Created");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Header />
      {/* // random shit */}

      <div className="bg-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 mt-[100px]">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg mx-7 mt-7 font-medium leading-6 text-gray-900">
                  Applicant Profile
                </h3>
                <p className="mt-1 mx-7 text-sm text-gray-600">
                  This information will be displayed publicly to everyone
                </p>
              </div>
            </div>
            <div className="mr-5 md:col-span-2 mt-[100px]">
              <form onSubmit={handleSubmit}>
                <div className="shadow-md rounded-t-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                      >
                        Name
                      </label>
                      <div className="mt-1 grid grid-cols-2 gap-6">
                        <input
                          className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          name="CompanyName"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-1 grid grid-cols-2 gap-6">
                      <div className="mb-2 max-w-full sm:col-span-1">
                        <label
                          htmlFor="jobType"
                          className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                        >
                          Looking for
                        </label>
                        <select
                          id="jobType"
                          name="jobType"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          // value={jobType}
                          // onChange={(e) => setJobType(e.target.value)}
                          required
                        >
                          <option value="" selected disabled hidden>
                            Choose here
                          </option>
                          <option>Intern</option>
                          <option>Full-Time</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2 w-full">
                        <label
                          htmlFor="locations"
                          className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                        >
                          College
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="locations"
                            id="locations"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-1 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Bengaluru , Hyderabad etc"
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="jobDescription"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                      >
                        Skills
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="jobDescription"
                          name="jobDescription"
                          rows={5}
                          className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          // value={jobDescription}
                          // onChange={(e) => setJobDescription(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="jobDescription"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                      >
                        About Yourself
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="jobDescription"
                          name="jobDescription"
                          rows={5}
                          className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          // onChange={handleChange}magnet:?xt=urn:btih:E598BCB5FE3D2C096085E0C066AE01AA75893DF3&dn=The.Night.Manager.India.S01.Complete.1080p.10Bit.WEBRip.DDP5.1.x265-HODL&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.bittor.pw%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="experienceRequired"
                          className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                        >
                          Current company
                        </label>
                        <div className="mt-1 grid grid-cols-2 gap-6">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="experienceRequired"
                          className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                        >
                          Linkedin
                        </label>
                        <div className="mt-1 grid grid-cols-2 gap-6">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                            // value={company}
                            // onChange={(e) => setCompany(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <FileUpload />
                    </div>

                    <div className="col-span-6 mt-5 mx-1 mb-2 max-w-full sm:col-span-3">
                      <label
                        htmlFor="graduationYear"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Graduatioon Year
                      </label>
                      <select
                        id="graduationYear"
                        name="graduationYear"
                        autoComplete="year-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        // value={graduationYear}
                        // onChange={(e) => setGraduationYear(e.target.value)}
                      >
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-5 bg-gray-50 border rounded-b-xl text-right sm:px-6">
                  {
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        {/* <Toaster /> */}
      </div>
      <Footer />
    </div>
  );
}
