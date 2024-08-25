import { MapPin, MessageCircleHeart, MessagesSquare, Phone } from "lucide-react"


const GetInTouch = () => {

    const getInTouchCards = [
        {
            id: 1,
            icon: <MessageCircleHeart />,
            title: 'Chat to sales',
            subtitle: 'Speak to our friendly team.',
            link: 'sales@playtimehub.com'
        },
        {
            id: 2,
            icon: <MessagesSquare />,
            title: 'Chat to support',
            subtitle: 'We are here to help',
            link: 'support@playtimehub.com'
        },
        {
            id: 3,
            icon: <MapPin />,
            title: 'Visit us',
            subtitle: 'Visit our office HQ',
            link: 'View on Google Maps'
        },
        {
            id: 4,
            icon: <Phone />,
            title: 'Call us',
            subtitle: '24/7',
            link: '01713160709'
        }
    ]
    return (
        <div>
            <div className="py-20">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-center text-4xl text-grayText font-bold md:text-5xl">Contact our friendly team</h2>
                        <p className="text-grayText/70 lg:w-8/12 lg:mx-auto">Let us know how we can help.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="grid gap-12 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {getInTouchCards.map((item) => (
                                <div key={item.id} className="border border-secondary p-5 h-64 w-64 flex flex-col items-start gap-16 rounded-md">
                                    <div className="border border-secondary p-2 rounded-md">
                                        <p className="text-grayText/70">{item.icon}</p>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <h3 className="text-xl text-grayText">{item.title}</h3>
                                            <p className="text-sm text-grayText/70">{item.subtitle}</p>
                                        </div>
                                        <p className="underline font-bold text-sm text-grayText/75">{item.link}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GetInTouch