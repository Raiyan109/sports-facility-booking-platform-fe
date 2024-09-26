import { Link, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useGetSingleFacilityQuery } from "../redux/features/facility/facilityApi"
import { ArrowLeft, CalendarIcon, Clock, Meh } from "lucide-react"
import { CalendarDays } from "lucide-react";
import { Calendar } from "../components/ui/calendar"
import { useLazyCheckAvailabilityQuery } from "../redux/features/checkAvailability/checkAvailabilityApi"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { Button } from "../components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";
import moment from "moment/moment";

import { cn } from "../lib/utils";
import { toast } from "../components/ui/use-toast"
import { useEffect, useState } from "react"
import { useCreateBookingMutation } from "../redux/features/booking/bookingApi"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

// Zod Validation for Form
const FormSchema = z.object({
    date: z.date({
        required_error: "A date is required for checking availability of this facility.",
    }),
});

// Zod Validation for Booking Form
const BookingFormSchema = z.object({
    bookingDate: z.date({
        required_error: "A date is required for booking.",
    }),
});

const AvailabilityChecking = () => {
    const [availabilityData, setAvailabilityData] = useState([])
    const [showDateForResult, setShowDateForResult] = useState('')
    const [selectedStartTimeSlot, setSelectedStartTimeSlot] = useState('')
    const [selectedEndTimeSlot, setSelectedEndTimeSlot] = useState('')
    const [timeSlot, setTimeSlot] = useState([])
    const [createBooking] = useCreateBookingMutation()
    const { id } = useParams()
    const { data: facility } = useGetSingleFacilityQuery(id)
    const MySwal = withReactContent(Swal);

    const [
        checkAvailability,
        { data, isLoading, error }
    ] = useLazyCheckAvailabilityQuery();

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    const bookingForm = useForm({
        resolver: zodResolver(BookingFormSchema),
    });

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

    // Check Availability Form Handler
    async function onSubmit(data) {
        const formattedDate = moment(data.date).format('YYYY-MM-DD')
        setShowDateForResult(formattedDate)

        const availabilityQuery = {
            date: formattedDate,
            facility: id
        }

        try {
            const result = await checkAvailability(availabilityQuery).unwrap();
            setAvailabilityData(result)
            console.log(result);


            // success, any additional logic
        } catch (error) {
            console.log(error?.data?.message);
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

    // Booking Form Handler
    async function onBookingSubmit(data) {

        const formattedDate = moment(data.bookingDate).format('YYYY-MM-DD')

        try {
            const bookingInfo = {
                facility: id,
                date: formattedDate,
                startTime: selectedStartTimeSlot,
                endTime: selectedEndTimeSlot
            }
            const res = await createBooking(bookingInfo).unwrap()
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
            console.log(error?.data?.message);
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


    const isPastDay = (day) => {
        return day <= new Date()
    }

    return (
        <div>
            <div className="max-w-[1480px] mx-auto container overflow-hidden px-10">
                <Navbar />
                <div className="space-y-5 mb-10">
                    <Link to={`/all-facilities-list/${facility?.data?._id}`}>
                        <div className="flex items-center gap-3 text-grayText text-sm">
                            <ArrowLeft size={20} />
                            Back to facilities page
                        </div>
                    </Link>
                    <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Check Availability</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5 py-16">
                    {/* Facility Information */}
                    <div className="border border-secondary rounded-2xl p-10 w-full h-full col-span-2 row-span-1 lg:row-span-2 order-1 lg:order-3">
                        <h2 className="text-grayText text-3xl">Facility Information</h2>
                        <div className="flex flex-col items-center">
                            <img src={facility?.data?.image} alt="" className="w-56 h-56 object-contain rounded-2xl" />
                            <h2 className="text-grayText text-2xl">Name: {facility?.data?.name}</h2>
                            <h2 className="text-grayText/70 max-w-md text-sm ">Description: {facility?.data?.description}</h2>
                            <h2 className="text-grayText text-sm">Location: {facility?.data?.location}</h2>
                            <h2 className="text-grayText text-sm">Price per hour: {facility?.data?.pricePerHour}</h2>
                        </div>
                    </div>

                    {/* Check Availability */}
                    <div className="border border-secondary rounded-2xl p-7 w-full lg:col-span-2 col-span-2 row-span-1 order-2 lg:order-1 flex flex-col gap-5">
                        <div className="flex flex-col md:flex-row gap-10 md:gap-28">
                            <div className="flex-1">
                                <h2 className="text-grayText text-3xl max-w-[250px]">Check availability of this facility</h2>
                            </div>
                            <div className="flex-1 space-y-5">
                                {/* Calender for check availability */}
                                <div className="flex flex-col gap-3 items-baseline">
                                    <h2 className="flex gap-2 items-center text-grayText">
                                        <CalendarDays className=" h-5 w-5" />
                                        Select Date
                                    </h2>

                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <FormField
                                                control={form.control}
                                                name="date"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        {/* <FormLabel>Date of birth</FormLabel> */}
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn(
                                                                            "w-[240px] pl-3 text-left font-normal",
                                                                            !field.value && "text-muted-foreground"
                                                                        )}
                                                                    >
                                                                        {field.value ? (
                                                                            format(field.value, "PPP")
                                                                        ) : (
                                                                            <span>Pick a date</span>
                                                                        )}
                                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>

                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    // disabled={(date) =>
                                                                    //     date > new Date() || date < new Date("1900-01-01")
                                                                    // }
                                                                    disabled={isPastDay}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                        {/* <FormDescription>
                                Your date of birth is used to calculate your age.
                            </FormDescription> */}
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <button type="submit" className="bg-accent px-3 py-1 rounded-full text-grayText">Check availability</button>
                                        </form>
                                        {error?.data?.message}
                                    </Form>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Availability Result section */}
                    <div className="border border-secondary rounded-2xl p-10 w-full col-span-2 order-4 lg:order-4 space-y-5" >
                        {availabilityData?.data?.length > 0 ? (
                            <div className="space-y-16">
                                <h2 className="text-grayText text-3xl">Available Time slots for this facility for <span className="font-bold underline">{showDateForResult}</span></h2>
                                <div className="flex gap-12 flex-wrap">
                                    {/* Result of checking availability */}
                                    {/* .filter(item => item?.isBooked === 'confirmed')? */}
                                    {availabilityData?.data?.map((item) => (
                                        <div key={item?._id} className="border-secondary border rounded-2xl flex justify-center items-center gap-7 w-full p-3">
                                            <h1 className="text-grayText">{item?.startTime} </h1>
                                            <h1 className="text-grayText">-</h1>
                                            <h1 className="text-grayText">{item?.endTime}</h1>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center flex-col gap-5">
                                <h1 className="text-grayText/40">Check availability above</h1>
                                <Meh className="text-grayText/40" size={40} />
                            </div>
                        )}
                    </div>


                    <div className="border border-secondary rounded-2xl p-10 w-full lg:col-span-4 col-span-2 row-span-1 order-4 space-y-5">
                        <div>
                            <h2 className="text-grayText text-3xl">Book now</h2>
                        </div>
                        <div className="flex justify-between">
                            {/* Calender for booking */}
                            <div className="flex flex-col gap-3 items-baseline">
                                <h2 className="flex gap-2 items-center text-grayText">
                                    <CalendarDays className=" h-5 w-5" />
                                    Select Date
                                </h2>

                                <Form {...bookingForm}>
                                    <form onSubmit={bookingForm.handleSubmit(onBookingSubmit)} className="space-y-8">
                                        <FormField
                                            control={bookingForm.control}
                                            name="bookingDate"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    {/* <FormLabel>Date of birth</FormLabel> */}
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={"outline"}
                                                                    className={cn(
                                                                        "w-[240px] pl-3 text-left font-normal",
                                                                        !field.value && "text-muted-foreground"
                                                                    )}
                                                                >
                                                                    {field.value ? (
                                                                        format(field.value, "PPP")
                                                                    ) : (
                                                                        <span>Pick a date</span>
                                                                    )}
                                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>

                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={field.value}
                                                                onSelect={field.onChange}
                                                                // disabled={(date) =>
                                                                //     date > new Date() || date < new Date("1900-01-01")
                                                                // }
                                                                disabled={isPastDay}
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                    {/* <FormDescription>
                                Your date of birth is used to calculate your age.
                            </FormDescription> */}
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <button type="submit" className="bg-accent px-3 py-1 rounded-full text-grayText">Proceed to checkout</button>
                                    </form>
                                    {error?.data?.message}
                                </Form>
                                {/* <button type="submit" className="bg-accent px-3 py-1 rounded-full text-grayText">Proceed to pay</button> */}
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AvailabilityChecking