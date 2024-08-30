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
            description: 'Join our community and be an honorable member to book and enjoy our facilities.',
            buttonText: 'Sign up now',
            image: tab1
        },
        {
            id: 2,
            stepName: 'Step 2',
            title: 'Visit our facilities',
            description: 'Visit our robust and rich facilities collections.',
            buttonText: 'Sign up first',
            image: tab2
        },
        {
            id: 3,
            stepName: 'Step 3',
            title: 'Book and Pay',
            description: 'Book our facilities by our robust booking system and dashboard management system',
            buttonText: 'Sign up now',
            image: tab3
        },
    ]

    const handleTabChange = (id) => {
        setActiveTab(id)
        console.log(id);

    }
    return (
        <section className="py-16 md:py-32">
            <div className="container p-4 mx-auto sm:p-10">
                <div className="mb-12 space-y-10 text-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-grayText">How it works</h1>
                        <p className="px-4 sm:px-8 lg:px-24 text-grayText/70">A step-by-step clear and straightforward guide to the booking process.</p>
                    </div>
                    <div>
                        <div className="tabs-container w-full space-y-5">
                            {/* <ul className="flex items-center justify-center gap-4 rounded-2xl">
                               
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
                            </ul> */}
                            <div className="flex justify-center">
                                <ul className="grid grid-flow-col text-center text-primary bg-grayText rounded-full p-1 w-2/3 md:w-2/4">
                                    {tabsData.map((data) => (
                                        <li key={data.id}>
                                            <a href="#page1" className={`flex justify-center py-2 md:py-3 ${activeTab === data.id ? 'bg-accent rounded-full shadow text-grayText' : ''
                                                }`}
                                                onClick={() => handleTabChange(data.id)}
                                            >{data.stepName}</a>
                                        </li>
                                    ))}
                                    {/* <li>
                                    <a href="#page2" className="flex justify-center bg-white rounded-full shadow text-indigo-900 py-4">Titan maintenance</a>
                                </li> */}

                                </ul>
                            </div>
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
                                            <div className="border border-secondary flex flex-col-reverse rounded-2xl md:flex-row">
                                                <div className="flex-1 flex flex-col items-center md:items-start justify-center p-5 gap-10">
                                                    <h2 className="text-grayText text-4xl max-w-[250px] text-center md:text-left">{data.title}</h2>
                                                    <h2 className="text-grayText/80 text-lg text-center md:text-left max-w-xs">{data.description}</h2>
                                                    <Link to='/signUp'>
                                                        <button type="button" className="flex items-center justify-between w-full px-3 py-2 font-semibold tracking-wide rounded-full bg-accent text-grayText text-lg gap-3">{data.buttonText}
                                                            <ArrowRight />
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="flex-1 w-full rounded-2xl">
                                                    <img src={data.image} alt="" className="w-full h-80 md:h-[500px] object-cover rounded-t-2xl md:rounded-tr-2xl md:rounded-tl-none" />
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