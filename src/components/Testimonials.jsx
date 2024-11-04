import { Card, CardContent } from "../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'

const Testimonials = () => {
    const testimonialCards = [
        {
            id: 1,
            image: testimonial1,
            name: 'Muhammad Abdullah',
            email: 'abdullah@gmail.com',
            testimonial: 'Booking a court for my weekly football games has never been easier. The platform is user-friendly, and I love that I can check availability in real-time. Highly recommended!'
        },
        {
            id: 2,
            image: testimonial2,
            name: 'Sarah Khan',
            email: 'sarah.khan@gmail.com',
            testimonial: 'As an avid tennis player, I was thrilled to find a facility booking platform that is so seamless. The variety of facilities available and the simple booking process make it my go-to for all my sporting needs.'
        },
        {
            id: 3,
            image: testimonial3,
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            testimonial: 'I’ve tried other platforms, but this one is by far the best. The booking process is quick, and the reminders ensure I never miss a session. The facilities are top-notch!'
        },
        {
            id: 4,
            image: testimonial4,
            name: 'Ayesha Malik',
            email: 'ayesha.malik@gmail.com',
            testimonial: 'Whether it’s booking a yoga studio or a basketball court, this platform makes it so easy. The customer service is excellent, and I always have a great experience. I recommend it to all my friends!'
        }
    ];

    return (
        <div className="py-16 md:pb-32">
            {/* <div className="flex justify-between items-center gap-28">
                <h1 className='text-5xl md:text-7xl text-grayText font-bold text-center'>Featured Facilities</h1>
                <Link to='/all-facilities-list'>
                    <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText text-sm md:text-md">
                        <p>See More</p>
                        <ArrowRight />
                    </button>
                </Link>
            </div> */}
            <div className="pt-14 flex flex-col md:flex-row gap-32 justify-between">
                <div className="flex-1 space-y-10">
                    <h1 className='text-3xl md:text-5xl text-grayText font-bold text-center md:text-left'>Testimonials</h1>
                    <h3 className="text-grayText/70 max-w-sm text-center md:text-left">Public Cheers for Us! Find out how our users are spreading the world</h3>
                </div>
                <div className="flex-1">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="w-full max-w-7xl"
                    >
                        <CarouselContent className="-mt-1 h-[300px]">
                            {/* Array.from({ length: 5 }) */}
                            {testimonialCards.map((testimonialCard, index) => (
                                <CarouselItem key={testimonialCard.id} className="pt-1 md:basis-1/2">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square gap-5 p-0 h-full w-full bg-secondary border-secondary">
                                                <div className="p-3 space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <img src={testimonialCard.image} alt="" className="w-14 h-14 object-cover rounded-full" />
                                                        <div>
                                                            <h1 className="text-md text-grayText">{testimonialCard.name}</h1>
                                                            <h2 className="text-xs text-grayText/70">{testimonialCard.email}</h2>
                                                        </div>
                                                    </div>
                                                    <p className="text-grayText">{testimonialCard.testimonial}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

            </div>
        </div>
    )
}

export default Testimonials