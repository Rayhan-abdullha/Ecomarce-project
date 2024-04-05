const Login = () => {
    return (
        <div className="max-w-[500px] mx-auto px-4 py-[100px]">
            <h2 className="text-[18px] uppercase mb-3 text-center">Login</h2>
            <form className="flex flex-col gap-4">
                <input className="outline-0 p-2 px-4" type="text" placeholder="Enter yor email" readOnly/>
                <input className="outline-0 p-2 px-4" type="text" placeholder="Enter yor password" readOnly />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Login