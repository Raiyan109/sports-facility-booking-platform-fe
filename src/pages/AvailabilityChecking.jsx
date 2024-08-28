import { Link, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useGetSingleFacilityQuery } from "../redux/features/facility/facilityApi"
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react"

const AvailabilityChecking = () => {
    const { id } = useParams()
    const { data: facility, error, isLoading } = useGetSingleFacilityQuery(id)
    console.log(facility);

    return (
        <div>
            <div className="max-w-[1480px] mx-auto container overflow-hidden px-10">
                <Navbar />
                <div className="space-y-5 mb-10">
                    <Link to={`/all-facilities-list/${facility?.data?._id}`}>
                        <div className="flex items-center gap-3 text-grayText text-sm">
                            <ArrowLeft size={20} />
                            Back to facilities page
                        </div>
                    </Link>
                    <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Check Availability</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-secondary rounded-2xl p-10 w-full h-full col-span-2 row-span-1 lg:row-span-2 order-1 lg:order-3">
                        <h2 className="text-grayText text-3xl">Facility Information</h2>
                        <div className="flex flex-col items-center">
                            <img src={facility?.data?.image} alt="" className="w-56 h-56 object-contain rounded-2xl" />
                            <h2 className="text-grayText text-2xl">Name: {facility?.data?.name}</h2>
                            <h2 className="text-grayText/70 max-w-md text-sm ">Description: {facility?.data?.description}</h2>
                            <h2 className="text-grayText text-sm">Location: {facility?.data?.location}</h2>
                            <h2 className="text-grayText text-sm">Price per hour: {facility?.data?.pricePerHour}</h2>
                        </div>
                    </div>
                    <div className="border border-secondary rounded-2xl p-7 w-full h-56 lg:col-span-2 col-span-2 row-span-1 order-2 lg:order-1">
                        <h2 className="text-grayText text-3xl">Check availability of this facility</h2>
                    </div>

                    {/* Connect Easily section */}
                    {/* <div className="border border-secondary rounded-2xl p-10 w-full h-56 lg:col-span-1 col-span-2 row-span-1 order-3 lg:order-2">
                        2
                    </div> */}

                    {/* Last section */}
                    <div className="border border-secondary rounded-2xl p-10 w-full h-56 col-span-2 order-4 lg:order-4" >
                        3
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AvailabilityChecking