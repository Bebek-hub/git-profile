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
          <Link to="https://github.com/Bebek-hub/" target="_blank" className="btn">
            <FaGithub />
          </Link>
          <Link className="btn">
            <SiHashnode />
          </Link>
          <Link className="btn">
          <MdOutlineLightMode />
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
