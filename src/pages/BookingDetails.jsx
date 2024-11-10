import { Link, useParams } from "react-router-dom"
import { useGetSingleBookingQuery } from "../redux/features/booking/bookingApi"
import moment from "moment"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

const BookingDetails = () => {
    const { id } = useParams()
    const { data: booking, error, isLoading } = useGetSingleBookingQuery(id)

    return (
        <div className="py-32 max-w-[1480px] mx-auto container overflow-hidden px-10 space-y-12">
            <div className="flex flex-col gap-4">
                <Link to='/user-dashboard'>
                    <div className="flex items-center gap-3 text-grayText text-sm">
                        <ArrowLeft size={20} />
                        Back to my bookings
                    </div>
                </Link>
                <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Booking Details</h1>
                <p className="text-sm text-grayText/70">See your booking details</p>
            </div>

            <div className="border-secondary border rounded-2xl flex flex-col md:flex-row">
                <div className="border-b md:border-r border-grayText/70 flex flex-col gap-2 items-center p-4 text-grayText bg-secondary rounded-l-2xl md:rounded-t-2xl">
                    <h1 className="text-2xl">{moment(booking?.date).format("dd")}</h1>
                    <h1 className="text-5xl font-bold">{moment(booking?.date).format("D")}</h1>
                </div>
                <div className="border-b md:border-r border-grayText/70 flex flex-col justify-center gap-6 p-4 text-grayText">
                    <div className="flex items-center gap-3">
                        <Clock size={20} />
                        {booking?.data?.startTime} - {booking?.data?.endTime}
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin size={20} />
                        {booking?.data?.facility?.location}
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-6 p-4 text-grayText">
                    <div className="flex items-center gap-3">
                        <h1>Name:</h1>
                        {booking?.data?.facility?.name}
                    </div>
                    <div className="flex  gap-3">
                        <h1>Description:</h1>
                        {booking?.data?.facility?.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetails