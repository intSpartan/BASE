import React from 'react'
import { useRouter } from "next/navigation";

const CompanyForm = (companyId) => {

  const router = useRouter()

  const [formData, setFormData] = React.useState(
    { CompanyName: "", linkedin: "", website: "", description: "", logo: null }
  )


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlelogoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      logo: file
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const obj2 = {
        companyId: companyId.companyId,
        companyName: formData.CompanyName,
        description: formData.description,
        linkedin: formData.linkedin,
        website: formData.website
      }
      // console.log(companyId.companyId)
      // setFormData({
      //   ...formData,
      //   [companyId]: companyId.companyId
      // })

      await fetch("http://localhost:3000/api/company", {
        method: "POST",
        headers: {
          "Content-type": "applications/json",
        },
        body: JSON.stringify(obj2),
      });
      alert("Details added")
      router.push("/company/dashboard");
    } catch (e) {
      console.log(e);
    }
    // console.log(body);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="CompanyName">Company name:
        <input
          type="text"
          //    placeholder='Company Name'
          onChange={handleChange}
          name='CompanyName'
          required

        /></label>
      <br />
      <label>
        LinkedIn Link:
        <input
          type="text"
          //    placeholder='Linkedin'
          onChange={handleChange}
          name='linkedin'
          required
        />
      </label>
      <br />
      <label>
        Website Link:
        <input
          type="text"
          //    placeholder='Linkedin'
          onChange={handleChange}
          name='website'
          required

        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Logo Image:
        <input
          type="file"
          accept="image/*"
          onChange={handlelogoChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>



    </form>
  )
}

export default CompanyForm