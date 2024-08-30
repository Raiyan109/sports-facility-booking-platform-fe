import { Search } from "lucide-react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi"
import AllFacilityList from "./AllFacilityList"
import { Slider } from "../components/ui/slider"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../components/ui/pagination"


const AllFacilitiesList = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()


    return (
        <div>
            <div className='max-w-[1480px] mx-auto container overflow-hidden px-10 pb-20'>
                <Navbar />
                <h1 className='text-5xl md:text-7xl [mask-image:radial-gradient(ellipse,#000_10%,transparent_80%)] text-grayText font-bold text-center py-24'> Our Facilities</h1>
                <div className="flex items-center justify-center pb-12">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="text" placeholder="Search by name or location" />
                        <Button type="submit">
                            <Search size={18} /> Search</Button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-secondary h-56 w-full md:w-72 rounded-2xl p-4 space-y-4">
                        <div className="flex gap-32 pb-2 border-b">
                            <h1 className="text-grayText text-md">Filter</h1>
                            <h1 className="text-grayText text-md">Reset</h1>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-grayText text-md font-bold">Price</h1>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 flex-2'>
                        {
                            facilities && facilities?.data?.filter(facility => facility?.isDeleted === false)?.map(facility => <AllFacilityList
                                key={facility._id}
                                facility={facility}
                            />)
                        }
                    </div>
                </div>

            </div>
            <div className="pb-5">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <Footer />
        </div>
    )
}

export default AllFacilitiesList