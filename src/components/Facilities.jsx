
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi"
import Facility from "./Facility"

const Facilities = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()


    return (
        <div id='parts' className='py-32 space-y-8'>

            <h1 className='text-[70px] md:text-[200px] [mask-image:radial-gradient(ellipse,#000_10%,transparent_80%)] text-grayText font-bold text-center'> Our Facilities</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    facilities && facilities?.data?.map(facility => <Facility
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