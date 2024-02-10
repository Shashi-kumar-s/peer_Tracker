import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/AM_Logo.png"
import "../navbar/Navbar.css"

const navLink = [
    { id: "1", name: "Summary", link: "/" },
    { id: "2", name: "FY2023 Award", link: "/FY2023Award" },
    { id: "3", name: "FY2022 Award", link: "/FY2022Award" },
    { id: "4", name: "FY2021 Award", link: "/FY2021Award" },
    { id: "5", name: "Historical Awards", link: "/HistoricalAwards" },
]

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-400 body-font border-b-4">
                <div className="container mx-auto flex flex-wrap px-5 pt-8 pb-1 flex-col md:flex-row">
                    <Link to="/" className="flex title-font font-medium items-center text-[#4D4F53] mb-4 md:mb-0">
                        <img src={logo} alt="logo" />
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-end text-base text-[#4D4F53] justify-center space-x-10">
                        {navLink.map((ele) => <NavLink to={ele.link} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } key={ele.id}>{ele.name}</NavLink>)}
                    </nav>
                    <p className="text-[#4575a2] text-4xl italic">Peer Tracker</p>
                </div>
            </header>
        </div>
    )
}

export default Navbar
