
const Button = ({ text }) => {
    return (
        <div className="">
            <button className="bg-accent text-white px-4 py-2 hover:shadow-lg rounded-full text-sm active:scale-95">{text}</button>
        </div>
    )
}

export default Button