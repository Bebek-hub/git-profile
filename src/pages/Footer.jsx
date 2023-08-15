import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import {SiHashnode} from "react-icons/si"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer_line"></div>
        <p className="footer_message">
            &copy;Copyright 2023; God&apos;sFavour Omoare
        </p>
        <div className="header_sub-icons">
          <Link to="https://github.com/Bebek-hub/" target="_blank" className="icon">
            <FaGithub />
          </Link>
          <Link to="https://hashnode.com/@Tioluwalope" target="_blank" className="icon"> 
            <SiHashnode />
          </Link>
          <Link to="https://www.linkedin.com/in/omoaregodsfavour" target="_blank" className="icon">
            <FaLinkedinIn />
          </Link>
          <Link to="https://medium.com/@omoaregodsfavour" target="_blank" className="icon">
            <FaMediumM />
          </Link>
        </div>
    </section>
  )
}

export default Footer