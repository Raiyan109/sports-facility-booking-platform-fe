import { useState } from "react"

const AllFacilityList = () => {
    const [openModal, setOpenModal] = useState(false)
    const [facilityIdForModal, setFacilityIdForModal] = useState('')


    const handleModal = (id) => {
        setOpenModal(!openModal)
        setFacilityIdForModal(id)
    }
    return (
        <div className="">

            {/* Show Modal */}
            {/* {openModal && (
                <BookingModal openModal={openModal} setOpenModal={setOpenModal} facilityIdForModal={facilityIdForModal} />
            )} */}
        </div>
    )
}

export default AllFacilityList