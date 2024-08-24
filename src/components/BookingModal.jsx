import { useState } from "react";
import { useGetSingleFacilityQuery, useUpdateFacilityMutation } from "../redux/features/facility/facilityApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const BookingModal = ({ setOpenModal, facilityIdForModal }) => {


    return (
        <div className="h-screen fixed inset-0 bg-opacity-10 backdrop-blur-sm bg-black flex justify-center items-center z-10">
            <div className="bg-primary h-[600px] w-[500px] md:w-[700px] lg:w-[900px] rounded-xl -mt-10 flex flex-col gap-5 overflow-auto p-5 shadow-xl">
                <button onClick={() => setOpenModal(false)} className="bg-accent text-grayText place-self-end p-2 mr-2 rounded-full">Close</button>
                <div className="rounded-md space-y-10 flex flex-col items-center py-12">
                    <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Book Facility</h1>
                    <div className="grid grid-cols-2">
                        {/* Calender */}
                        <div>

                        </div>
                        {/* Time Slot */}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal