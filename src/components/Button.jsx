
const Button = ({ text }) => {
    return (
        <div>
            <button className="bg-primary text-white px-10 py-4 m-10 hover:shadow-lg rounded-2xl active:scale-95">{text}</button>
        </div>
    )
}

export default Button