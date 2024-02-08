import { Link } from "react-router-dom";
import foody from "../assets/foody.png";
export const Header = () => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img src={foody}  className="w-40 h-40 object-cover"/>
                    </Link>                    
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link className="text-xl">Home</Link>
                    <Link className="text-xl">About</Link>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                    <Link to="/cart">Cart</Link>
                    <Link to="/login">Log in</Link>
                    <Link to="/register">Sign up</Link>
                </div>
            </div>
        </nav>
    )
}