import { Link, Outlet } from "react-router";

function Layout() {
    return (
        <>
            <header className="bg-gray-900 text-white p-4 flex justify-center items-center">
                <h1 className="text-5xl font-bold">Notes App</h1>
            </header>
            <nav className="bg-gray-800 text-white p-4 flex justify-between">
                <Link to={"/"} className="py-2 px-4 hover:bg-blue-500 rounded flex-1 text-center">Home</Link>
                <Link to={"/notes"} className="py-2 px-4 hover:bg-blue-500 rounded flex-1 text-center">Notes</Link>
                <Link to={"/notes/create"}
                      className="py-2 px-4 hover:bg-blue-500 rounded flex-1 text-center">Create</Link>
                <Link to={"/about"} className="py-2 px-4 hover:bg-blue-500 rounded flex-1 text-center">About</Link>
            </nav>
            <main className="bg-gray-900 text-white p-4">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;
