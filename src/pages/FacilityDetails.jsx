import { ArrowLeft, ArrowRight, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleFacilityQuery } from "../redux/features/facility/facilityApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const colors = {
    orange: "#F2C265",
    grey: "#D8D8D8"
}

const FacilityDetails = () => {
    const { id } = useParams();
    const { data: facility, isLoading } = useGetSingleFacilityQuery(id);


    const calculateRatingsAverage = () => {
        if (!facility?.data?.ratings || facility?.data?.ratings?.length === 0) {
            // Return 0 if there are no reviews
            return;
        }

        // Calculate the average rating safely
        const total = facility?.data?.ratings.reduce((acc, rating) => {
            return acc + (rating.rating || 0); // Default rating to 0 if undefined
        }, 0);

        const average = total / facility?.data?.ratings.length;
        return average > 0 ? average.toFixed(1) : "0";
    };

    const averageRating = calculateRatingsAverage();

    const stars = Array(5).fill(0)


    return (
        <div className="">
            <div className="max-w-[1480px] mx-auto container overflow-hidden px-10">
                <Navbar />
                <div className="min-h-screen py-12 space-y-10">
                    <div className="flex flex-col gap-4">
                        <Link to='/all-facilities-list'>
                            <div className="flex items-center gap-3 text-grayText text-sm">
                                <ArrowLeft size={20} />
                                Back to facilities page
                            </div>
                        </Link>
                        {isLoading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-8 w-3/4 bg-secondary rounded"></div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-secondary rounded-full"></div>
                                    <div className="w-28 h-4 bg-secondary rounded"></div>
                                </div>
                            </div>
                        ) : (
                            <h1 className='text-5xl md:text-5xl text-grayText font-bold'>{facility?.data?.name}</h1>
                        )}
                        {!isLoading && (
                            <div className="flex items-center gap-1 bg-grayText text-primary p-2 px-3 rounded-full w-fit">
                                <MapPin size={20} />
                                <p className="text-sm">{facility?.data?.location}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row gap-20 justify-between">
                        <div className="flex-1">
                            {isLoading ? (
                                <div className="w-full h-96 bg-secondary animate-pulse rounded-2xl"></div>
                            ) : (
                                <img src={facility?.data?.image} alt="" className="w-full h-full object-cover rounded-2xl" />
                            )}
                        </div>
                        <div className="flex-1 max-w-2xl flex flex-col gap-16">
                            <div className="space-y-5">
                                {isLoading ? (
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-6 w-32 bg-secondary rounded"></div>
                                        <div className="h-4 w-full max-w-md bg-secondary rounded"></div>
                                        <div className="h-4 w-3/4 bg-secondary rounded"></div>
                                        <div className="h-8 w-1/4 bg-secondary rounded"></div>
                                    </div>
                                ) : (
                                    <>
                                        <h1 className="text-grayText text-2xl">Description</h1>
                                        <h2 className="text-grayText/80 max-w-md">{facility?.data?.description}</h2>
                                        <h2 className="text-grayText text-4xl">${facility?.data?.pricePerHour}</h2>
                                    </>
                                )}

                                {isLoading ? (
                                    <div className="h-6 w-32 bg-secondary rounded"></div>
                                ) : (
                                    <div className="flex items-center">
                                        {averageRating ? stars.map((_, index) => {
                                            return (
                                                <Star
                                                    key={index}
                                                    size={25}
                                                    fill={parseInt(averageRating) > index ? colors.orange : colors.grey}
                                                    strokeWidth={0}
                                                />
                                            )
                                        }) : (
                                            <p className="text-grayText text-sm">No ratings yet</p>
                                        )}
                                        {averageRating && <p className="text-grayText text-xl ml-3">({averageRating})</p>}
                                    </div>
                                )}
                            </div>
                            {!isLoading && (
                                <Link to={`/availability-checking/${facility?.data?._id}`}>
                                    <button type="button" className="flex items-center justify-between w-full md:w-2/3 py-3 px-6 font-semibold tracking-wide rounded-full bg-accent text-grayText text-xl">Book Now
                                        <ArrowRight />
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FacilityDetails;
