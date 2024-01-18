// pages/FormPage.js
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// requiremnets/skills , tags , your responsibilities , tenure

const FormPage = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [companyid, setcompanyid] = useState("");

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Maa Chuda");
            return;
        }

        try {
            await fetch("http://localhost:3000/api/jobs", {
                method: "POST",
                headers: {
                    "Content-type": "applications/json"
                },
                body: JSON.stringify({ title, description }),

            });

            router.push("/dashboard");
        }
        catch (e) { console.log(e); }
    };

    return (
        <div>
            <h1>Form Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </label>
                <br />
                <label>
                    Job Descriptiom
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                </label>
                {/* <label>
                    CompanyID
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                </label> */}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
