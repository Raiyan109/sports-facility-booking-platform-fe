import { useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useSignupMutation } from "../redux/features/auth/authApi";

const MakeAdmin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [role] = useState("admin");
    const MySwal = withReactContent(Swal);

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

        MySwal.fire({
            title: "Admin added successfully!",
            icon: "success",
        });
        // navigate("/login");
    };
    return (
        <div>
            <div className="rounded-md space-y-10 flex flex-col items-center py-12">
                <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Add An Admin</h1>
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
                        {/* Role */}
                        {/* <div>
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
                        </div> */}
                    </div>
                    <div className="flex justify-center items-center">
                        {/* w-fit */}
                        <button className="w-full bg-accent hover:bg-accent/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MakeAdmin