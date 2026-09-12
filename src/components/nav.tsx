import Logo from "../assets/logo-text.png";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
  return (
    <nav className="container mx-auto px-3 py-3 sticky top-0 z-50">

      <div className="flex items-center justify-between">

        <button className="md:hidden">
          <FiMenu size={22} />
        </button>

        <img
          className="w-25 md:w-35 md:mr-10"
          src={Logo}
          alt="Dev Stack"
        />


        <ul className="hidden md:flex items-center justify-center gap-5 flex-1">
          <li className="text-[#db2777]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-2">

          <button className="btn border border-[#db2777] rounded-3xl px-2 md:px-3 text-xs md:text-sm">
            Sign In
          </button>

          <button className="btn btn-secondary rounded-3xl px-3 md:px-4 text-xs md:text-sm">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
}