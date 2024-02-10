import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'


const updateOAList = async (applicant_id, jobId) => {
    // console.log(applicant_id);
    const res_jobs = await fetch(`http://localhost:3000/api/jobs/${jobId}/OA_selection`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ candidate_id: applicant_id }),
    });
}

const ApplicantApplied = ({ ...props }) => {

    const params = useParams()
    const { jobId } = params;
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const getApplicant = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/jobs/${props.jobId}`, {
                    method: "GET",
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch topics");
                }

                const job = await res.json();

                const applicantsData = [];

                for (const id of job.job.applicantsApplied) {
                    const response = await fetch(`http://localhost:3000/api/applicants/${id}`, {
                        cache: "no-store",
                    });

                    if (!response.ok) {
                        console.error(`Failed to fetsch applicant with ID ${id}`);
                        continue;
                    }

                    const applicant = await response.json();
                    applicantsData.push(applicant);
                }

                setApplicants(applicantsData);
                console.log(applicantsData);
            } catch (error) {
                console.log("Error loading topics: ", error);
            }
        };

        getApplicant();
    }, [props.jobId]);

    // console.log(props.functionality);

    const handleApplication = async (applicant_id) => {
        if (props.functionality === "Shortlist") {

        }
        if (props.functionality === "Send OA") {
            // console.log(applicant_id);
            const res = await updateOAList(applicant_id, jobId);
            // console.log(res);
            // alert("OA sent successfully")
        }
        
    }

    return (
        <div>
            <>
                {applicants.map((t) => (
                    <>
                        <div
                            className="p-4 border border-slate-300 my-3 flex justify-between items-start rounded-md"
                        >
                            <div>
                                <h2 className="text-2xl">{t.applicants.name}</h2>
                            </div>
                        </div>
                        <div>
                            <p>{t.applicants._id}</p>
                        </div>
                        <div>
                            <p>{t.applicants.college}</p>
                        </div>
                        <div>
                            <p>{t.applicants.cgpa}</p>
                        </div>
                        <div>
                            <button onClick={() => handleApplication(t.applicants._id)}>{props.functionality}</button>
                        </div>
                    </>
                ))}
            </>
        </div>
    )
}

export default ApplicantApplied;