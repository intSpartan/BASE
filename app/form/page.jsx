// pages/FormPage.js
"use client";
import { useState, useEffect } from "react";
import supabase from "../authCompany";
import { useRouter } from "next/navigation";
import CompanyForm from "../components/CompanyForm";
import Footer from "../student/components/footer";

const Preloader = () => {
  return <div>Loading....</div>;
};

const getCompany = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/company/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return await res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const FormPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [curr_state, setCurr_State] = useState("");
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(true);
  const [companyid, setCompId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
      } else {
        setCompId(user.id);
        const comp = await getCompany(user.id);
        console.log(comp);
        setStatus(comp == null);
        setLoading(!loading);
      }
    };
    fetchUser();
  }, []);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !companyid) {
      alert("Maa Chuda");
      return;
    }

    try {
      await fetch("http://localhost:3000/api/jobs", {
        method: "POST",
        headers: {
          "Content-type": "applications/json",
        },
        body: JSON.stringify({ title, description, companyid, curr_state }),
      });

      router.push("/company/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <Preloader />;
  }

  // try {
  // if (!status) {
  return (
    <div>
      {/* <RemovableImg src={'/sambhav.jpg'} /> */}
      <div className='max-w-7xl mx-auto'>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg mx-7 mt-7 font-medium leading-6 text-gray-900">Job Profile</h3>
              <p className="mt-1 mx-7 text-sm text-gray-600">
                This information will be displayed publicly to all the applicants
              </p>
            </div>
          </div>
          <div className="mt-5 mr-5 md:col-span-2">
            <form action='#' method='POST'>
              <div className="shadow-md rounded-t-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                      Title
                    </label>
                    <div className='mt-1 grid grid-cols-2 gap-6'>
                      <input
                        type="text"
                        id='firstName'
                        name="firstName"
                        placeholder='First Name'
                        className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-1 grid grid-cols-2 gap-6">
                    <div className='mb-2 max-w-full sm:col-span-1'>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                        Job Type
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      >
                        <option value="" selected disabled hidden>Choose here</option>
                        <option>Intern</option>
                        <option>Full Time</option>
                      </select>
                    </div>
                    <div className='mb-2 max-w-full sm:col-span-1'>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                        Role
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      >
                        <option value="" selected disabled hidden>Choose here</option>
                        <option>SDE</option>
                        <option>Data Scientist</option>
                        <option>Security Engineer</option>
                        <option>Dev-ops Engineer</option>
                        <option>Cloud Engineer</option>
                      </select>
                    </div>

                    <div className='mb-2 max-w-full sm:col-span-1'>
                      <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                        Stipend / Salary
                      </label>
                      <input
                        type="text"
                        id="rollNumber"
                        name="rollNumber"
                        placeholder="100000 rupees"
                        className="mt-1 inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2 w-full">
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                        Locations
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-1 rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Bengaluru , Hyderabad etc"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                      Job Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={5}
                        className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={''}
                        required
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. Do list your achievements here.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                      Skills Required
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="tags"
                        name="tags"
                        rows={4}
                        className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder={`Javascript\nAWS\nLinux\n...`}
                        defaultValue={''}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                       Educational Qualifications Required
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="tags"
                        name="tags"
                        rows={4}
                        className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder={`Javascript\nAWS\nLinux\n...`}
                        defaultValue={''}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                        Experience Required ( in years )
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-1 rounded-none rounded-r-md sm:text-sm border-gray-700"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700">
                        LinkedIn Profile
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          https://www.linkedin.com/in/
                        </span>
                        <input
                          type="text"
                          name="linkedinProfile"
                          id="linkedinProfile"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-1 rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="first-last-12345"
                        />
                      </div>
                    </div>
                  </div> */}

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                        Starting Date
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 rounded-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                        Ending Date
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 rounded-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">Your photos gallery</label>
                    <div className="dropbox my-2 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="dropbox-description-container space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true" > <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </svg>
                        <div className="text-sm max-w-full text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload photos</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple required />
                          </label>
                          <p className="text-xs text-gray-500">Photos don&apos;t need to be formal, but keep in mind that they are <strong>public</strong></p>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-span-6 mt-5 mx-1 max-w-full sm:col-span-3">
                    <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                      Branch
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      autoComplete="branch-name"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Information Technology</option>
                      <option>Computer Science</option>
                      <option>Computer Science & Artificial Intelligence</option>
                      <option>Computer Science & Business</option>
                    </select>
                  </div> */}

                  <div className='col-span-6 mt-5 mx-1 mb-2 max-w-full sm:col-span-3'>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                      Year of Graduation Required
                    </label>
                    <select
                      id="year"
                      name="year"
                      autoComplete="year-name"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                {<button
                  type="submit"

                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>}

              </div>

            </form>
          </div>
        </div>
      </div >

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      {/* <Toaster /> */}

    </div >
  );
  //   } else {
  //     return <CompanyForm companyId={companyid} />;
  //   }
  // } catch (e) {
  //   console.log(e);
  // }
};

export default FormPage;
