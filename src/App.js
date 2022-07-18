import {Routes,Route} from "react-router-dom";
import './App.css';
import PersonalInfo from "./Form/PersonalInfo";
import BookingInfo from "./Form/BookingInfo";
import SpecialRequirement from "./Form/SpecialRequirement";
import SuccessMessage from "./Form/SuccessMessage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PersonalInfo/>}/>
        <Route path="BookingInfo" element={<BookingInfo/>}/>
        <Route path="SpecialRequirement" element={<SpecialRequirement/>}/>
        <Route path="SuccessMessage" element={<SuccessMessage/>}/>
      </Routes>
    </div>
  );
}

export default App;
