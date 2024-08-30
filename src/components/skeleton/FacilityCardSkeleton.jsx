import { Skeleton } from "../ui/skeleton"

const FacilityCardSkeleton = () => {
    return (
        <div>
            <div className='max-w-[1480px] mx-auto container overflow-hidden px-10 pb-20'>
                {/* <Skeleton className="h-[25px] w-full rounded-xl" /> */}
                <Skeleton className=' font-bold text-center pb-14 pt-5 w-12'></Skeleton>
                <div className="flex items-center justify-center pb-12">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Skeleton className='flex h-10 w-full rounded-full border border-slate-200 bg-white px-3 py-2'>

                        </Skeleton>
                        <Skeleton className={'inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-md'}>
                        </Skeleton>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <Skeleton className="flex-1 bg-secondary h-56 w-full md:w-72 rounded-2xl p-4 space-y-4">

                    </Skeleton>
                    <Skeleton className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 flex-2'>
                        {
                            Array.from({ length: 5 }).map((facility, i) => <div key={i} className="rounded-2xl border border-secondary shadow-xl bg-primary/40 w-96">
                                <div className="relative">
                                    <Skeleton className="object-cover object-center w-44 rounded-t-md h-72 bg-gray-500" />
                                    <div className="flex items-center gap-1 bg-grayText text-primary p-2 rounded-full absolute top-4 left-5">
                                        <Skeleton />
                                        <Skeleton className="text-sm"></Skeleton>
                                    </div>

                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-end">
                                                    <Skeleton className="text-4xl font-semibold tracking-wide text-grayText"></Skeleton>

                                                </div>

                                            </div>
                                            <Skeleton className="text-grayText text-2xl"></Skeleton>
                                            <Skeleton className="text-grayText/80 text-sm"></Skeleton>
                                        </div>
                                        <Skeleton>
                                            <Skeleton className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-full bg-accent text-grayText">
                                            </Skeleton>
                                        </Skeleton>
                                    </div>
                                </div>
                                {/* Show Modal */}
                                {/* {openModal && (
                                    <BookingModal openModal={openModal} setOpenModal={setOpenModal} facilityIdForModal={facilityIdForModal} />
                                )} */}
                            </div>)
                        }
                    </Skeleton>
                </div>

            </div>

        </div>
    )
}

export default FacilityCardSkeleton