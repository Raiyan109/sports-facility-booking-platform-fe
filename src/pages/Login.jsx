import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import fetcher from "../api/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components/Loading";
import heroImg from '../assets/pexels-yogendras31-4747326.jpg'
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [login] = useLoginMutation()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const userInfo = {
      email,
      password,
    }
    const res = await login(userInfo).unwrap()
    dispatch(setUser({ user: res.data, token: res.token }))
    setLoading(false);
    navigate("/");
  };
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="max-w-[1480px] mx-auto container overflow-hidden px-10">
      <Navbar />
      <div className="flex justify-center items-center flex-col md:flex-row relative bg-secondary mt-5 lg:mt-10 h-screen rounded-2xl">
        <div className="flex-1 rounded-md space-y-10 w-96 flex flex-col items-center py-12">
          <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Login Here</h1>
          <form className="space-y-10 w-96 px-2 lg:px-0" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 items-end">
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
            </div>
            <div className="flex justify-center items-center">
              <motion.button className="w-full bg-primary hover:bg-primary/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100">
                Login
              </motion.button>
            </div>
          </form>
          <div className="flex justify-center items-center">
            <Link to="/login" className="text-lg font-semibold text-grayText">
              or sign up here
            </Link>
          </div>
        </div>
        <div className='hidden lg:block flex-1'>
          <img src={heroImg} alt="" className='w-full h-[800px] object-cover rounded-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Login;
