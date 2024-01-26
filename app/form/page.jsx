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
          <form onSubmit={handleSubmit}>
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
