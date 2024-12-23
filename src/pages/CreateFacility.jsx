import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useCreateFacilityMutation } from "../redux/features/facility/facilityApi";
import { useNavigate } from "react-router-dom";
const CreateFacility = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [pricePerHour, setPricePerHour] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [createFacility] = useCreateFacilityMutation()
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const facility = {
            name,
            description,
            pricePerHour,
            location,
            image
        }

        const res = await createFacility(facility).unwrap()
        console.log(res);

        MySwal.fire({
            title: res.message,
            icon: "success",
        });
        navigate("/admin-dashboard/facilities-table");
        return res
    };
    return (
        <div>
            <div className="rounded-md space-y-10 flex flex-col items-center py-12">
                <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Create Facility</h1>
                <form className="space-y-10 w-96 px-2 lg:px-0" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-5 items-end">
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Image</label>
                            <input
                                type="text"
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Name</label>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Description</label>
                            <input
                                type="text"
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Price Per Hour</label>
                            <input
                                type="number"
                                onChange={(e) => setPricePerHour(Number(e.target.value))}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Location</label>
                            <input
                                type="text"
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <motion.button className="w-full bg-accent hover:bg-accent/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100">
                            Create
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateFacility