// import { useSelector } from "react-redux"
// import { useCurrentUser } from "../redux/features/auth/authSlice"
import moment from "moment"
import { useGetUserQuery } from "../redux/features/auth/authApi"
import { useGetBookingTrendsQuery } from "../redux/features/booking/bookingApi"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AdminWelcome = () => {
    // const user = useSelector(useCurrentUser)
    const todayDate = new Date()
    const { data: userInfo } = useGetUserQuery()
    const { data: bookingTrends } = useGetBookingTrendsQuery()
    console.log(bookingTrends);


    return (
        <div className="py-12 pl-56">
            {/* border-b border-grayText/40 */}
            <div className="space-y-4  pb-5">
                <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Hey, {userInfo?.data?.name}!</h1>
                <h1 className='text-3xl md:text-2xl text-grayText font-light text-center md:text-left'>{moment(todayDate).format("dddd, MMMM Do, yyyy")}</h1>
            </div>

            <div className="">
                <div className="flex flex-col lg:flex-row">
                    <div className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6"

                    // style="background-image: url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5); background-position: 90% center;"

                    >
                        <div>
                            <h2 className="text-2xl py-5">Booking Trends Over Time</h2>
                            <LineChart width={600} height={300} data={bookingTrends?.data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="bookings" stroke="#FFA400" activeDot={{ r: 8 }} />
                            </LineChart>
                        </div>
                    </div>

                    <div className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6"
                    //  style="background-image: url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5); background-position: 100% 40%;"
                    >
                        <p className="text-5xl text-indigo-900">Inbox <br /><strong>23</strong></p>
                        <a href="" className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"><strong>See messages</strong></a>
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
        </div>
    )
}

export default AdminWelcome