import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../App.css';
function PersonalInfo(){

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    streetAddressLine2: "",
    city:"",
    state: "",
    zipCode: "",
    email: ""
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate('BookingInfo')
  };
  
 const formHandler = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
 }

 return (
   <div className="formContainer">
      <form onSubmit={submitHandler}>
        <div className="Title">
        <h1>HOTEL GUEST REGISTRATION FORM</h1>
          </div>
          <div className="Title">
        <h2>PERSONAL INFORMATION</h2>
          </div>
          <div>
          <div className="label"><label >Name</label></div>
             <div >
               <input className="FName"
                       value={formData.firstName}
                       onChange={formHandler}
                       type="text"
                       name="firstName"
                       placeholder="First Name"
                       required
                     />
                   <input className="LName"
                       value={formData.lastName}
                       onChange={formHandler}
                       type="text"
                       name="lastName"
                       placeholder="Last Name"
                       required
                     />
                   </div>
                   </div>
                   
                   <div className="label"><label>Address</label></div>
                   <div>
                   <input className="Address"
                       value={formData.streetAddress}
                       onChange={formHandler}
                       type="text"
                       name="streetAddress"
                       placeholder="Street Address"
                       required
                     />
                   </div>
                   <div>
                   <input className="Address"
                       value={formData.streetAddressLine2}
                       onChange={formHandler}
                       type="text"
                       name="streetAddressLine2"
                       placeholder="Street Address Line 2"
                     />
                   </div>
                   <div>
                   <input className="city"
                       value={formData.city}
                       onChange={formHandler}
                       type="text"
                       name="city"
                       placeholder="City"
                       required
                     />
                     <input className="city"
                       value={formData.state}
                       onChange={formHandler}
                       type="text"
                       name="state"
                       placeholder="State"
                       required
                     />
                     <input className="zipcode"
                       value={formData.zipCode}
                       onChange={formHandler}
                       type="text"
                       name="zipCode"
                       placeholder="Zip Code"
                       required
                     />
                   </div>
                   
                   
                   <div className="label"><label>Email</label></div>
                <div >
                 <input className="Address"
                    value={formData.email}
                    onChange={formHandler}
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className="label"><label>Mobile Number</label></div>
                <div>
                
                 <input className="Address"
                    value={formData.mobilenumber}
                    onChange={formHandler}
                    type="Number"
                    name="mobilenumber"
                    placeholder="+91 8248365519"
                    required
                  />
                </div>
               
                
              <Button variant="secondary" className="mr-2 submitButton" type="submit" value="Submit">Next Page</Button>
          
              </form>
            </div>
           
       
  );
};

export default PersonalInfo;