
import { Link } from "react-router-dom"
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi"
import Facility from "./Facility"
import { ArrowRight } from "lucide-react"
import FacilityCardSkeleton from "./skeleton/FacilityCardSkeleton"

const Facilities = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()


    return (
        <div className='py-16 md:py-32 space-y-14'>

            {/* <div className="flex justify-between items-center">
                <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center'> Our Facilities</h1>
                <Link to='/all-facilities-list'>
                    <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText">See More
                        <ArrowRight />
                    </button>
                </Link>
            </div> */}
            <div className="space-y-4 text-center">
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-grayText">Our Facilities</h1>
                <p className="px-4 sm:px-8 lg:px-24 text-grayText/70 text-sm md:text-md">Visit our facilities showroom and book your facility</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5'>
                {isLoading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <FacilityCardSkeleton key={index} />
                    ))
                    : facilities?.data
                        ?.filter((facility) => facility?.isDeleted === false)
                        ?.map((facility) => (
                            <Facility key={facility._id} facility={facility} />
                        ))}
            </div>
        </div>
    )
}

export default Facilities