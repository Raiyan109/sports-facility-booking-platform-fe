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
import { useEffect, useState } from "react"
import FacilityCardSkeleton from "../components/skeleton/FacilityCardSkeleton"


const AllFacilitiesList = () => {
    const [searchText, setSearchText] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [filteredItems, setFilteredItems] = useState([]);
    const [titles, setTitles] = useState([])

    // States for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(2)
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()

    // Search filter
    const handleChange = (e) => {
        setSearchText(e.currentTarget.value.toLowerCase());
    };



    // Range filter handler
    const handlePriceChange = (values) => {
        const [min, max] = values;
        setMinPrice(min);
        setMaxPrice(max);
    };

    // For updating titles when data is available
    useEffect(() => {
        if (facilities?.data) {
            setTitles(filteredItems);
        }
    }, [filteredItems, facilities?.data]);

    useEffect(() => {
        filterItems();
    }, [searchText, facilities, minPrice, maxPrice]);

    // All filter logic
    const filterItems = () => {
        let tempItems = facilities?.data || [];

        // Apply search text filter
        if (searchText) {
            tempItems = tempItems.filter((item) =>
                item.name.toLowerCase().includes(searchText) ||
                item.location.toLowerCase().includes(searchText)
            );
        }

        // Apply price filter
        tempItems = tempItems.filter(
            (item) => item.pricePerHour >= minPrice && item.pricePerHour <= maxPrice
        );

        setFilteredItems(tempItems);

    };

    // Loading
    // if (isLoading) {
    //     return <div>
    //         <FacilityCardSkeleton />
    //     </div>
    // }

    // Logic for pagination
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentResults = titles.slice(firstPostIndex, lastPostIndex);


    const pages = []
    const totalPosts = facilities?.data?.length
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    const handleReset = () => {
        setSearchText('');
        setMinPrice(0); // Reset to default values
        setMaxPrice(1000); // Reset to default values
        setFilteredItems(facilities?.data || []);
    };
    return (
        <div>
            <div className='max-w-[1480px] mx-auto container overflow-hidden px-10 pb-20'>
                <Navbar />
                <h1 className='text-3xl md:text-6xl text-grayText font-bold text-center pb-14 pt-5'> Our Facilities</h1>
                <div className="flex items-center justify-center pb-12">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                            type="text"
                            value={searchText}
                            onChange={handleChange}
                            placeholder="Search by name or location" />
                        <Button type="submit">
                            <Search size={18} /> Search</Button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-secondary h-56 w-full md:w-72 rounded-2xl p-4 space-y-4">
                        <div className="flex justify-between gap-32 pb-2 border-b">
                            <h1 className="text-grayText text-md">Filter</h1>
                            <h1 className="text-primary font-bold text-md cursor-pointer" onClick={handleReset}>Reset</h1>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-grayText text-md font-bold">Price</h1>
                            <Slider defaultValue={[minPrice, maxPrice]} max={1000} step={1} onValueChange={handlePriceChange} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 flex-2'>
                        {
                            currentResults.length > 0 ? (currentResults?.filter(facility => facility?.isDeleted === false)?.map(facility => <AllFacilityList
                                key={facility._id}
                                facility={facility}
                            />)) : (
                                <div className='p-10 flex-2 w-96'>
                                    <h1 className='text-center text-xl font-medium text-lightGreen'>{`No Result found by ${searchText}`}</h1>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
            <div className="pb-5">
                <Pagination>
                    <PaginationContent>
                        {/* <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem> */}
                        <PaginationItem>
                            {pages.map((page, i) => {
                                return (
                                    <PaginationLink key={i}
                                        onClick={() => setCurrentPage(page)}
                                        className={page == currentPage ? "active" : ""}

                                        href="#">{page}</PaginationLink>
                                )
                            })}
                        </PaginationItem>
                        {/* <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem> */}
                        {/* <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem> */}
                    </PaginationContent>
                </Pagination>
            </div>

            <Footer />
        </div>
    )
}

export default AllFacilitiesList