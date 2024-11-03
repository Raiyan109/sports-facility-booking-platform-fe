

const FacilityCardSkeleton = () => {
    return (
        <div className="animate-pulse rounded-2xl border border-secondary shadow-xl bg-primary/20">
            <div className="relative h-72 bg-secondary rounded-t-2xl"></div>
            <div className="p-6 space-y-8">
                <div className="space-y-2">
                    {/* price and rating */}
                    <div className="flex justify-between items-center">
                        <div className="h-6 w-20 bg-secondary rounded"></div>
                        <div className="h-6 w-10 bg-secondary rounded"></div>
                    </div>
                    {/* title */}
                    <div className="h-8 w-3/4 bg-secondary rounded"></div>
                    {/* description */}
                    <div className="h-5 w-1/2 bg-secondary rounded"></div>
                </div>
                {/* button */}
                <div className="h-10 w-full bg-secondary rounded-full"></div>
            </div>
        </div>
    )
}

export default FacilityCardSkeleton