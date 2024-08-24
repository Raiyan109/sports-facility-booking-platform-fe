import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import BookingModal from "./BookingModal";

const Facility = ({ facility }) => {
    const [openModal, setOpenModal] = useState(false)
    const [facilityIdForModal, setFacilityIdForModal] = useState('')


    const handleModal = (id) => {
        setOpenModal(!openModal)
        setFacilityIdForModal(id)
    }
    return (
        <div className="bg-secondary rounded-xl p-6 h-68 space-y-3">
            <h1 className="text-2xl text-grayText">{facility.name}</h1>
            <p className="text-grayText/70 max-w-sm">{facility.description}</p>
            <div className="flex items-center gap-2 pb-3 text-md">
                <FaLocationDot className="text-grayText" />
                <p className="text-grayText/70">{facility.location}</p>
            </div>
            <hr className="border-grayText/70 border-t pb-3" />
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-xs text-grayText/70">Price Per Hour</p>
                    <h1 className="text-3xl text-grayText">${facility.pricePerHour}</h1>
                </div>
                <div className="flex justify-center items-center">
                    {/* w-fit */}
                    <button className="w-full bg-primary hover:bg-primary/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100" onClick={() => handleModal(facility?._id)}>
                        Book
                    </button>
                </div>
            </div>
            {/* Show Modal */}
            {openModal && (
                <BookingModal openModal={openModal} setOpenModal={setOpenModal} facilityIdForModal={facilityIdForModal} />
            )}
        </div>
    )
}

export default Facility