import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import moment from "moment/moment";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../components/ui/popover";
import { toast } from "../components/ui/use-toast";
import { useLazyCheckAvailabilityQuery } from "../redux/features/checkAvailability/checkAvailabilityApi";

const FormSchema = z.object({
    date: z.date({
        required_error: "A date of is required for checking availability of this.",
    }),
});

export function DatePickerForm({ facilityId }) {
    const [
        checkAvailability,
        { data, isLoading, error }
    ] = useLazyCheckAvailabilityQuery();

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    async function onSubmit(data) {
        const formattedDate = moment(data.date).format('YYYY-MM-DD')

        const availabilityQuery = {
            date: formattedDate,
            facility: facilityId
        }
        try {
            const result = await checkAvailability(availabilityQuery).unwrap();
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

    const isPastDay = (day) => {
        return day <= new Date()
    }

    return (
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
                <Button type="submit">Check Availability</Button>
            </form>
            {error?.data?.message}
        </Form>
    );
}
