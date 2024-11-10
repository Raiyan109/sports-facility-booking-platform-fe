import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import BookingModal from "./BookingModal";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, MapPin, Star } from "lucide-react";

const Facility = ({ facility }) => {
    console.log(facility);

    const [openModal, setOpenModal] = useState(false)
    const [facilityIdForModal, setFacilityIdForModal] = useState('')


    const handleModal = (id) => {
        setOpenModal(!openModal)
        setFacilityIdForModal(id)
    }
    return (
        // <div className="bg-secondary rounded-xl p-6 h-68 space-y-3">
        //     <h1 className="text-2xl text-grayText">{facility.name}</h1>
        //     <p className="text-grayText/70 max-w-sm">{facility.description}</p>
        //     <div className="flex items-center gap-2 pb-3 text-md">
        //         <FaLocationDot className="text-grayText" />
        //         <p className="text-grayText/70">{facility.location}</p>
        //     </div>
        //     <hr className="border-grayText/70 border-t pb-3" />
        //     <div className="flex justify-between items-center">
        //         <div>
        //             <p className="text-xs text-grayText/70">Price Per Hour</p>
        //             <h1 className="text-3xl text-grayText">${facility.pricePerHour}</h1>
        //         </div>
        //         <div className="flex justify-center items-center">
        //             {/* w-fit */}
        //             <button className="w-full bg-primary hover:bg-primary/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100" onClick={() => handleModal(facility?._id)}>
        //                 Book
        //             </button>
        //         </div>
        //     </div>
        //     {/* Show Modal */}
        //     {openModal && (
        //         <BookingModal openModal={openModal} setOpenModal={setOpenModal} facilityIdForModal={facilityIdForModal} />
        //     )}
        // </div>
        <div className="rounded-2xl border border-secondary shadow-xl bg-primary/40">
            <div className="relative">
                <img src={facility?.image} alt="" className="object-cover object-center w-full rounded-t-2xl h-56 bg-gray-500" />
                {/* <div
                    className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 left-5 ring-1 ring-white md:hidden"
                >
                    <div
                        className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
                    >
                        <MapPin size={20} />

                        <div
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                        >
                            Home
                        </div>
                    </div>
                </div> */}
                <div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 left-5">
                    <MapPin size={20} />
                    <p className="text-sm">{facility?.isDeleted !== facility?.location}</p>
                </div>
                <div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 right-5">
                    <Heart size={20} />
                </div>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-end">
                                <h2 className="text-xl font-semibold tracking-wide text-grayText">${facility?.pricePerHour}</h2>
                                <p className="text-grayText/40">/h</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={20} className="text-grayText" fill="#d1d7e0" />
                                <h5 className="text-grayText">4.2</h5>
                            </div>
                        </div>
                        <h2 className="text-grayText text-2xl">{facility?.name}</h2>
                        <h2 className="text-grayText/80 text-sm h-24 overflow-hidden">
                            {facility?.description.length > 130 ? `${facility?.description.slice(0, 130)}...` : facility?.description}

                        </h2>
                    </div>
                    <Link to={`/all-facilities-list/${facility?._id}`}>
                        <button type="button" className="flex items-center justify-between w-full py-2 px-4 font-semibold tracking-wide rounded-full bg-accent text-grayText">See Details
                            <ArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
            {/* Show Modal */}
            {/* {openModal && (
                <BookingModal openModal={openModal} setOpenModal={setOpenModal} facilityIdForModal={facilityIdForModal} />
            )} */}
        </div>
    )
}

export default Facility