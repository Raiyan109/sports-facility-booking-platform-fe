import { Link, useParams } from "react-router-dom"
import { useGetSingleFacilityQuery } from "../redux/features/facility/facilityApi"
import { ArrowRight, Heart, MapPin, Star } from "lucide-react"


const AvailChecking2 = () => {
    const { id } = useParams()
    const { data: facility } = useGetSingleFacilityQuery(id)
    console.log(facility);

    return (
        <div>

            <div className="min-h-screen  text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-secondary shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="rounded-2xl shadow-xl bg-primary/40">
                            <div className="relative">
                                <img src={facility?.data?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                                <div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 left-5">
                                    <MapPin size={20} />
                                    <p className="text-sm">{facility?.data?.location}</p>
                                </div>
                                <div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 right-5">
                                    <Heart size={20} />
                                </div>
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-end">
                                                <h2 className="text-4xl font-semibold tracking-wide text-grayText">${facility?.data?.pricePerHour}</h2>
                                                <p className="text-grayText/40 pb-1">/h</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Star size={20} className="text-grayText" fill="#d1d7e0" />
                                                <h5 className="text-grayText">4.2</h5>
                                            </div>
                                        </div>
                                        <h2 className="text-grayText text-2xl">{facility?.data?.name}</h2>
                                        <h2 className="text-grayText/80 text-sm">{facility?.data?.description}</h2>
                                    </div>
                                    <Link to={`/all-facilities-list/${facility?.data?._id}`}>
                                        <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText">See Details
                                            <ArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        // style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailChecking2