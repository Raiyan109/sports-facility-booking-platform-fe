import { FaVolleyball } from "react-icons/fa6"
import { GiBasketballBasket, GiConverseShoe } from "react-icons/gi";


const WhatWeDo = () => {
    return (
        <section className="py-16 md:pb-32">
            <div className="container p-4 mx-auto sm:p-10">
                <div className="mb-12 space-y-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-grayText">What we do</h1>
                    <p className="px-4 sm:px-8 lg:px-24 text-grayText/70">At PlayTimeHub, we are passionate about the games. We know how hard it is to find a suitable court. So, we’ve put this together to save you from all that rainy days and crowded areas. We discover and compare courts around Bangladesh for you.</p>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
                        <div className="rounded-xl group p-8 text-center hover:bg-secondary text-grayText hover:text-white hover:shadow-xl transition duration-300">
                            <FaVolleyball size={50} className=" mb-6 inline-block group-hover:text-primary" />
                            <h3 className="text-xl font-semibold mb-3">Discover</h3>
                            <p className="text-grayText group-hover:text-grayText text-sm">We help to find a suitable court around you using our passion for the game.</p>
                        </div>

                        <div className="rounded-xl group p-8 text-center hover:bg-secondary text-grayText hover:text-white hover:shadow-xl transition duration-300">
                            <GiBasketballBasket size={50} className=" mb-6 inline-block group-hover:text-primary" />
                            <h3 className="text-xl font-semibold mb-3">Compare</h3>
                            <p className="text-grayText group-hover:text-grayText text-sm">By having all of the courts in one place, you can compare and decide where you want to go next.</p>
                        </div>

                        <div className="rounded-xl group p-8 text-center hover:bg-secondary text-grayText hover:text-white hover:shadow-xl transition duration-300">
                            <GiConverseShoe size={50} className=" mb-6 inline-block group-hover:text-primary" />
                            <h3 className="text-xl font-semibold mb-3">Community</h3>
                            <p className="text-grayText group-hover:text-grayText text-sm">Help us grow this community by sharing with us your courts!</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo