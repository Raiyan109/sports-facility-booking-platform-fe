import { Link } from "react-router-dom"


const Custom404 = () => {
    return (
        <div className="min-h-screen flex flex-grow items-center justify-center">
            <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="text-gray-600 mb-4">Oops! The page you are looking for could not be found.</p>
                <Link to="/" ><button className="bg-accent px-5 py-3 rounded-full text-xl text-white">Go back to Home</button></Link>
            </div>
        </div>
    )
}

export default Custom404