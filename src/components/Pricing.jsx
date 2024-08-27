import { ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"


const Pricing = () => {
    return (
        <div>
            <section className="py-6">
                <div className="container p-4 mx-auto sm:p-10">
                    <div className="mb-12 space-y-4 text-center">
                        <h1 className="text-4xl font-semibold leading-tight text-grayText">Pricing</h1>
                        <p className="px-4 sm:px-8 lg:px-24 text-grayText/70">Sunt suscipit eaque qui iure unde labore numquam iusto alias explicabo, pariatur ipsam, cupiditate aliquid modi?</p>
                        <div>
                            <button className="px-4 py-1 font-semibold border rounded-l-lg bg-secondary border-secondary text-gray-50">Monthly</button>
                            <button className="px-4 py-1 border rounded-r-lg border-secondary text-grayText">Annually</button>
                        </div>
                    </div>
                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
                        <div className="flex flex-col overflow-hidden border-2 rounded-md border-secondary">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-secondary">
                                <p className="text-lg font-medium text-grayText">Personal</p>
                                <p className="text-5xl font-bold text-grayText">0€
                                    <span className="text-xl text-grayText/70">/mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                </ul>
                                <Link to='/signUp'>
                                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded-full sm:mt-12 bg-accent text-gray-50">Sign up</button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden border-2 rounded-md border-grayText">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-secondary">
                                <p className="text-lg font-medium text-grayText">Professional</p>
                                <p className="text-5xl font-bold text-grayText">8€
                                    <span className="text-xl text-grayText/70">/mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                </ul>
                                <Link to='/signUp'>
                                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded-full sm:mt-12 bg-accent text-gray-50">Sign up</button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden border-2 rounded-md border-secondary">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-secondary">
                                <p className="text-lg font-medium text-grayText">Enterprise</p>
                                <p className="text-5xl font-bold text-grayText">19€
                                    <span className="text-xl text-grayText/70">/mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                        <span className="text-grayText">Lumet consectetur adipisicing</span>
                                    </li>
                                </ul>
                                <Link to='/signUp'>
                                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded-full sm:mt-12 bg-accent text-gray-50">Sign up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Pricing