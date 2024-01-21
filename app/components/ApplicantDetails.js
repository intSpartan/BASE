import { useState, useEffect } from 'react';
import supabase from "../authCompany";
import { useRouter } from 'next/navigation';

export default function ApplicantDetails() {
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [company, setCompany] = useState('');
    const [cgpa, setCGPA] = useState('');

    const router = useRouter();

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
        // console.log('Submitted data:', { name, college, company, cgpa });
        if (!name) {
            alert("Maa Chuda");
            return;
        }

        try {
            await fetch("http://localhost:3000/api/applicants", {
                method: "POST",
                headers: {
                    "Content-type": "applications/json"
                },
                body: JSON.stringify({ name, college, company, cgpa, loginid }),

            });

            window.location.reload();
        }
        catch (e) { console.log(e); }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                College:
                <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
            </label>
            <br />
            <label>
                Company:
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </label>
            <br />
            <label>
                CGPA:
                <input type="text" value={cgpa} onChange={(e) => setCGPA(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
