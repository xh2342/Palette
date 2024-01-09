import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between sm:px-8 px-4 py-3  ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 text-white" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
  );
};

export default Header;
