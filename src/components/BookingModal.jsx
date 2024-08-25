import { CalendarDays, Clock } from "lucide-react";
import { Calendar } from "../components/ui/calendar"
import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const BookingModal = ({ setOpenModal, facilityIdForModal }) => {
    const [date, setDate] = useState(new Date)
    const [timeSlot, setTimeSlot] = useState([])
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('')


    useEffect(() => {
        getTime()
    }, [])

    const getTime = () => {
        const timeList = []
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }

        setTimeSlot(timeList)
    }

    const isPastDay = (day) => {
        return day <= new Date()
    }

    return (
        <div className="h-screen fixed inset-0 bg-opacity-10 backdrop-blur-sm bg-black flex justify-center items-center z-10">
            <div className="bg-primary h-[600px] w-[500px] md:w-[700px] lg:w-[900px] rounded-xl -mt-10 flex flex-col gap-5 overflow-auto p-10 shadow-xl">

                <div className="rounded-md space-y-10 flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Book Facility</h1>
                    <form className="space-y-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Calender */}
                            <div className="flex flex-col gap-3 items-baseline">
                                <h2 className="flex gap-2 items-center text-grayText">
                                    <CalendarDays className=" h-5 w-5" />
                                    Select Date
                                </h2>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={isPastDay}
                                    className="rounded-md border"
                                />
                            </div>
                            {/* Time Slot */}
                            <div className="flex flex-col gap-3 items-baseline">
                                <h2 className="flex gap-2 items-center text-grayText">
                                    <Clock className=" h-5 w-5" />
                                    Select Time Slot
                                </h2>
                                <div className="grid grid-cols-3 gap-2 border border-secondary rounded-lg p-3">
                                    {timeSlot?.map((item, i) => (
                                        <h2 key={i} className={`p-2 border bg-secondary text-grayText rounded-full text-[15px] cursor-pointer  ${item.time === selectedTimeSlot && 'bg-[#d1d7e0] text-secondary'}`} onClick={() => setSelectedTimeSlot(item.time)}>{item.time}</h2>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4">
                            <button onClick={() => setOpenModal(false)} className="w-full md:w-fit bg-transparent border-2 border-accent text-accent font-bold py-2 px-5 rounded-full ease-in-out duration-100">Close</button>
                            <button className="w-full md:w-fit bg-accent hover:bg-accent/80 text-grayText font-medium py-2 px-5 rounded-full ease-in-out duration-100">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal