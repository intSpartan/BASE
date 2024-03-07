import { useState } from "react";
import supabase from "../authCompany";
import StudentSignIn from "./studentSignIn";


export default function StudentSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentname, setStudentName] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            role: "student",
            username: username,
          },
          emailRedirectTo: "http://localhost:3000/student/dashboard",
        },
      });

      if (error) {
        console.error("Error signing up:", error.message);
        alert("Error signing up");
      } else {
        alert("Signup successful");
        console.log(user);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>Email:</label>
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

        <label>Student Name:</label>
        <input
          type="text"
          value={studentname}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}
