"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import CompanyForm from "../../components/CompanyForm";

const NextPage = () => {
    return (
        <div>
            <CompanyForm></CompanyForm>
        </div>
    );
};

export default NextPage;
