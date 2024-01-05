import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between bg-white sm:px-8 px-4 py-4 border-b border-b-slate-100 ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 " />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 border-b border rounded-md"
      >
        Create
      </Link>
    </header>
  );
};

export default Header;
