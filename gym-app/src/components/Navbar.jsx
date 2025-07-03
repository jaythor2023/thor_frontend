import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
    <nav className="bg-gray-900 text-white px-6 py-4 relative flex items-center justify-between shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Thor Fitness" className="h-10 w-30 object-contain" />
        <span className="text-xl font-bold text-blue-300">Thor Fitness</span>
      </div>

      {/* Center: Gallery Link */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/gallery" className="text-blue-500 font-semibold text-lg">
          Gallery
        </Link>
      </div>

      {/* Right: Future buttons/links (if any) */}
      <div className="mr-50">
        {/* You can add login/book/etc. here if needed */}
        <Link to="/book" className="hover:text-gray-400">Book</Link>
      </div>
    </nav>
  );
}
