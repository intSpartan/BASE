import React from 'react'


const CompanyForm = () => {
    const [formData, setFormData] = React.useState(
        {CompanyName: "", linkedin: "",description:"",picture: null}
    )
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        setFormData({
          ...formData,
          picture: file
        });
      };
   return (
    <form>
        <label for="CompanyName">Company name:
        <input 
           type="text"
        //    placeholder='Company Name'
           onChange={handleChange}
           name='CompanyName'
        
        /></label>
         <br />
      <label>
        LinkedIn Link: 
        <input 
           type="text"
        //    placeholder='Linkedin'
           onChange={handleChange}
           name='linkedin'
        
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
        
        />
        </label>
        <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Logo Image:
        <input
          type="file"
          accept="image/*"  
          onChange={handlePictureChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    


    </form>
  )
}

export default CompanyForm