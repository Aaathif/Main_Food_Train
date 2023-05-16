import "./UpdatePayroll.scss";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState } from "react";
import { useLocation, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const UpdatePayroll = ({ inputs, title }) => {

  const [payrollData, setPayrollData] = useState({})
  const navigate = useNavigate()

  const location = useLocation()
  console.log(location)
  const ids = location.pathname.split("/")[3]
  console.log(ids)


  const updatePayroll = async () => {
    // const { id } = payment;

    console.log(payrollData)
    try {
      const updatePayroll = await axios.put(`http://localhost:8000/api/payroll/${ids}`, payrollData);
      navigate("/payroll")
      toast.success('Your data has been successfully updated!');

      console.log('Updated payroll:', updatePayroll.data);
    } catch (err) {
      console.log(err);
      toast.error('Updating Failed')

    }
  };

  const handleChange = (e) => {
    setPayrollData({ ...payrollData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePayroll();
  };

  return (
    <div className="new">
      <Sidebar />
      <ToastContainer />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePayroll;
