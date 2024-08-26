import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi"
import AllFacilityList from "./AllFacilityList"

const AllFacilitiesList = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()


    return (
        <div>
            <div className='max-w-[1480px] mx-auto container overflow-hidden px-10 pb-20'>
                <Navbar />
                <h1 className='text-5xl md:text-7xl [mask-image:radial-gradient(ellipse,#000_10%,transparent_80%)] text-grayText font-bold text-center py-24'> Our Facilities</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 '>
                    {
                        facilities && facilities?.data?.filter(facility => facility?.isDeleted === false)?.map(facility => <AllFacilityList
                            key={facility._id}
                            facility={facility}
                        />)
                    }
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default AllFacilitiesList