import React, { useState } from "react";
import Css from './Reg.module.css'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useForm } from "react-hook-form";


function Signup({ Data }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    address: "",
    contactNo: "",
    dateOfBirth: "",
    email: "",
    password: ""
  });





  // const handleChange = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   // const { name, value } = event.target
  //   setFormData({...formData, [name]: value})
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (Data) => {
    // event.preventDefault();

    //send data to backend using Axios
    axios.post('http://localhost:8000/api/customers/register', Data)
      .then(response => {
        console.log(response.formData);
        alert("User Registered Successfully")
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          address: "",
          contactNo: "",
          dateOfBirth: "",
          email: "",
          password: ""
        })
      })
      .catch(error => {
        console.log(error);
        alert("Failed to Register Customer")
      })

    // Perform signup logic here
  };

  return (
    <div className={Css.row}>
      <div className={Css.col2}>
        <div className={Css.container}>
          <h1>Lets Make Your Order</h1>
          <form className={Css.form} method='post' onSubmit={handleSubmit(onSubmit)}>
            {/* <input 
            type="text" name= "firstName" className={Css.inp} onChange={handleChange} value={formData.firstName}
            placeholder='Enter First Name'
          /> */}
            <input
              type="text"
              name="firstName"
              className={Css.inp}
              onChange={(e) => setFormData(e.target.value)}
              defaultValue={formData.firstName}
              {...register("firstName", { required: true })}
              placeholder="Enter First Name"
            />
            <error>
              {errors.firstName?.type === "required" && "firstName is required"}
            </error>
            <br />
            {/* <input
              type="text" name="lastName" className={Css.inp} value={formData.lastName} onChange={handleChange}
              placeholder='Enter Last Name'
            /> */}
            <input
              type="text"
              name="lastName"
              className={Css.inp}
              defaultValue={formData.lastName}
              onChange={(e) => setFormData(e.target.value)}
              {...register("lastName", { required: true })}
              placeholder="Enter Last Name"
            />
            <error>
              {errors.lastName?.type === "required" && "lastName is required"}
            </error>
            <br />
            {/* <input
              type="text" name="username" className={Css.inp} value={formData.username} onChange={handleChange}
              placeholder='Enter Username'
            /> */}
            <input
              type="text"
              name="username"
              className={Css.inp}
              defaultValue={formData.username}
              onChange={(e) => setFormData(e.target.value)}
              {...register("username", { required: true })}
              placeholder="Enter Username"
            />
            <error>
              {errors.username?.type === "required" && "username is required"}
            </error>
            <br />
            {/* <input
              type="text" name="address" className={Css.inp} value={formData.address} onChange={handleChange}
              placeholder='Enter address'
            /> */}
            <input
              type="text"
              name="address"
              className={Css.inp}
              defaultValue={formData.address}
              onChange={(e) => setFormData(e.target.value)}
              {...register("address", { required: true })}
              placeholder="Enter address"
            />
            <error>
              {errors.address?.type === "required" && "address is required"}
            </error>
            <br />
            {/* <input
              type="text" name="contactNo" className={Css.inp} value={formData.contactNo} onChange={handleChange}
              placeholder='Enter Contact No'
            /> */}
            <input
              type="text"
              name="contactNo"
              className={Css.inp}
              defaultValue={formData.contactNo}
              onChange={(e) => setFormData(e.target.value)}
              {...register("contactNo", {
                required: true,
                pattern: /^[0-9]{10}$/i,
              })}
              placeholder="Enter Contact No"
            />
            <error>
              {errors.contactNo?.type === "required" && "contactNo is required"}
            </error>
            <br />
            {/* <input
              type="date" name="dateOfBirth" className={Css.inp} value={formData.dateOfBirth} onChange={handleChange}
              placeholder='Enter Date-of-Birth'
            /> */}
            <input
              type="date"
              name="dateOfBirth"
              className={Css.inp}
              defaultValue={formData.dateOfBirth}
              onChange={(e) => setFormData(e.target.value)}
              {...register("dateOfBirth", { required: true })}
              placeholder="Enter Date-of-Birth"
            />
            <error>
              {errors.dateOfBirth?.type === "required" &&
                "dateOfBirth is required"}
            </error>
            <br />
            {/* <input type="email" name="email" className={Css.inp} value={formData.email} onChange={handleChange}
              placeholder='Enter Email'
            /> */}
            <input
              type="text"
              name="email"
              className={Css.inp}
              defaultValue={formData.email}
              onChange={(e) => setFormData(e.target.value)}
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
              placeholder="Enter Email"
            />
            <error>
              {errors.email?.type === "required" && "Email is required"}
              {errors.email?.type === "pattern" &&
                "Entered email is in wrong format"}
            </error>
            <br />
            {/* <input type="password" name="password" className={Css.inp} value={formData.password} onChange={handleChange}
              placeholder='Enter Password'
            /> */}
            <input
              type="password"
              name="password"
              className={Css.inp}
              defaultValue={formData.password}
              onChange={(e) => setFormData(e.target.value)}
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
              placeholder="Enter Password"
            />
            <error>
              {errors.password?.type === "minLength" &&
                "Entered password is less than 5 characters"}
              {errors.password?.type === "maxLength" &&
                "Entered password is more than 20 characters"}
            </error>

            <br />
            <button type='submit' className={Css.btn} ><b>Sign up</b></button>
          </form>
          <p><b>Already Have An Account ?</b> <Link to='/login'>Login</Link></p>
        </div>
      </div>
      <div className={Css.col2}>
        <div className={Css.bgr} style={{ backgroundImage: `url(${Data.img})` }}></div>
      </div>
    </div>
  );
}

export default Signup;
