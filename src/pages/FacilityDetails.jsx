import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleFacilityQuery } from "../redux/features/facility/facilityApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FacilityDetails = () => {
    const { id } = useParams()
    const { data: facility, error, isLoading } = useGetSingleFacilityQuery(id)

    return (
        <div className="">
            <div className="max-w-[1480px] mx-auto container overflow-hidden px-10">
                <Navbar />
                <div className="h-screen py-12 space-y-10">
                    <div className="flex flex-col gap-4">
                        <Link to='/all-facilities-list'>
                            <div className="flex items-center gap-3 text-grayText text-sm">
                                <ArrowLeft size={20} />
                                Back to facilities page
                            </div>
                        </Link>
                        <h1 className='text-5xl md:text-5xl text-grayText font-bold'>{facility?.data?.name}</h1>
                        <div className="flex items-center gap-1 bg-grayText text-primary p-2 px-3 rounded-full w-fit">
                            <MapPin size={20} />
                            <p className="text-sm">{facility?.data?.location}</p>
                        </div>
                    </div>
                    <div className="flex gap-20 justify-between">
                        <div className="flex-1">
                            <img src={facility?.data?.image} alt="" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="flex-1 max-w-2xl flex flex-col gap-20">
                            <div className="space-y-3">
                                <h1 className="text-grayText text-2xl">Description</h1>
                                <h2 className="text-grayText/80 max-w-md">{facility?.data?.description}</h2>
                                <h2 className="text-grayText text-4xl">${facility?.data?.pricePerHour}</h2>
                            </div>
                            <Link to={`/availability-checking/${facility?.data?._id}`}>
                                <button type="button" className="flex items-center justify-between w-fit p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText">Book Now
                                    <ArrowRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FacilityDetails