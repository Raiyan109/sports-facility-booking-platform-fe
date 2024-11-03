

const DummyAdminCred = ({ fillUserCredentials, fillAdminCredentials }) => {
    return (

        <div className="flex gap-3 ">

            <div className="relative group" onClick={fillAdminCredentials}>
                <p className="text-primary text-xl underline font-bold ">Admin Credentials </p>

                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition duration-100 transform group-hover:translate-y-0 translate-y-2"
                >
                    <div className="bg-primary w-max max-w-xs text-white rounded-lg px-4 py-4">
                        <p className="text-white">Admin Credentials</p>
                        <p className="text-gray-500 text-sm">Email: admin1@g.com</p>
                        <p className="text-gray-500 text-sm">Password: 123456</p>
                    </div>
                </div>
            </div>

            <div className="relative group" onClick={fillUserCredentials}>
                <p className="text-primary text-xl underline font-bold cursor-pointer">User Credentials </p>

                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition duration-100 transform group-hover:translate-y-0 translate-y-2"
                >
                    <div className="bg-primary w-max max-w-xs text-white rounded-lg px-4 py-4">
                        <p className="text-white">User Credentials</p>
                        <p className="text-gray-500 text-sm">Email: user1@g.com</p>
                        <p className="text-gray-500 text-sm">Password: 123456</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default DummyAdminCred