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
        <div className="py-16 md:py-32">
            {/* <div className="flex justify-between items-center gap-28">
                <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center'>Featured Facilities</h1>
                <Link to='/all-facilities-list'>
                    <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText text-sm md:text-md">
                        <p>See More</p>
                        <ArrowRight />
                    </button>
                </Link>
            </div> */}
            <div className="space-y-4 text-center">
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-grayText">Featured Facilities</h1>
                <p className="px-4 sm:px-8 lg:px-24 text-grayText/70 text-sm md:text-md">Visit our featured facilities showroom and book your facility</p>
            </div>
            <div className="pt-14 flex items-center justify-center px-5">
                <Carousel className="w-full max-w-7xl">
                    <CarouselContent className="-ml-1">
                        {/* Array.from({ length: 5 }) */}
                        {facilities?.data?.map((facility) => (
                            <CarouselItem key={facility?._id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square gap-5 p-0 h-full w-full relative">
                                            <img src={facility?.image} alt="" className="w-full h-2/3 object-cover object-center" />
                                            {/* <span className="text-2xl font-semibold">{facility?.name}</span> */}
                                            <div className="absolute bottom-5 left-5 space-y-2">
                                                <h1 className="text-primary text-xl">{facility?.name}</h1>
                                                <h1 className="text-primary">{facility?.description.slice(0, 70)}t</h1>
                                            </div>
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