"use client";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import supabase from "@/app/authCompany";
import { useRouter } from "next/navigation";

const FileUpload = ({ userId }) => {
  const [cgpa, setcgpa] = useState();
  const [supabaseid, setSupabaseid] = useState();
  const [uploadedFile, setUploadedFile] = useState(null);
  const router = useRouter();

  const uploadCGPA = async () => {
    await fetch(`http://localhost:3000/api/applicants/${supabaseid}/cgpa`, {
      method: "PUT",
      body: JSON.stringify(cgpa),
    });
  };

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
      } else {
        setSupabaseid(user.id);
      }
    };
    fetchUser();
  }, []);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      const fileName = `${supabaseid}.pdf`;
      const { data, error } = await supabase.storage
        .from("resumes")
        .upload(`${fileName}`, file);

      if (error) {
        console.error("Error uploading file:", error.message);
      } else {
        setUploadedFile(data);
        alert("Resume Uploaded Successfully!");
        console.log("File uploaded successfully:", data);
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <input
        type="text"
        placeholder="CGPA"
        value={cgpa}
        onChange={(e) => {
          setcgpa(e.target.value);
        }}
      ></input>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag and drop a resume file here, or click to select a file</p>
      </div>
      <button
        onClick={() => {
          uploadCGPA();
          router.push("/student/dashboard");
        }}
      >
        Submit
      </button>
      {uploadedFile && (
        <div style={{ marginTop: "20px" }}>
          <p>File uploaded successfully:</p>
          <pre>{JSON.stringify(uploadedFile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
