// components/Sidebar.js

"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import supabase from "../../authCompany";


const Dashboard = () => {

    return (
        <div className="sidebar">Student Dashboard</div>
    );
};

export default Dashboard;
