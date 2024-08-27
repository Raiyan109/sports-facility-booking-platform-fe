import { useState } from "react"
import tab1 from '../assets/tab1.jpg'
import tab2 from '../assets/tab2.jpg'
import tab3 from '../assets/tab3.jpg'
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState(1)
    const tabsData = [
        {
            id: 1,
            stepName: 'Step 1',
            title: 'Sign up or Login',
            description: 'Join existing and ongoing rooms for focus and connection or create your personalized study space.',
            buttonText: 'Sign up now',
            image: tab1
        },
        {
            id: 2,
            stepName: 'Step 2',
            title: 'Sign up or Login',
            description: 'Join existing and ongoing rooms for focus and connection or create your personalized study space.',
            buttonText: 'Sign up now',
            image: tab2
        },
        {
            id: 3,
            stepName: 'Step 3',
            title: 'Sign up or Login',
            description: 'Join existing and ongoing rooms for focus and connection or create your personalized study space.',
            buttonText: 'Sign up now',
            image: tab3
        },
    ]

    const handleTabChange = (id) => {
        setActiveTab(id)
        console.log(id);

    }
    return (
        <section className="py-6">
            <div className="container p-4 mx-auto sm:p-10">
                <div className="mb-12 space-y-16 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-semibold leading-tight text-grayText">How it works</h1>
                        <p className="px-4 sm:px-8 lg:px-24 text-grayText/70">A step-by-step clear and straightforward guide to the booking process.</p>
                    </div>
                    <div>
                        <div className="tabs-container w-full space-y-5">
                            <ul className="flex items-center justify-center gap-4 rounded-2xl">
                                {/* {tabsData.map((data, i) => (
                                    <li key={data.id} className={`text-2xl p-5 w-20 text-center text-grayText bg-secondary rounded-2xl cursor-pointer transition-all ${activeTab === data.id ? 'active block bg-accent ' : ''}`} onClick={() => handleTabChange(data.id)}>{data.stepName}</li>
                                ))} */}
                                {tabsData.map((data) => (
                                    <li
                                        key={data.id}
                                        className={`text-2xl py-2 px-4 text-center cursor-pointer transition-all rounded-2xl ${activeTab === data.id ? 'bg-accent text-white' : 'bg-secondary text-grayText'
                                            }`}
                                        onClick={() => handleTabChange(data.id)}
                                    >
                                        {data.stepName}
                                    </li>
                                ))}
                            </ul>
                            <div className="content w-full overflow-hidden">
                                {/* {tabsData.map((data, i) => (
                                    <div key={data.id} className={`desc w-full text-2xl p-5 leading-snug rounded-2xl min-h-[75px] hidden ${activeTab === data.id ? 'active block bg-accent ' : ''}`}>{data.description}</div>
                                ))} */}
                                {tabsData.map((data) => (
                                    <div
                                        key={data.id}
                                        className={`desc text-xl p-5 leading-snug rounded-2xl transition-opacity duration-300 ${activeTab === data.id ? 'opacity-100' : 'opacity-0 hidden'
                                            }`}
                                    >
                                        {activeTab === data.id && (
                                            <div className="border border-secondary flex flex-col md:flex-row gap-5">
                                                <div className="flex-1 flex flex-col items-start justify-center p-5 gap-7">
                                                    <h2 className="text-grayText text-4xl">{data.title}</h2>
                                                    <h2 className="text-grayText/80 text-sm text-left">{data.description}</h2>
                                                    <Link to='/signUp'>
                                                        <button type="button" className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText">See Details
                                                            <ArrowRight />
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="flex-1 w-full">
                                                    <img src={data.image} alt="" className="w-full h-96 object-cover" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks