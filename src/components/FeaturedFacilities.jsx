import { Link } from "react-router-dom"
import { Card, CardContent } from "../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi"
import { ArrowRight } from "lucide-react"

const FeaturedFacilities = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()
    return (
        <div className="py-32">
            <div className="flex justify-between items-center gap-28">
                <h1 className='text-5xl md:text-7xl text-grayText font-bold text-center'>Featured Facilities</h1>
                <Link to='/all-facilities-list'>
                    <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText text-sm md:text-md">
                        <p>See More</p>
                        <ArrowRight />
                    </button>
                </Link>
            </div>
            <div className="pt-14 flex items-center justify-center">
                <Carousel className="w-full max-w-7xl">
                    <CarouselContent className="-ml-1">
                        {/* Array.from({ length: 5 }) */}
                        {facilities?.data?.map((facility) => (
                            <CarouselItem key={facility?._id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square gap-5 p-0 h-full w-full">
                                            <img src={facility?.image} alt="" className="w-full object-cover object-center" />
                                            {/* <span className="text-2xl font-semibold">{facility?.name}</span> */}
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default FeaturedFacilities