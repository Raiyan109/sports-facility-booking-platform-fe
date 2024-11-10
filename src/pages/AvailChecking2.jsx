import { Link, useParams } from "react-router-dom"
import { useGetSingleFacilityQuery } from "../redux/features/facility/facilityApi"
import { ArrowRight, CalendarDays, CalendarIcon, Heart, MapPin, Star } from "lucide-react"
import FacilityCardSkeleton from "../components/skeleton/FacilityCardSkeleton"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import moment from "moment"
import { useState } from "react"

import { toast } from "../components/ui/use-toast"
import { cn } from "../lib/utils"
import { format } from "date-fns"
import { checkAvailabilityApi, useLazyCheckAvailabilityQuery } from "../redux/features/checkAvailability/checkAvailabilityApi"

// Zod Validation for Form
const FormSchema = z.object({
    date: z.date({
        required_error: "A date is required for checking availability of this facility.",
    }),
});

const AvailChecking2 = () => {
    const [showDateForResult, setShowDateForResult] = useState('')
    const [availabilityData, setAvailabilityData] = useState([])
    const { id } = useParams()
    const { data: facility, isLoading } = useGetSingleFacilityQuery(id)
    const [
        checkAvailability,
        { data, error }
    ] = useLazyCheckAvailabilityQuery();

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    // Check Availability Form Handler
    async function onSubmit(data) {
        const formattedDate = moment(data.date).format('YYYY-MM-DD')
        setShowDateForResult(formattedDate)

        const availabilityQuery = {
            date: formattedDate,
            facility: id
        }

        try {
            const result = await checkAvailabilityApi(availabilityQuery).unwrap();
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


    const isPastDay = (day) => {
        return day <= new Date()
    }

    return (
        <div>

            <div className="min-h-screen  text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-secondary shadow sm:rounded-lg flex flex-col lg:flex-row justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        {isLoading ? (
                            <FacilityCardSkeleton />
                        ) :
                            (
                                <div>
                                    <div className="rounded-2xl shadow-xl bg-primary/40 hidden lg:block">
                                        <div className="relative">
                                            <img src={facility?.data?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                                            <div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 left-5">
                                                <MapPin size={20} />
                                                <p className="text-sm">{facility?.data?.location}</p>
                                            </div>
                                            <div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 right-5">
                                                <Heart size={20} />
                                            </div>
                                            <div className="flex flex-col justify-between p-6 space-y-8">
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-end">
                                                            <h2 className="text-4xl font-semibold tracking-wide text-grayText">${facility?.data?.pricePerHour}</h2>
                                                            <p className="text-grayText/40 pb-1">/h</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Star size={20} className="text-grayText" fill="#d1d7e0" />
                                                            <h5 className="text-grayText">4.2</h5>
                                                        </div>
                                                    </div>
                                                    <h2 className="text-grayText text-2xl">{facility?.data?.name}</h2>
                                                    <h2 className="text-grayText/80 text-sm">{facility?.data?.description}</h2>
                                                </div>
                                                <Link to={`/all-facilities-list/${facility?.data?._id}`}>
                                                    <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText">See Details
                                                        <ArrowRight />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block lg:hidden">

                                        <div
                                            className="z-50 flex  bg-primary rounded-xl overflow-hidden shadow-lg"
                                        >

                                            <div>
                                                <img src={facility?.data?.image} className="w-80 h-56 object-cover" alt="" />
                                            </div>
                                            <div className="mx-2.5 overflow-hidden w-full space-y-4">
                                                <p
                                                    className="mt-1.5 text-xl font-bold text-[#66cdaa] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap"
                                                >
                                                    {facility?.data?.name}
                                                </p>
                                                <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10 max-w-sm">
                                                    {facility?.data?.description}
                                                    The post has been published.

                                                </p>
                                                <p className="overflow-hidden leading-5 break-all text-zinc-200 max-h-10 max-w-sm text-xl">

                                                    ${facility?.data?.pricePerHour}/hr
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )}
                    </div>
                    <div className="flex-1 bg-primary/60 text-center flex">
                        <div className="m-12 xl:m-16 w-full"
                        >
                            {/* Check Availability */}
                            <div className="border border-secondary rounded-2xl p-7">
                                {/* flex flex-col gap-5 md:flex-row */}
                                <div className="flex flex-col  gap-10 md:gap-28">
                                    {/* <div className="flex-1">
                                        <h2 className="text-grayText text-3xl max-w-[250px]">Check availability of this facility</h2>
                                    </div> */}
                                    <div className="space-y-5">
                                        {/* flex-1  */}
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
                                                                {/* <Popover>
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
                                                                        
                                                                    </PopoverContent>
                                                                </Popover> */}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailChecking2