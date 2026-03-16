

const Navbar=()=>{
    return(
        <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">SmartReserve</h1>
      <div className="space-x-4">
       <li link='#'>Home</li>
       <li>Register</li>
       <li>Login</li>
      </div>
    </nav>
    )

}
export default Navbar
