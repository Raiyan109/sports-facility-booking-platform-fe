import Facility from "../components/Facility";
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi"

const CreateBooking = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()
    console.log(facilities);

    return (
        <div className='py-3 space-y-8'>

            <h1 className='text-[70px] md:text-[200px] [mask-image:radial-gradient(ellipse,#000_10%,transparent_80%)] text-grayText font-bold text-center'>Facilities</h1>
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