import SetDate from "../components/SetDate";
import { FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header_logo">Favvy</h1>
      <div className="header_sub">
        <p className="header_sub-date" ><SetDate /></p>
        <div className="header_sub-icons">
          <Link to="https://github.com/Bebek-hub/" target="_blank" className="icon">
            <FaGithub />
          </Link>
          <Link to="https://hashnode.com/@Tioluwalope" target="_blank" className="icon">
            <SiHashnode />
          </Link>
          <Link className="icon">
          <MdOutlineLightMode />
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
