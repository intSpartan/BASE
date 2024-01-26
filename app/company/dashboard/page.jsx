// components/Sidebar.js

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import supabase from "../../authCompany";

const Dashboard = () => {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("../");
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const companyID = searchParams.get("id");

  return (
    <div className="sidebar">
      <div>
        <ul>
          <li>
            {" "}
            <Link href="/form">
              {" "}
              <button>
                <font color="black"> Add </font>
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/joblist">
              <button>
                <font color="black"> Active</font>
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/closedjobs">
              {" "}
              <button>
                <font color="black"> Closed </font>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Dashboard;
