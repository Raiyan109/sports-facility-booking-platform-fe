import { useSelector } from "react-redux"
import { useCurrentUser } from "../redux/features/auth/authSlice"
import moment from "moment"

const AdminWelcome = () => {
    const user = useSelector(useCurrentUser)
    const todayDate = new Date()
    console.log(todayDate);

    return (
        <div>
            <div className="space-y-4 border-b border-grayText/40 pb-5">
                <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Hey, {user?.name}!</h1>
                <h1 className='text-3xl md:text-2xl text-grayText font-light text-center md:text-left'>{moment(todayDate).format("dddd, MMMM Do, yyyy")}</h1>
            </div>
        </div>
    )
}

export default AdminWelcome