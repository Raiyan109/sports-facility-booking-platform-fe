import { Link } from "react-router-dom";
import { useCancelBookingMutation, useGetUserBookingsQuery } from "../redux/features/booking/bookingApi";
import moment from "moment";

const UserBookings = () => {
    const { data: userBookings, isLoading } = useGetUserBookingsQuery();
    const [cancelBooking] = useCancelBookingMutation();

    const handleCancelBooking = (bookingId) => {
        cancelBooking(bookingId);
    };

    // Skeleton loading rows
    const renderSkeletonRows = (num) => {
        return Array(num).fill().map((_, index) => (
            <tr key={index} className="animate-pulse bg-primary">
                <td className="px-4 py-4 text-sm text-gray-300 bg-grayText h-6 w-24"></td>
                <td className="px-12 py-4 text-sm text-gray-300 bg-grayText h-6 w-20"></td>
                <td className="px-4 py-4 text-sm text-gray-300 bg-grayText h-6 w-16"></td>
                <td className="px-4 py-4 text-sm text-gray-300 bg-grayText h-6 w-20"></td>
                <td className="px-4 py-4 text-sm text-gray-300 bg-grayText h-6 w-16"></td>
                <td className="px-4 py-4 text-sm text-gray-300 bg-grayText h-6 w-16"></td>
                <td className="px-4 py-4 text-sm text-gray-300 bg-grayText h-6 w-28"></td>
            </tr>
        ));
    };

    return (
        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-primary/80 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-primary">
                            <thead className="bg-secondary">
                                <tr>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-grayText">Facility</th>
                                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left text-grayText">Status</th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-grayText">Payable amount</th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-grayText">Date</th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-grayText">Start</th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-grayText">End</th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-grayText">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-secondary divide-y divide-primary">
                                {isLoading
                                    ? renderSkeletonRows(userBookings?.data?.length) // Render 5 skeleton rows if loading
                                    : userBookings?.data.filter(booking => booking?.isBooked === 'confirmed').map((booking) => (
                                        <tr key={booking?._id}>
                                            <td className="px-4 py-4 text-sm text-grayText whitespace-nowrap">{booking?.facility.name}</td>
                                            <td className="px-12 py-4 text-sm font-medium text-grayText whitespace-nowrap">
                                                <div className={booking?.isBooked === 'confirmed' ? `inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100` : 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100'}>
                                                    <span className={booking?.isBooked === 'confirmed' ? `h-1.5 w-1.5 rounded-full bg-emerald-500` : 'h-1.5 w-1.5 rounded-full bg-red-500'}></span>
                                                    <h2 className={booking?.isBooked === 'confirmed' ? `text-sm font-normal text-emerald-500` : 'text-sm font-normal text-red-500'}>{booking?.isBooked}</h2>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-grayText whitespace-nowrap">${booking?.payableAmount}</td>
                                            <td className="px-4 py-4 text-sm text-grayText whitespace-nowrap">{moment(booking?.date).format("MMM Do YY")}</td>
                                            <td className="px-4 py-4 text-sm text-grayText whitespace-nowrap">{booking?.startTime}</td>
                                            <td className="px-4 py-4 text-sm text-grayText whitespace-nowrap">{booking?.endTime}</td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <button className="w-full md:w-fit bg-primary hover:bg-primary/80 text-grayText font-medium py-1 px-2 rounded-full" onClick={() => handleCancelBooking(booking?._id)}>
                                                        Cancel
                                                    </button>
                                                    <Link to={`/my-bookings/${booking?._id}`}>
                                                        <button className="w-full md:w-fit bg-primary hover:bg-primary/80 text-grayText font-medium py-1 px-2 rounded-full">
                                                            Details
                                                        </button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBookings;
