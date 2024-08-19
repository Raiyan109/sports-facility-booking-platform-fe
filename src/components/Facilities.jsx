import { useGetFacilitiesQuery } from "../redux/facility/facilityApi"
import Facility from "./Facility"

const Facilities = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()
    console.log(facilities);

    return (
        <div id='parts' className='mt-6'>

            <h1 className='text-5xl text-primary font-bold text-center font-Montserrat'> Our Fragments</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 m-10 space-y-8'>
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