import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"

const Layout = () => {
    return (
        <div className="bg-white">
            <Navbar />

            <Homepage />
        </div>
    )
}

export default Layout