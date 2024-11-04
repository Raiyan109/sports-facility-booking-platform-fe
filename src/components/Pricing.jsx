import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Assuming you have an icon library for ShieldCheck

const Pricing = () => {
    const [planType, setPlanType] = useState('monthly');

    const pricingData = {
        monthly: [
            { title: 'Personal', price: '0€', features: ['Life time membership', '48-hour support', 'Member resources'] },
            { title: 'Professional', price: '8€', features: ['Life time membership', 'Private forum access', 'Member resources'] },
            { title: 'Enterprise', price: '19€', features: ['Life time membership', 'Private forum access', 'Member resources'] },
        ],
        annually: [
            { title: 'Personal', price: '0€', features: ['Life time membership', 'Private forum access', 'Member resources'] },
            { title: 'Professional', price: '80€', features: ['Life time membership', 'Private forum access', 'Member resources'] },
            { title: 'Enterprise', price: '190€', features: ['Life time membership', 'Automatic machines', 'Member resources'] },
        ]
    };

    return (
        <section className="py-16 md:pb-32">
            <div className="container p-4 mx-auto sm:p-10">
                <div className="mb-12 space-y-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-grayText">Pricing</h1>
                    <p className="px-4 sm:px-8 lg:px-24 text-grayText/70">Read our pricing plan and choose wisely your favorite one.</p>
                    <div>
                        <button
                            className={`px-4 py-1 font-semibold border rounded-l-lg ${planType === 'monthly' ? 'bg-secondary text-gray-50' : 'bg-grayText text-secondary font-bold'}`}
                            onClick={() => setPlanType('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-1 border rounded-r-lg ${planType === 'annually' ? 'bg-secondary text-gray-50' : 'bg-grayText text-secondary font-bold'}`}
                            onClick={() => setPlanType('annually')}
                        >
                            Annually
                        </button>
                    </div>
                </div>
                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
                    {pricingData[planType].map((plan, index) => (
                        <div key={index} className={`flex flex-col overflow-hidden border-2 rounded-md ${planType === 'annually' && plan.title === 'Professional' ? 'border-accent' : 'border-secondary'}`}>
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-secondary">
                                <p className="text-lg font-medium text-grayText">{plan.title}</p>
                                <p className="text-5xl font-bold text-grayText">{plan.price}
                                    <span className="text-xl text-grayText/70">/{planType === 'monthly' ? 'mo' : 'yr'}</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8">
                                <ul className="self-stretch flex-1 space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex justify-center space-x-2">
                                            <ShieldCheck fill="#d1d7e0" color="#564f6f" />
                                            <span className="text-grayText">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to='/signUp'>
                                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded-full sm:mt-12 bg-accent text-gray-50">Sign up</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
