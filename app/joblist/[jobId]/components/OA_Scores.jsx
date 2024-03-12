'use client'

import React, { useEffect, useState } from 'react';

const OA_Scores = (props) => {
    const [jobInfo, setJobInfo] = useState();
    const [OAResult, setOAResult] = useState([]);

    useEffect(() => {
        const getJob = async (jobId) => {
            try {
                const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
                    method: "GET",
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch topics");
                }

                const job = await res.json();
                setJobInfo(job);
                if (job) {
                    setOAResult(job.job.OA_scores);
                }

            } catch (error) {
                console.log("Error loading topics: ", error);
            }
        };
        getJob(props.jobId);
    }, [props.jobId]);

    console.log(OAResult);

    return (
        <div>
            {!OAResult ? <>Loading...</> : (
                <>
                    <>Hello</>
                    {OAResult.map((t) => (
                        <div key={t._id}>
                            <div>{t._id}</div>
                            <div>{t.score}</div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default OA_Scores;
