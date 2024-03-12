'use client'

import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../../GlobalContext';
import { useRouter } from "next/navigation";
const OA = () => {

    const state = useGlobalContext();
    const router = useRouter();
    const [OA_List, setOA_List] = useState([]);


    useEffect(() => {
        if (state != undefined) {
            const getApplicant = async () => {
                try {
                    const res = await fetch(
                        `http://localhost:3000/api/applicants/${state.state.entity_id}/OA_List`,
                        {
                            method: "GET",
                            cache: "no-store",
                        }
                    );

                    if (!res.ok) {
                        throw new Error("Failed to fetch topics");
                    }
                    else {
                        // console.log((await res.json()).applicant.cgpa);
                        setOA_List((await res.json()).applicant.OA_list)
                    }
                } catch (error) {
                    console.log("Error loading topics: ", error);
                }
            };

            getApplicant();
        }
    }, [state]);

    console.log(OA_List);
    const handleOA = (jobId) => {
        router.push(`/OA/${jobId}`);
    };

    return (
        (state != undefined) && <div>
            {OA_List.map((t) => (<><div>{t}</div>
                <button onClick={() => handleOA(t)}>OA</button></>))};
        </div>
    )
}

export default OA
