

const FeaturedFacilitiesSkeleton = () => {
    return (
        <div className="p-1 animate-pulse">
            <div className="rounded-lg border border-secondary shadow-lg bg-secondary/20 h-full w-full relative">
                <div className="relative group cursor-pointer overflow-hidden duration-500 w-full h-full">
                    <div className="bg-gray-300 w-full h-[369px] md:h-44 lg:h-48 xl:h-72 rounded-lg"></div>
                    <div className="absolute left-0 p-5 -bottom-12 duration-500 group-hover:-translate-y-12">
                        <div className="h-6 bg-gray-300 w-3/4 rounded mt-3"></div>
                        <div className="h-4 bg-gray-300 w-1/2 rounded mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedFacilitiesSkeleton