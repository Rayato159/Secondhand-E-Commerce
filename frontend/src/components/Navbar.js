const Navbar = () => {
    return (
        <div className="Navbar">

            <nav className="bg-gray-600">
                <div className="max-w-7xl mx-auto">
                    <div className="flex text-white justify-between">

                        <div className="flex space-x-4 py-4">
                            <a href="http://localhost:3435">Logo</a>
                            <div>Searchbar</div>
                        </div> 

                        <div className="flex space-x-4 py-4">      
                            <a href="http://localhost:3435/register">Register</a>
                            <a href="http://localhost:3435/login">Login</a>
                            <div>Sell</div>
                        </div> 

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar