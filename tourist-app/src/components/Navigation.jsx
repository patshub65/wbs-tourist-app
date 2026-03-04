import { Link, NavLink } from "react-router";

function Navigation() {

    return (
        <header className="navbar flex bg-white shadow-sm">
        <div className="mx-auto flex max-w-full items-center justify-between gap-8">
            <Link to="/" className="px-2 text-2xl font-bold text-black hover:bg-gray">
            Spacie Travels
            </Link>
        <nav className="flex">
            <ul className="nav-items flex gap-1 px-1">
                {[
                    { to: "/", label: "Home"},
                    { to: "/About", label: "About"},
                    { to: "/Destinations", label: "Destinations"},
                    { to: "/Contact", label: "Contact"},
                ].map((item) => (
                    <li key={item.to}>
                        <NavLink
                            className={({isActive}) =>
                                `font-bold ${isActive ? "text-[#222222]" : "text-[#6a6a6a] hover:text-[#222222]"}`
                        }
                        to={item.to}
                        >
                            {item.label}
                            </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
        </header>
    );
    
}

export default Navigation;