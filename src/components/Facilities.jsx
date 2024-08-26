
import { Link } from "react-router-dom"
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi"
import Facility from "./Facility"
import { ArrowRight } from "lucide-react"

const Facilities = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()


    return (
        <div className='py-32 space-y-14'>

            <div className="flex justify-between items-center">
                <h1 className='text-5xl md:text-7xl [mask-image:radial-gradient(ellipse,#000_10%,transparent_80%)] text-grayText font-bold text-center'> Our Facilities</h1>
                <Link to='/all-facilities-list'>
                    <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText">See More
                        <ArrowRight />
                    </button>
                </Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    facilities && facilities?.data?.filter(facility => facility?.isDeleted === false)?.map(facility => <Facility
                        key={facility._id}
                        facility={facility}
                    />)
                }
            </div>

            {

            }
        </div>
    )
}

export default Facilities