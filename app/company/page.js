"use client";

import React, { useEffect } from "react";
import supabase from "../authCompany";
import { useRouter } from 'next/navigation'




const NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push('/')
      } else {
        // document.getElementById("info").innerHTML = user.email
        router.push("/dashboard");
      }
    };
    fetchUser();
  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    router.push('../')
  }

  return (
    <div>

      <button onClick={signOut}>Sign Out</button>
      <div id="info"></div>
    </div>
  );
};

export default NextPage;
