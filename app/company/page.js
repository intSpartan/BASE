"use client";

import React, { useEffect } from "react";
import supabase from "../authCompany";

async function signOut() {
  const { error } = await supabase.auth.signOut();
  window.location.href='/'
}

const NextPage = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        alert("Not Authorised!");
        window.location = "/";
      } else {
        document.getElementById("info").innerHTML = user.email
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
      <div id="info"></div>
    </div>
  );
};

export default NextPage;
