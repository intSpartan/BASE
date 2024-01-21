// components/Sidebar.js

"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'



const Dashboard = () => {


    const searchParams = useSearchParams()

    const compId = searchParams.get('id')



    // console.log(compId);


    return (
        <div className="sidebar">
            <ul>
                <li> <Link href="/form"> <button><font color="black"> Add </font></button></Link></li>
                <li> <Link href="/joblist"><button><font color="black"> Active</font></button></Link></li>
                <li> <Link href="/closedjobs"> <button><font color="black"> Closed </font></button></Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;
