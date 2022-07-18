import {React} from "react";
import '../App.css';

function SuccessMessage(){
  return(
    <>
    <div className="successPage">
     <div className="MessageBox">
       <h1 className="successTitle">YOUR SUBMISSION HAS BEEN SUCCESSFUL!!</h1>
       <p className="successBody">Thank you, We have received your submission and We will contact you soon.</p>
      </div> 
    </div>
    </>
  )
}

export default SuccessMessage;