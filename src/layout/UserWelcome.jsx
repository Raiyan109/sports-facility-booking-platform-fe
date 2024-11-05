// import { useSelector } from "react-redux"
// import { useCurrentUser } from "../redux/features/auth/authSlice"
import moment from "moment"
import { useGetUserQuery } from "../redux/features/auth/authApi"
import { useGetUserBookingsQuery } from "../redux/features/booking/bookingApi"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Rectangle } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const UserWelcome = () => {
    // const user = useSelector(useCurrentUser)
    const todayDate = new Date()
    const { data: userInfo } = useGetUserQuery()
    const { data: userBookings, isLoading } = useGetUserBookingsQuery();
    console.log(userBookings?.data);


    return (
        <div className="py-12">
            <div className="space-y-4 border-b border-grayText/40 pb-5">
                <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Hey, {userInfo?.data?.name}!</h1>
                <h1 className='text-3xl md:text-2xl text-grayText font-light text-center md:text-left'>{moment(todayDate).format("dddd, MMMM Do, yyyy")}</h1>
            </div>

            <div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart width={150} height={40} data={userBookings?.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default UserWelcome