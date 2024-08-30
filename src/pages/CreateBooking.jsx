import Facility from "../components/Facility";
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi"

const CreateBooking = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()
    console.log(facilities);

    return (
        <div className='py-3 space-y-8'>

            <h1 className='text-3xl md:text-6xl text-grayText font-bold text-center pb-14 pt-5'> Book Facilities</h1>
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

export default CreateBooking