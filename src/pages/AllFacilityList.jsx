import { ArrowRight, Heart, MapPin, Star } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom";

const AllFacilityList = ({ facility }) => {
    const [openModal, setOpenModal] = useState(false)
    const [facilityIdForModal, setFacilityIdForModal] = useState('')

    const handleModal = (id) => {
        setOpenModal(!openModal)
        setFacilityIdForModal(id)
    }
    return (
        <div className="rounded-2xl border border-secondary shadow-xl bg-primary/40">
            <div className="relative">
                <img src={facility?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                {facility?.isDeleted === false ? (<div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 left-5">
                    <MapPin size={20} />
                    <p className="text-sm">{facility?.location}</p>
                </div>) : (
                    <div className="flex items-center gap-1 bg-accent text-grayText p-2 rounded-full absolute top-4 left-5">Not available</div>
                )}
                {facility?.isDeleted === false && <div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 right-5">
                    <Heart size={20} />
                </div>}
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-end">
                                <h2 className="text-4xl font-semibold tracking-wide text-grayText">${facility?.pricePerHour}</h2>
                                <p className="text-grayText/40 pb-1">/h</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={20} className="text-grayText" fill="#d1d7e0" />
                                <h5 className="text-grayText">4.2</h5>
                            </div>
                        </div>
                        <h2 className="text-grayText text-2xl">{facility?.name}</h2>
                        <h2 className="text-grayText/80 text-sm">{facility?.description}</h2>
                    </div>
                    <Link to={`/all-facilities-list/${facility?._id}`}>
                        <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText">See Details
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

export default AllFacilityList