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
        const timeList = []
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00'
                // time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30'
                // time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00'
                // time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30'
                // time: i + ':30 PM'
            })
        }

        setTimeSlot(timeList)
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
        console.log(formattedDate);
        try {
            const bookingInfo = {
                facility: id,
                date: formattedDate,
                startTime: selectedStartTimeSlot,
                endTime: selectedEndTimeSlot
            }
            const res = await createBooking(bookingInfo).unwrap()
            console.log(res);


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
                            <div className="space-y-5">
                                <h2 className="text-grayText text-3xl">Available Time slots for this facility at <span className="font-bold underline">{showDateForResult}</span></h2>
                                <div className="space-y-3">
                                    {/* Result of checking availability */}
                                    {availabilityData?.data?.map((item) => (
                                        <div key={item?._id} className="border-secondary border rounded-2xl flex justify-between md:flex-row p-3">
                                            <h1 className="text-grayText">Start Time: {item?.startTime} - </h1>
                                            <h1 className="text-grayText">End Time: {item?.endTime}</h1>
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
                                        <button type="submit" className="bg-accent px-3 py-1 rounded-full text-grayText">Book</button>
                                    </form>
                                    {error?.data?.message}
                                </Form>
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