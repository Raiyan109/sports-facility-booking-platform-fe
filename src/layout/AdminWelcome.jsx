// import { useSelector } from "react-redux"
// import { useCurrentUser } from "../redux/features/auth/authSlice"
import moment from "moment"
import { useGetUserQuery } from "../redux/features/auth/authApi"
import { useGetBookingTrendsQuery } from "../redux/features/booking/bookingApi"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetAverageRatingsQuery } from "../redux/features/facility/facilityApi";
import RadarAverageRating from "../components/charts/RadarAverageRating";

const AdminWelcome = () => {
    // const user = useSelector(useCurrentUser)
    const todayDate = new Date()
    const { data: userInfo } = useGetUserQuery()
    const { data: bookingTrends } = useGetBookingTrendsQuery()
    const { data: averageRatings } = useGetAverageRatingsQuery()
    console.log(bookingTrends);


    return (
        <div className="py-12 pl-56">
            {/* border-b border-grayText/40 */}
            <div className="space-y-4  pb-5">
                <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Hey, {userInfo?.data?.name}!</h1>
                <h1 className='text-3xl md:text-2xl text-grayText font-light text-center md:text-left'>{moment(todayDate).format("dddd, MMMM Do, yyyy")}</h1>
            </div>

            <div className="flex items-center">
                <div className="flex flex-col xl:flex-row pr-3 w-full">
                    <div className="bg-red-200 border border-red-300 rounded-xl w-full p-2 md:p-6"
                    >
                        <div className="">
                            <h2 className="text-xl md:text-2xl py-5">Booking Trends Over Time</h2>
                            <div className="">
                                <ResponsiveContainer>
                                    <LineChart className="" data={bookingTrends?.data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="bookings" stroke="#FFA400" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6"
                    //  style="background-image: url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5); background-position: 100% 40%;"
                    >
                        <div>
                            <h2 className="text-2xl py-5">Average Rating of Facilities</h2>
                            <RadarAverageRating averageRatings={averageRatings} />
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row h-64 mt-6">
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                        a
                    </div>
                    <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
                        b
                    </div>
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                        c
                    </div>
                </div> */}
            </div>
        </div >
    )
}

export default AdminWelcome