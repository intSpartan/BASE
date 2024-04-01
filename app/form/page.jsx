// pages/FormPage.js
"use client";
import { useState, useEffect } from "react";
import supabase from "../authCompany";
import { useRouter } from "next/navigation";
import CompanyForm from "../components/CompanyForm";

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

  try {
    if (!status) {
      return (
        <div>
          <h1>Form Page</h1>
          {/* <form onSubmit={handleSubmit}>
            <label>
              Title
              <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <br />
            <label>
              Job Description
              <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </label>
            <br />
            <label>
              State
              <input
                type="text"
                name="curr_state"
                onChange={(e) => setCurr_State(e.target.value)}
                value={curr_state}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form> */}
          <form onSubmit={handleSubmit}>
            <div className="w-[609px] h-[534px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-[150px] h-[150px] relative">
                <div className="w-[150px] h-[150px] left-0 top-0 absolute bg-white rounded-lg border border-neutral-200" />
                <div className="w-[79px] h-[76px] left-[36px] top-[37px] absolute flex-col justify-start items-center gap-1 inline-flex">
                  <div className="w-12 h-12 relative">
                    <div className="w-12 h-12 left-0 top-0 absolute bg-neutral-200 rounded-full" />
                    <div className="w-8 h-8 p-0.5 left-[8px] top-[8px] absolute justify-center items-center inline-flex" />
                  </div>
                  <div className="w-[79px] text-center text-neutral-200 text-sm font-semibold font-['Inter'] leading-normal">Add photo</div>
                </div>
              </div>
              <div className="w-[609px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 inline-flex">
                <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed"> <label>
                  Title
                  <input
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </label></div>
              </div>
              <div className="justify-start items-start gap-[9px] inline-flex">
                <div className="w-[300px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 flex">
                  <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed"> <label>
                    Job Description
                    <input
                      type="text"
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </label></div>
                </div>
                <div className="w-[300px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 flex">
                  <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed"><label>
                    State
                    <input
                      type="text"
                      name="curr_state"
                      onChange={(e) => setCurr_State(e.target.value)}
                      value={curr_state}
                    />
                  </label></div>
                </div>
              </div>
              <div className="justify-start items-start gap-[9px] inline-flex">
                <div className="w-[300px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 flex">
                  <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed">Duration</div>
                </div>
                <div className="w-[300px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 flex">
                  <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed">Eligibilty</div>
                </div>
              </div>
              <div className="justify-start items-start gap-[9px] inline-flex">
                <div className="w-[300px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 flex">
                  <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed">Selection</div>
                </div>
                <div className="w-[300px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 flex">
                  <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed">Placement</div>
                </div>
              </div>
              <div className="justify-start items-start gap-[9px] inline-flex">
                <div className="w-[300px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 flex">
                  <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed">Seats Available</div>
                </div>
                <div className="w-[300px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 flex">
                  <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed">Average Package</div>
                </div>
              </div>
              <div className="w-[609px] h-[52px] p-2.5 border-b border-zinc-400 justify-start items-center gap-5 inline-flex">
                <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-relaxed">Infrastructure</div>
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
    } else {
      return <CompanyForm companyId={companyid} />;
    }
  } catch (e) {
    console.log(e);
  }
};

export default FormPage;
