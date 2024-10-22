import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const { user } = useContext(UserContext);
  
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white text-gray-900 py-4 px-6 flex justify-between items-center shadow">
      {/* Left side content */}
      <div className="flex items-center space-x-4">
        {/* LOGO */}
        <Link to="/" className="Logo flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#bb0018"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="font-bold text-xl">Ride Mate</span>
        </Link>
      </div>

      {/* Centered Navigation Links */}
      <nav className="flex flex-grow justify-center space-x-8">
        <Link to="/" className="text-lg hover:text-red-500">Home</Link>
        <Link to="/about" className="text-lg hover:text-red-500">About</Link>
        <Link to="/blog" className="text-lg hover:text-red-500">Blog</Link>
        <Link to="/services" className="text-lg hover:text-red-500">Services</Link>
        <Link to="/contactus" className="text-lg hover:text-red-500">Contact</Link>
      </nav>

      {/* Right side content */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Profile Menu */}
        {user && (
          <div className="text-gray-900 text-m hidden md:block">
            Welcome, <span className="font-semibold">{user.name}</span>
          </div>
        )}
        <Link
          to={user ? "/account" : "/login"}
          className="ProfileMenu flex items-center gap-2 border border-gray-300 rounded-full py-2 px-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          {!!user && <div>{user.name}</div>}
        </Link>

        {/* Post Ride Link */}
        <Link
          to="/publride"
          className="PostRide flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus-circle h-6 w-6 mr-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12h8"></path>
            <path d="M12 8v8"></path>
          </svg>
          <span>Post ride</span>
        </Link>

        {/* Search Button */}
        <Link
          to={"/services"}
          className="SearchButton bg-primary text-white p-1 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
