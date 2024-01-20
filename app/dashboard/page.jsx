// components/Sidebar.js

"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import supabase from "../authCompany";


const Dashboard = () => {


    const searchParams = useSearchParams()

    const compId = searchParams.get('id')



    // console.log(compId);


    return (
        <div className="sidebar">
            <ul>
                <li> <Link href={`/form?id=/${compId}`}> <button><font color="black"> Add </font></button></Link></li>
                <li> <Link href={`/joblist?id=/${compId}`}><button><font color="black"> Active</font></button></Link></li>
                <li> <button><font color="black"> Closed</font></button></li>
            </ul>
        </div>
    );
};

export default Dashboard;
