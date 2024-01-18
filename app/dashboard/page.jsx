// components/Sidebar.js

"use client"

import React, { useState } from 'react';
import Link from 'next/link'

const Sidebar = () => {


    return (
        <div className="sidebar">
            <ul>
                <li> <Link href="/form"> <button><font color="black"> Add </font></button></Link></li>
                <li> <Link href="/joblist"><button><font color="black"> Active</font></button></Link></li>
                <li> <button><font color="black"> Closed</font></button></li>
            </ul>
        </div>
    );
};

export default Sidebar;
