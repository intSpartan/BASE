"use client";

import supabase from "../authCompany";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center my-auto h-[550px]">
      <div className="border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
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
  const [jobType, setJobType] = useState("");
  const [role, setRole] = useState("");
  const [stipendSalary, setStipendSalary] = useState("");
  const [locations, setLocations] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [eduQualifications, setEduQualifications] = useState("");
  const [experienceRequired, setExperienceRequired] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(true);
  const [companyid, setCompId] = useState(null);
  const [companyName, setCompanyName] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
      } else {
        setCompId(user.id);
        const comp = await getCompany(user.id);
        if (comp != undefined) {
          setCompanyName(comp.company.companyName);
        }
        setStatus(comp == null);
        setLoading(!loading);
      }
    };
    fetchUser();

    const fetchCompany = async () => {
      if (companyid) {
        console.log(companyid);
        const res = await fetch(
          `http://localhost:3000/api/company/${companyid}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        } else {
          const companyData = await res.json();
          console.log(companyData);
          setCompanyName(companyData.companyName);
        }
      }
    };
    fetchCompany();
  }, []);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/jobs", {
        method: "POST",
        headers: {
          "Content-type": "applications/json",
        },
        body: JSON.stringify({
          title,
          description,
          jobType,
          role,
          stipendSalary,
          locations,
          jobDescription,
          skillsRequired,
          eduQualifications,
          experienceRequired,
          startingDate,
          endingDate,
          graduationYear,
          companyid,
          companyName,
        }),
      });

      alert("Job Added");
      router.push("/company/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <Preloader />;
  }
  return (
    <div className="">
      <div className="max-w-7xl mx-auto ">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg mx-7 mt-7 font-medium leading-6 text-gray-900">
                Job Profile
              </h3>
              <p className="mt-1 mx-7 text-sm text-gray-600">
                This information will be displayed publicly to all the
                applicants
              </p>
            </div>
          </div>
          <div className="mt-5 mr-5 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow-md rounded-t-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                    >
                      Title
                    </label>
                    <div className="mt-1 grid grid-cols-2 gap-6">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        Job Type
                      </label>
                      <select
                        id="jobType"
                        name="jobType"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        required
                      >
                        <option value="">Choose here</option>
                        <option>Intern</option>
                        <option>Full Time</option>
                      </select>
                    </div>
                    <div className="mb-2 max-w-full sm:col-span-1">
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                      >
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                      >
                        <option value="">Choose here</option>
                        <option>SDE</option>
                        <option>Data Scientist</option>
                        <option>Security Engineer</option>
                        <option>Dev-ops Engineer</option>
                        <option>Cloud Engineer</option>
                      </select>
                    </div>

                    <div className="mb-2 max-w-full sm:col-span-1">
                      <label
                        htmlFor="stipendSalary"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                      >
                        Stipend / Salary
                      </label>
                      <input
                        type="text"
                        id="stipendSalary"
                        name="stipendSalary"
                        placeholder="100000 rupees"
                        className="mt-1 inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                        value={stipendSalary}
                        onChange={(e) => setStipendSalary(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2 w-full">
                      <label
                        htmlFor="locations"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                      >
                        Locations
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="locations"
                          id="locations"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-1 rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Bengaluru , Hyderabad etc"
                          value={locations}
                          onChange={(e) => setLocations(e.target.value)}
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
                      Job Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="jobDescription"
                        name="jobDescription"
                        rows={5}
                        className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. Do list your
                      achievements here.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="skillsRequired"
                      className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                    >
                      Skills Required
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="skillsRequired"
                        name="skillsRequired"
                        rows={4}
                        className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder={`Javascript\nAWS\nLinux\n...`}
                        value={skillsRequired}
                        onChange={(e) => setSkillsRequired(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="eduQualifications"
                      className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500"
                    >
                      Educational Qualifications Required
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="eduQualifications"
                        name="eduQualifications"
                        rows={4}
                        className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder={`Javascript\nAWS\nLinux\n...`}
                        value={eduQualifications}
                        onChange={(e) => setEduQualifications(e.target.value)}
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
                        Experience Required ( in years )
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          name="experienceRequired"
                          id="experienceRequired"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-1 rounded-none rounded-r-md sm:text-sm border-gray-700"
                          value={experienceRequired}
                          onChange={(e) =>
                            setExperienceRequired(e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="startingDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Starting Date
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="date"
                          name="startingDate"
                          id="startingDate"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 rounded-md sm:text-sm border-gray-300"
                          value={startingDate}
                          onChange={(e) => setStartingDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="endingDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ending Date
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="date"
                          name="endingDate"
                          id="endingDate"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 rounded-md sm:text-sm border-gray-300"
                          value={endingDate}
                          onChange={(e) => setEndingDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 mt-5 mx-1 mb-2 max-w-full sm:col-span-3">
                    <label
                      htmlFor="graduationYear"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Year of Graduation Required
                    </label>
                    <select
                      id="graduationYear"
                      name="graduationYear"
                      autoComplete="year-name"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={graduationYear}
                      onChange={(e) => setGraduationYear(e.target.value)}
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
                    Save
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
    </div>
  );
};

export default FormPage;
