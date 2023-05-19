import React from "react";
import Styles from "./contact.module.css";
import { useState } from "react";
import managementTeam from "./Details";
import headOffice from "./Location";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { error } from 'console'

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setData({ ...data, [name]: value });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    

    //send data to backend using Axios
    axios
      .post("http://localhost:8000/api/contacts", data)
      .then((response) => {
        console.log(response.data);
        alert("Your Input has been Included");
        setData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong. Please try again later");
      })
      ;
      
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.row}>
        <div className={Styles.col2}>
          <h1 style={{ color: "#c52726" }}>GET IN TOUCH</h1>
          <h2>
            <div>Visit One of Our Restaurants</div>
            <div>OR</div>
            <div>Contact US</div>
          </h2>
          {headOffice.map((data) => (
            <div className={Styles.imgContainer1} key={data.id}>
              <img src={data.image} />
              <div className={Styles.textContainer1}>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={Styles.col3}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4293951613038!2d79.85095501859288!3d6.907483622615982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259846675c8ab%3A0x5a9c35ff455a2f00!2sAlmaas%20Indian%20Restaurant%20Kollupitiya!5e0!3m2!1sen!2slk!4v1681206967964!5m2!1sen!2slk"
              style={{
                width: "800px",
                height: "500px",
                border: "0",
                borderRadius: "2rem",
              }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className={Styles.row}>
        <div className={Styles.col}>
          <h1>Contact US</h1>
          <h2>We Would like to here from you</h2>
          <form
            className={Styles.form}
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="name"
              name="name"
              id=""
              onChange={(e) => setData(e.target.value)}
              defaultValue={data.name}
              {...register("name", { required: true })}
              placeholder="Enter Name"
            />
             <error>
              {errors.name?.type === "required" && "Name is required"}
            </error>


            <input
              type="email"
              name="email"
              id=""
              onChange={(e) => setData(e.target.value)}
              defaultValue={data.email}
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
              placeholder="example@gmail.com"
            />
             <error>
              {errors.email?.type === "required" && "Email is required"}
              {errors.email?.type === "pattern" &&
                "Entered email is in wrong format"}
            </error>

            <input
              type="phone"
              name="phone"
              id=""
              onChange={(e) => setData(e.target.value)}
              defaultValue={data.phone}
              {...register("phone", { required: true })}
              placeholder="+94"
            />
            <error>
              {errors.phone?.type === "required" && "contactNo is required"}
            </error>
            
            <textarea
              name="message"
              cols="20"
              rows="10"
              onChange={(e) => setData(e.target.value)}
              defaultValue={data.message}
              {...register("message", { required: true })}
              placeholder="Type your message..."
            ></textarea>
            <error>
              {errors.message?.type === "required" && "contactNo is required"}
            </error>
            <button>Submit</button>
          </form>
        </div>

        <div className={Styles.col1}>
          <h1 style={{ color: "#C52726" }}>Know Our Management</h1>
          <h2 style={{ marginBottom: "2rem" }}>We are here to serve you</h2>
          {managementTeam.map((member) => (
            <div className={Styles.imgContainer} key={member.name}>
              <img src={member.image} alt={member.name} />
              <div className={Styles.textContainer}>
                <p className={Styles.job}>{member.name}</p>
                <p>{member.title}</p>
                <p>{member.phone}</p>
                <p>{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;