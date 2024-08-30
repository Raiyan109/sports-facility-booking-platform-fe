// import { useSelector } from "react-redux"
// import { useCurrentUser } from "../redux/features/auth/authSlice"
import moment from "moment"
import { useGetUserQuery } from "../redux/features/auth/authApi"

const UserWelcome = () => {
    // const user = useSelector(useCurrentUser)
    const todayDate = new Date()
    const { data: userInfo } = useGetUserQuery()

    return (
        <div className="py-12">
            <div className="space-y-4 border-b border-grayText/40 pb-5">
                <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Hey, {userInfo?.data?.name}!</h1>
                <h1 className='text-3xl md:text-2xl text-grayText font-light text-center md:text-left'>{moment(todayDate).format("dddd, MMMM Do, yyyy")}</h1>
            </div>
        </div>
    )
}

export default UserWelcome