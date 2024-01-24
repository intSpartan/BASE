// pages/FormPage.js
"use client";
import { useState, useEffect } from "react";
import supabase from "../authCompany";
import { useRouter } from "next/navigation";
import CompanyForm from "../components/CompanyForm";
// import axios from axios

// requiremnets/skills , tags , your responsibilities , tenure


const Preloader = () => {
    return (
        <div>
            Loading....
        </div>
    )
}

const FormPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [curr_state, setCurr_State] = useState("");
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(true)
    const [companyid, setCompId] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (!user) {
            } else {
                setCompId(user.id);
                let statusCode = await statusCheck(user.id).then((status) => {
                    console.log("Response status:", status);
                    return status
                })
                    .catch((error) => {
                        console.error("Error in statusCheck:", error);
                    });
                console.log(statusCode)
                setStatus(statusCode)
                setLoading(!loading)
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
        // console.log(body);
    };

    async function statusCheck(id) {
        const url = `http://localhost:3000/api/company/${id}`;

        try {
            const response = await fetch(url, {
                method: "GET",
            });

            console.log("c: " + id);

            if (response.ok) {
                return response.status;
            } else {
                console.error("Fetch error:", response.statusText);
                return -1;
            }
        } catch (error) {
            console.error("Error during fetch:", error.message);
            return -1;
        }

    }

    if (loading) {
        return <Preloader />
    }

    try {

        if (status == 200) {
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
