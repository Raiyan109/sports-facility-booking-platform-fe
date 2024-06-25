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
      <div className="w-full h-[calc(100vh-8ch)] lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch] flex items-center justify-center flex-col relative hero ">
        <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8 space-y-8">
          <h1 className=" text-lg md:text-3xl text-center">Register Here</h1>
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-x-10 gap-y-10 items-end">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:bg-neutral-900"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:bg-neutral-900"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:bg-neutral-900"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Phone</label>
                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:bg-neutral-900"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Address</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  name=""
                  id=""
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:bg-neutral-900"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:bg-neutral-900"
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
              <motion.button className="w-fit bg-primary hover:bg-violet-800 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-100">
                Register
              </motion.button>
            </div>
          </form>
          <div className="flex justify-center items-center">
            <Link to="/login" className="text-lg font-semibold">
              or login here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
