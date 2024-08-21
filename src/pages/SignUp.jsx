import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import fetcher from "../api/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import heroImg from '../assets/pexels-yogendras31-4747326.jpg'
import { useSignupMutation } from "../redux/features/auth/authApi";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("user");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [signup] = useSignupMutation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      name,
      email,
      password,
      phone,
      address,
      role,
    }
    await signup(userInfo)
    // const res = await axios.post(
    //   "https://sports-facility-booking-platform-be.vercel.app/api/auth/signup",
    //   {
    //     name,
    //     email,
    //     password,
    //     phone,
    //     address,
    //     role,
    //   }
    // );

    // const data = await res.data.data;
    // console.log(data);

    MySwal.fire({
      title: "Sign up successfully! ",
      text: "Redirecting to Login page",
      icon: "success",
    });
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col md:flex-row relative bg-secondary mt-5 lg:mt-10 h-screen rounded-2xl">
        <div className="flex-1 rounded-md space-y-10 w-96 flex flex-col items-center py-12">
          <h1 className=" text-3xl md:text-5xl text-grayText text-center font-bold">Sign Up Here</h1>
          <form className="space-y-10 w-96 px-2 lg:px-0" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 items-end">
              <div>
                <label className="block mb-1 text-sm text-grayText">Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-grayText">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-grayText">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-grayText">Phone</label>
                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-grayText">Address</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-grayText">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
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
              {/* w-fit */}
              <motion.button className="w-full bg-primary hover:bg-primary/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100">
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
        <div className='hidden lg:block flex-1'>
          <img src={heroImg} alt="" className='w-full h-[800px] object-cover rounded-2xl' />
        </div>
      </div>
    </>
  );
};

export default SignUp;
