import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../App.css';
function BookingInfo(){

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkindate:"",
    checkoutdate:"",
    guestCount: "",
    roomType: ""
   
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate('/SpecialRequirement')
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
        <h2>BOOKING INFORMATION</h2>
          </div>
          <div>
          <div className="label"><label>Check-in Date</label></div>
                    <input className="Address"
                    type="date" 
                    name="checkindate" 
                    value={formData.checkindate} 
                    onChange={formHandler}  
                    required/>
                  <div className="label"><label>Check-out Date</label></div>
                    <input className="Address"
                    type="date" 
                    name="checkoutdate"
                    value={formData.checkoutdate} 
                    onChange={formHandler} 
                    required/>
                </div>
               
                <div className="label"><label>Number of Guests in Room</label></div>
                <div>
                
                 <input className="Address"
                    value={formData.guestCount}
                    onChange={formHandler}
                    type="Number"
                    name="guestCount"
                    placeholder="Guest Count"
                    required
                  />
                </div> 
                <div className="label"><label>Room Type</label></div>
                <div>
                  <select className="Address"
                    name="roomType"
                    value={formData.roomType}
                    onChange={formHandler}
                    required
                  >
                    <option>Select a Room Type</option>
                    <option value="Single $100">Single $100</option>
                    <option value="Double $150">Double $150</option>
                    <option value="Queen $200">Queen $200</option>
                    <option value="King $250">King $250</option>
                    <option value="2-Bedroom $350">2-Bedroom $350</option>
                    <option value="Suite $500">Suite $500</option>
                  </select>
                  </div>
                
          <Button variant="secondary" className="mr-2 submitButton" onClick={() => navigate(-1)}>Previous Page</Button>
          <Button variant="secondary" className="mr-2 submitButton" type="submit" value="Submit" >Next Page</Button>
              </form>
            </div>
           
       
  );
};

export default BookingInfo;