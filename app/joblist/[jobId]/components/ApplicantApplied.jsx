import React, { useEffect, useState } from 'react'

const ApplicantApplied = (props) => {

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
                        console.error(`Failed to fetch applicant with ID ${id}`);
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
                    </>
                ))}
            </>
        </div>
    )
}

export default ApplicantApplied;