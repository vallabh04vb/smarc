import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import colleges, { profession, professionOptions } from "./data/colleges";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

// import RegistrationPage from "./components/RegistrationPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigation,
  useNavigate,
} from "react-router-dom";

import RegisterNowSection from "./components/RegistrationPage"; // Adjust the path based on your file structure
// import Landingpg from "./components/Landingpg2";
import LandingPage from "./components/LandingPage";
import { GlobalContext } from "./context/GlobalContext";
import Payment from "./components/Payment";
import Workshop from "./components/Workshop";
import Culturals from "./components/Culturals";
import Scientific from "./components/Scientific";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Cancellations from "./components/Cancellations";

// const yearsOfStudy = [
//   { value: "2023", label: "2023" },
//   { value: "2022", label: "2022" },
//   { value: "2021", label: "2021" },
//   { value: "2020", label: "2020" },
//   { value: "2019", label: "2019" },
//   { value: "2018", label: "2018" },
//   { value: "2017", label: "2017" },
//   { value: "2016", label: "2016" },
//   { value: "2015", label: "2015" },
// ];

// const genders = [
//   { value: "M", label: "Male" },
//   { value: "F", label: "Female" },
//   { value: "O", label: "Other" },
// ];
 function App() {
//   const navigate = useNavigate();
//   const { profession, setProfession } = useContext(GlobalContext);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     college: null,
//     yearOfStudy: null,
//     gender: null,
//     dateOfBirth: "",
//     whatsappNumber: "",
//     profession: profession,
//     ip: "",
//     acceptTerms: true,
//   });

//   const getUserIP = async () => {
//     try {
//       const response = await axios.get("https://ipapi.co/json");
//       setFormData((prevData) => ({
//         ...prevData,
//         ip: response.data.ip,
//       }));
//     } catch (error) {
//       console.error("Error fetching the IP address:", error);
//     }
//   };

//   useEffect(() => {
//     getUserIP();
//   }, []);

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSelectChange = (newValue, actionMeta) => {
//     const { name } = actionMeta;
//     if (name) {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: newValue,
//       }));
//       if (name === "profession") {
//         console.log(newValue)
//         setProfession(newValue);
//       }
//     }
//     // console.log("handle Change: name and value", name, newValu)
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.checked,
//     });
//   };

//   const validateDateOfBirth = () => {
//     const { day, month, year } = formData;
//     if (!day || !month || !year) return false;
//     if (
//       day < 1 ||
//       day > 31 ||
//       month < 1 ||
//       month > 12 ||
//       year < 1900 ||
//       year > 2100
//     )
//       return false;

//     // Additional validation for days in month
//     const date = new Date(`${year}-${month}-${day}`);
//     return (
//       date.getDate() === parseInt(day, 10) &&
//       date.getMonth() + 1 === parseInt(month, 10) &&
//       date.getFullYear() === parseInt(year, 10)
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const dateOfBirth = `${formData.year}-${formData.month}-${formData.day}`;

//     if (!validateDateOfBirth()) {
//       setStatus(
//         "Invalid date of birth. Please check the values and try again."
//       );
//       return;
//     }
//     setStatus("Sending...");

//     // const res = await fetch('http://52.65.185.31:5005/api/contact', {
//     const res = await fetch("https://smarc2k24.online/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ...formData,
//         dateOfBirth,
//         college: formData.college ? formData.college.value : "",
//         yearOfStudy: formData.yearOfStudy ? formData.yearOfStudy.value : "",
//         gender: formData.gender ? formData.gender.value : "",
//       }),
//     });

//     const result = await res.json();
//     console.log(result);

//     if (res.ok) {
//       setStatus("Submitted successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         college: null,
//         yearOfStudy: null,
//         gender: null,
//         day: "",
//         month: "",
//         year: "",
//         // dateOfBirth: '',
//         whatsappNumber: "",
//         ip: "",
//         acceptTerms: false,
//       });
//     } else {
//       setStatus(`Error: ${result.message}`);
//     }
//   };

//   const handleForm = async (e) => {
//     //   router.push('/registration')
//     // router.location('/registration');
//     navigate("/registration");
//   };
  return (
    // <Router>
      <div>
      <Navbar />

        <Routes>
          <Route path="/registration" element={<RegisterNowSection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/culturals" element={<Culturals />} />
          <Route path="/scientific" element={<Scientific />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellations" element={<Cancellations />} />
          

          {/* Add other routes as needed */}
        </Routes>

      
      </div>
    // </Router>
  );
}

export default App;
