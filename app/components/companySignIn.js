"use client";
import { useState } from "react";
import supabase from "./../authCompany";
import { useRouter } from "next/navigation";

export default function CompanySignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log(supabase);
      alert(error.message);
    } else {
      console.log(supabase);
      router.push("/company");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>Email:</label>
      <form action={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
