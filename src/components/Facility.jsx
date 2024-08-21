
const Facility = ({ facility }) => {
    return (
        <div className="bg-secondary rounded-xl p-6 h-52">
            <h1 className="text-2xl text-grayText">{facility.name}</h1>
        </div>
    )
}

export default Facility