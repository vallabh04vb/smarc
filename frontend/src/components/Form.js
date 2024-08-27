import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import colleges, { professionOptions } from "../data/colleges";

// import RegistrationPage from "./components/RegistrationPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigation,
  useNavigate,
} from "react-router-dom";

// import Landingpg from "./components/Landingpg2";

import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const Form = () => {
  const yearsOfStudy = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
  ];

  const genders = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
    { value: "O", label: "Other" },
  ];

  const navigate = useNavigate();
  const { profession, setProfession } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: null,
    yearOfStudy: null,
    gender: null,
    dateOfBirth: "",
    whatsappNumber: "",
    profession: profession,
    ip: "",
    acceptTerms: true,
  });

  const getUserIP = async () => {
    try {
      const response = await axios.get("https://ipapi.co/json");
      setFormData((prevData) => ({
        ...prevData,
        ip: response.data.ip,
      }));
    } catch (error) {
      console.error("Error fetching the IP address:", error);
    }
  };

  useEffect(() => {
    getUserIP();
  }, []);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (newValue, actionMeta) => {
    const { name } = actionMeta;
    if (name) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: newValue,
      }));
      if (name === "profession") {
        console.log(newValue);
        setProfession(newValue);
      }
    }
    // console.log("handle Change: name and value", name, newValu)
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const validateDateOfBirth = () => {
    const { day, month, year } = formData;
    if (!day || !month || !year) return false;
    if (
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year < 1900 ||
      year > 2100
    )
      return false;

    // Additional validation for days in month
    const date = new Date(`${year}-${month}-${day}`);
    return (
      date.getDate() === parseInt(day, 10) &&
      date.getMonth() + 1 === parseInt(month, 10) &&
      date.getFullYear() === parseInt(year, 10)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateOfBirth = `${formData.year}-${formData.month}-${formData.day}`;

    if (!validateDateOfBirth()) {
      setStatus(
        "Invalid date of birth. Please check the values and try again."
      );
      return;
    }
    setStatus("Sending...");

    // const res = await fetch('http://52.65.185.31:5005/api/contact', {
    const res = await fetch("https://smarc2k24.online/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        dateOfBirth,
        college: formData.college ? formData.college.value : "",
        yearOfStudy: formData.yearOfStudy ? formData.yearOfStudy.value : "",
        gender: formData.gender ? formData.gender.value : "",
      }),
    });

    const result = await res.json();
    console.log(result);

    if (res.ok) {
      setStatus("Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        college: null,
        yearOfStudy: null,
        gender: null,
        day: "",
        month: "",
        year: "",
        // dateOfBirth: '',
        whatsappNumber: "",
        ip: "",
        acceptTerms: false,
      });
    } else {
      setStatus(`Error: ${result.message}`);
    }
  };

  const handleForm = async (e) => {
    //   router.push('/registration')
    // router.location('/registration');
    navigate("/registration");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1D3459]">
      <div className="max-w-2xl my-4 mx-2 mt-0 w-full bg-[#1D3459] rounded-t-none shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-200">
          Stay Tuned
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-200"
            >
              College
            </label>
            <Select
              name="college"
              id="college"
              options={colleges}
              value={formData.college}
              onChange={handleSelectChange}
              className="mt-1 text-gray-800 block w-full"
              placeholder="Select your college"
              isSearchable
              required
            />
          </div>
          <div>
            <label
              htmlFor="yearOfStudy"
              className="block text-sm font-medium text-gray-200"
            >
              Year of Joining
            </label>
            <select
              name="yearOfStudy"
              id="yearOfStudy"
              value={formData.yearOfStudy ? formData.yearOfStudy.value : ""}
              onChange={(e) =>
                handleSelectChange(
                  { value: e.target.value, label: e.target.value },
                  { name: "yearOfStudy" }
                )
              }
              className="mt-1 block w-full text-gray-500 border-gray-300 border-[1px] p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Select your year of joining
              </option>
              {yearsOfStudy.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-200"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender ? formData.gender.value : ""}
              onChange={(e) =>
                handleSelectChange(
                  { value: e.target.value, label: e.target.value },
                  { name: "gender" }
                )
              }
              className="mt-1 block w-full text-gray-500 border-gray-300 border-[1px] p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Select your gender
              </option>
              {genders.map((gender) => (
                <option key={gender.value} value={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-200"
            >
              Date of Birth
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="day"
                id="day"
                value={formData.day || ""}
                onChange={handleChange}
                className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="DD"
                required
                min="1"
                max="31"
                maxLength="2"
              />
              <input
                type="text"
                name="month"
                id="month"
                value={formData.month || ""}
                onChange={handleChange}
                className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="MM"
                required
                min="1"
                max="12"
                maxLength="2"
              />
              <input
                type="text"
                name="year"
                id="year"
                value={formData.year || ""}
                onChange={handleChange}
                className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="YYYY"
                min="1900"
                max="2100"
                required
                maxLength="4"
              />
            </div>
            {/* <input
              type='date'
              name='dateOfBirth'
              id='dateOfBirth'
              value={formData.dateOfBirth}
              onChange={handleChange}
              className='mt-1 block w-full border text-gray-800 border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Your date of birth'
              required
            /> */}
          </div>
          <div>
            <label
              htmlFor="whatsappNumber"
              className="block text-sm font-medium text-gray-200"
            >
              WhatsApp Number
            </label>
            <input
              type="number"
              name="whatsappNumber"
              id="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your WhatsApp number"
            />
          </div>
          <div>
            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-200"
            >
              Are you a ?
            </label>
            <Select
              name="profession"
              id="profession"
              options={professionOptions}
              value={formData.profession}
              onChange={handleSelectChange}
              className="mt-1 text-gray-800 block w-full"
              placeholder="Select your profession"
              isSearchable
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="acceptTerms"
              className="ml-2 block text-sm text-gray-300"
            >
              Get notified through Campus Jam
            </label>
          </div>
          <button
            // type='submit'
            onClick={handleForm}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
          {status && <p className="text-center text-gray-200">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;
