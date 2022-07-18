import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../App.css';

function SpecialRequirement(){

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    wifi: "",
    shuttleService: "",
    notes: ""
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate('/SuccessMessage')
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
        <h2>SPECIAL REQUIREMENTS</h2>
          </div>
         <div>
                <div className="labelOp"><label>Lease Pocket Wifi $5</label></div>
                <div>
                
                  <div>
                  <input
                    value="Yes"
                    onChange={formHandler}
                    type="radio"
                    name="wifi"
                    id="op1"
                    
                  />
                  <label className="option" for="op1">Yes</label>
                  </div>
                  <div>
                  <input
                    value="No"
                    onChange={formHandler}
                    type="radio"
                    name="wifi"
                    id="op2"
                  />
                  <label className="option" for="op2">No</label>
                  </div>
               
                </div>
                </div>
                <div>
                  <div className="labelOp"><label>Free Shuttle Service</label></div>
                
                  <div>
                  <input
                    value="Yes"
                    onChange={formHandler}
                    type="radio"
                    name="shuttleService"
                    id="op11"
                  />
                  <label className="option" for="op11">Yes</label>
                  </div>
                  <div>
                  <input
                    value="No"
                    onChange={formHandler}
                    type="radio"
                    name="shuttleService"
                    id="op12"
                  />
                  <label className="option" for="op12">No</label>
                  </div>
               
                </div>
                <div >
                  <div className="label">
        <label>Notes/Special requirements</label></div>
        <textarea className="txtArea"
         rows="10" 
          value={formData.notes}
          onChange={formHandler}
          name= "notes"
        
        />
      </div >
      <div className="infoTxt">
          <p>The submission of this form makes a reservation for the type of room selected in the form. Any changes prior the scheduled occupancy should be communicated to us at least 24 hours prior, which may be subject to availability of request.</p>
          <p>Check-in time shall be at 2:00PM and checkout time shall be at 12:00NN.</p> </div>
          <Button variant="secondary" className="mr-2 submitButton" onClick={() => navigate(-1)}>Previous Page</Button>
          <Button variant="secondary" className="mr-2 submitButton" type="submit" value="Submit">Submit</Button>
              </form>
            </div>
           
       
  );
};

export default SpecialRequirement;