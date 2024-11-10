/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCreateBookingMutation } from "../redux/features/booking/bookingApi";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import moment from "moment";
import { toast } from "../components/ui/use-toast";
import { Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";


const BookingForm = ({ facilityId, showDateForResult }) => {
    console.log(showDateForResult);

    const [selectedStartTimeSlot, setSelectedStartTimeSlot] = useState('')
    const [selectedEndTimeSlot, setSelectedEndTimeSlot] = useState('')
    const [timeSlot, setTimeSlot] = useState([])

    const [createBooking] = useCreateBookingMutation()

    const MySwal = withReactContent(Swal);

    // const bookingForm = useForm({
    //     resolver: zodResolver(BookingFormSchema),
    // });

    const { handleSubmit } = useForm();

    const handleStartTime = (value) => {
        setSelectedStartTimeSlot(value)
        // setSelectedStartTimeSlot(parseInt(value))
    }
    const handleEndTime = (value) => {
        setSelectedEndTimeSlot(value)
        // setSelectedEndTimeSlot(parseInt(value))
    }

    useEffect(() => {
        getTime()
    }, [])

    const getTime = () => {
        const timeList = [];

        // Add times from 10:00 to 12:30 (10:00 AM to 12:30 PM)
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: `${i}:00`
            });
            timeList.push({
                time: `${i}:30`
            });
        }

        // Add times from 13:00 to 18:30 (1:00 PM to 6:30 PM)
        for (let i = 13; i <= 18; i++) {
            timeList.push({
                time: `${i}:00`
            });
            timeList.push({
                time: `${i}:30`
            });
        }

        setTimeSlot(timeList);
    }

    // Booking Form Handler
    async function onBookingSubmit(data) {

        // const formattedDate = moment(data.bookingDate).format('YYYY-MM-DD')

        try {
            const bookingInfo = {
                facility: facilityId,
                date: showDateForResult,
                startTime: selectedStartTimeSlot,
                endTime: selectedEndTimeSlot
            }
            console.log(bookingInfo, 'booking info');

            const res = await createBooking(bookingInfo).unwrap()
            console.log(res, 'res');
            if (res.success) {

                window.location.href = res.data.paymentSession.payment_url
            } else {
                console.error('Order creation failed:', res.message);
            }


            MySwal.fire({
                title: res.message,
                icon: "success",
            });
            // success, any additional logic
        } catch (error) {
            MySwal.fire({
                title: error?.data?.message,
                icon: "error",
            });
        }
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }


    return (
        <div className="border border-secondary rounded-2xl p-10 w-full lg:col-span-4 col-span-2 row-span-1 order-4 space-y-5">
            <div>
                <h2 className="text-grayText text-3xl">Book now</h2>
            </div>
            <div className="flex justify-between">
                {/* Calender for booking */}
                <div className="flex flex-col gap-3 items-baseline">
                    {/* <h2 className="flex gap-2 items-center text-grayText">
                        <CalendarDays className=" h-5 w-5" />
                        Select Date
                    </h2> */}

                    {/* <Form {...bookingForm}> */}
                    <form onSubmit={handleSubmit(onBookingSubmit)} className="space-y-8">
                        {/* <FormField
                                control={bookingForm.control}
                                name="bookingDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormControl>
                                            
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                        <div className="w-[240px] pl-3 text-left font-normal border rounded-md p-2 bg-gray-100">
                            {/* Display the preselected date */}
                            {showDateForResult ? (
                                <span>{moment(showDateForResult).format("YYYY-MM-DD")}</span>
                            ) : (
                                <span className="text-muted-foreground">No date selected</span>
                            )}
                        </div>
                        <button type="submit" className="bg-accent px-3 py-1 rounded-full text-grayText">Proceed to checkout</button>
                    </form>
                    {/* {error?.data?.message} */}
                    {/* </Form> */}

                </div>

                {/* Time slot dropdown */}
                {/* Time Slot */}
                <div className="flex flex-col gap-3 items-baseline">
                    <h2 className="flex gap-2 items-center text-grayText">
                        <Clock className=" h-5 w-5" />
                        Select Time Slot
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-2">
                        {/* {timeSlot?.map((item, i) => (
                                        <h2 key={i} className={`p-2 border bg-secondary text-grayText rounded-full text-[15px] cursor-pointer  ${item.time === selectedTimeSlot && 'bg-[#d1d7e0] text-secondary'}`} onClick={() => setSelectedTimeSlot(item.time)}>{item.time}</h2>
                                    ))} */}
                        <Select onValueChange={handleStartTime}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Start Time" />
                            </SelectTrigger>
                            <SelectContent>
                                {timeSlot?.map((item, i) => (
                                    <SelectItem key={i} value={item.time} className={`p-2 border bg-secondary text-grayText rounded-full text-[15px] cursor-pointer  ${item.time === selectedStartTimeSlot && 'bg-[#d1d7e0] text-secondary'}`} onChange={() => setSelectedStartTimeSlot(item.time)}>{item.time}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleEndTime}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="End Time" />
                            </SelectTrigger>
                            <SelectContent>
                                {timeSlot?.map((item, i) => (
                                    <SelectItem key={i} value={item.time} className={`p-2 border bg-secondary text-grayText rounded-full text-[15px] cursor-pointer  ${item.time === selectedEndTimeSlot && 'bg-[#d1d7e0] text-secondary'}`} onClick={() => setSelectedEndTimeSlot(item.time)}>{item.time}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingForm