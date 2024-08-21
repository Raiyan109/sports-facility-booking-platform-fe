import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import fetcher from "../api/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("user");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://sports-facility-booking-platform-be.vercel.app/api/auth/signup",
      {
        name,
        email,
        password,
        phone,
        address,
        role,
      }
    );

    const data = await res.data.data;
    console.log(data);

    MySwal.fire({
      title: "Sign up successfully! ",
      text: "Redirecting to Login page",
      icon: "success",
    });
    navigate("/login");
    return data;
  };
  return (
    <>
      <Navbar />
      <div className=" lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch] flex items-center justify-center flex-col relative">
        <div className="w-full bg-secondary rounded-md p-12 space-y-16">
          <h1 className=" text-lg md:text-5xl text-center text-grayText">Sign Up Here</h1>
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-x-10 gap-y-10 items-end">
              <div>
                <label className="block mb-2 font-medium text-grayText">Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-12 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-grayText">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-12 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-grayText">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-12 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-grayText">Phone</label>
                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-12 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-grayText">Address</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-12 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-grayText">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-12 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                >
                  <option disabled selected>
                    {" "}
                    Select Role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <motion.button className="w-fit bg-primary hover:bg-primary/80 text-grayText font-medium py-3 px-6 rounded-md ease-in-out duration-100">
                Sign Up
              </motion.button>
            </div>
          </form>
          <div className="flex justify-center items-center">
            <Link to="/login" className="text-lg font-semibold text-grayText">
              or login here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
