import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex flex-wrap justify-between items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg my-4 mx-4">
            <div className="logo items-center">
                <Image src="/logo.png" alt="logo" width={40} height={40} />
            </div>
            <div className="flex flex-wrap justify-center items-center">
                <ul className="flex list-none">
                    <li className="mr-4 hover:text-blue-300"><a href="#todos" className="font-semibold text-md">Todos</a></li>
                    <li className="mr-4 hover:text-blue-300"><a href="#fav-todos" className="font-semibold text-md">Fav-Todos</a></li>
                </ul>
            </div>
            <div className="flex items-center">
                <button className="bg-gray-700 hover:bg-gray-600 hover:text-blue-300 text-white font-semibold py-2 px-4 rounded">
                    Profile
                </button>
            </div>
        </nav>
    );
};

export default Navbar;