import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "../homepage/header";
import { useGlobalContext } from "@/app/GlobalContext";

const CompanyForm = (companyId) => {

  const [linkedin, setLinkedin] = useState("");
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
  const router = useRouter();

  const state = useGlobalContext();
  const [formData, setFormData] = React.useState({
    CompanyName: "",
    linkedin: "",
    website: "",
    description: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlelogoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      logo: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const obj2 = {
        companyId: state.state.entity_id,
        companyName: formData.CompanyName,
        description: jobDescription,
        linkedin: formData.linkedin,
        website: formData.website,
      };

      // console.log(obj2);

      await fetch("http://localhost:3000/api/company", {
        method: "POST",
        headers: {
          "Content-type": "applications/json",
        },
        body: JSON.stringify(obj2),
      });
      alert("Details added");
      location.reload();
    } catch (e) {
      console.log(e);
    }
  };




  return (
    <div>
      <Header />
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="CompanyName">
          Company name:
          <input
            type="text"
            onChange={handleChange}
            name="CompanyName"
            required
          />
        </label>
        <br />
        <label>
          LinkedIn Link:
          <input type="text" onChange={handleChange} name="linkedin" required />
        </label>
        <br />
        <label>
          Website Link:
          <input type="text" onChange={handleChange} name="website" required />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Logo Image:
          <input type="file" accept="image/*" onChange={handlelogoChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form> */}



      <div className="bg-gray-300">
        <div className='max-w-7xl mx-auto'>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 mt-[100px]">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg mx-7 mt-7 font-medium leading-6 text-gray-900">Company Profile</h3>
                <p className="mt-1 mx-7 text-sm text-gray-600">
                  This information will be displayed publicly to all the applicants
                </p>
              </div>
            </div>
            <div className="mt-5 mr-5 md:col-span-2 mt-[100px]">
              <form onSubmit={handleSubmit}>
                <div className="shadow-md rounded-t-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                        Company name
                      </label>
                      <div className='mt-1 grid grid-cols-2 gap-6'>
                        <input className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                          type="text"
                          onChange={handleChange}
                          name="CompanyName"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-1 grid grid-cols-2 gap-6">
                      <div className='mb-2 max-w-full sm:col-span-1'>
                        <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                          Company Type
                        </label>
                        <select
                          id="jobType"
                          name="jobType"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={jobType}
                          onChange={(e) => setJobType(e.target.value)}
                          required
                        >
                          <option value="" selected disabled hidden>Choose here</option>
                          <option>Indian</option>
                          <option>International</option>
                        </select>
                      </div>
                      <div className='mb-2 max-w-full sm:col-span-1'>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                          job Roles Offered
                        </label>
                        <select
                          id="role"
                          name="role"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
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


                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2 w-full">
                        <label htmlFor="locations" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
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
                      <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                        Description
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
                    </div>
                    <div>
                      <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                        Goals and Ambitions
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="jobDescription"
                          name="jobDescription"
                          rows={5}
                          className="placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="experienceRequired" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                          Linkedin Profile
                        </label>
                        <div className='mt-1 grid grid-cols-2 gap-6'>
                          <input
                            type="text"
                            id='firstName'
                            name="firstName"
                            className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="experienceRequired" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">
                          Company Website
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            name="experienceRequired"
                            id="experienceRequired"
                            className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                            // value={experienceRequired}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>



                    <div className='col-span-6 mt-5 mx-1 mb-2 max-w-full sm:col-span-3'>
                      <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
                        Foundation Year
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

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="experienceRequired" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-pink-500">

                          <label>
                            Logo Image:
                            <input type="file" accept="image/*" onChange={handlelogoChange} />
                          </label>
                        </label>
                      </div>
                    </div>

                  </div>
                </div>


                <div className="px-4 py-5 bg-gray-50 border rounded-b-xl text-right sm:px-6">
                  {<button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
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
      <Footer />

    </div>
  );
};

export default CompanyForm;
