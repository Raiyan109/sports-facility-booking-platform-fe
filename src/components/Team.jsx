

const Team = () => {
    return (
        <div>
            <div className="py-20">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-center text-4xl text-grayText font-bold md:text-5xl">Our Team</h2>
                        <p className="text-grayText/70 lg:w-8/12 lg:mx-auto">Meet the team behind Play Time Hub</p>
                    </div>
                    <div className="grid gap-12 items-center md:grid-cols-3">
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805" />
                            <div>
                                <h4 className="text-2xl text-grayText">Hentoni Doe</h4>
                                <span className="block text-sm text-grayText/70">CEO-Founder</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                                src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667" />
                            <div>
                                <h4 className="text-2xl text-grayText">Jonathan Doe</h4>
                                <span className="block text-sm text-grayText/70">Chief Technical Officer</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                            <div>
                                <h4 className="text-2xl text-grayText">Anabelle Doe</h4>
                                <span className="block text-sm text-grayText/70">Chief Operations Officer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team