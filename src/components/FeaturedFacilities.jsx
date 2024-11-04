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
import FeaturedFacilitiesSkeleton from "./skeleton/FeaturedFacilitiesSkeleton"

const FeaturedFacilities = () => {
    const { data: facilities, error, isLoading } = useGetFacilitiesQuery()
    return (
        <div className="py-16 md:pb-32">
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
                <Carousel className="w-full max-w-[1400px]">
                    <CarouselContent className="-ml-1 ">
                        {/* Array.from({ length: 5 }) */}
                        {isLoading
                            ? Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                                    <FeaturedFacilitiesSkeleton />
                                </CarouselItem>
                            ))
                            : facilities?.data?.map((facility) => (
                                <CarouselItem key={facility?._id} className="pl-1 md:basis-1/2 lg:basis-1/4">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square gap-5 p-0 h-full w-full relative">
                                                <div className="relative group cursor-pointer overflow-hidden duration-500 w-full h-full bg-secondary text-gray-50 p-5">
                                                    <div>
                                                        <div className="group-hover:scale-110 w-full h-[369px] md:h-44 lg:h-48 xl:h-72 bg-primary duration-500">
                                                            <img
                                                                src={facility?.image}
                                                                alt=""
                                                                className="w-full h-full object-cover object-center"
                                                            />
                                                        </div>
                                                        <div className="absolute w-56 left-0 p-5 -bottom-12 duration-500 group-hover:-translate-y-12 group-hover:bg-primary/50">
                                                            <span className="text-xl font-bold">{facility?.name}</span>
                                                            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                                                {facility?.description.slice(0, 70)}
                                                            </p>
                                                        </div>
                                                    </div>
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