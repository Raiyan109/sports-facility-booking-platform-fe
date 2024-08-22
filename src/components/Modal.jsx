import { useState } from "react";
import { useGetSingleFacilityQuery, useUpdateFacilityMutation } from "../redux/features/facility/facilityApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Modal = ({ setOpenModal, facilityIdForModal }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [pricePerHour, setPricePerHour] = useState(0);
    const [location, setLocation] = useState("");
    const { data: facility, error, isLoading } = useGetSingleFacilityQuery(facilityIdForModal)
    // eslint-disable-next-line no-unsafe-optional-chaining
    const facilityId = facility?.data?._id
    console.log(facilityId);

    const [updateFacility] = useUpdateFacilityMutation()
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedFacility = {
            name: name || facility?.data?.name,
            description: description || facility?.data?.description,
            pricePerHour: pricePerHour || facility?.data?.pricePerHour,
            location: location || facility?.data?.location
        }
        const res = await updateFacility({ facilityId, ...updatedFacility }).unwrap()
        console.log(res);
        MySwal.fire({
            title: res.message,
            icon: "success",
        });
        navigate("/admin-dashboard/facilities-table");
        return res
    };


    return (
        <div className="h-screen fixed inset-0 bg-opacity-10 backdrop-blur-sm bg-black flex justify-center items-center z-10">
            <div className="bg-primary h-[600px] w-[500px] md:w-[700px] lg:w-[900px] rounded-xl -mt-10 flex flex-col gap-5 overflow-auto p-5 shadow-xl">
                <button onClick={() => setOpenModal(false)} className="bg-accent text-grayText place-self-end p-2 mr-2 rounded-full">Close</button>
                <div className="rounded-md space-y-10 flex flex-col items-center py-12">
                    <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Update Facility</h1>
                    <form className="space-y-10 w-96 px-2 lg:px-0" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-x-10 gap-y-5 items-end">
                            <div>
                                <label className="block mb-1 text-sm text-grayText">Name</label>
                                <input
                                    type="text"
                                    defaultValue={facility?.data?.name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm text-grayText">Description</label>
                                <input
                                    type="text"
                                    defaultValue={facility?.data?.description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm text-grayText">Price Per Hour</label>
                                <input
                                    type="number"
                                    defaultValue={facility?.data?.pricePerHour}
                                    onChange={(e) => setPricePerHour(Number(e.target.value))}
                                    className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm text-grayText">Location</label>
                                <input
                                    type="text"
                                    defaultValue={facility?.data?.location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <motion.button className="w-full bg-secondary hover:bg-secondary/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100">
                                Update
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal