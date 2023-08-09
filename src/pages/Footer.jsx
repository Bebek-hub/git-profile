import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import {SiHashnode} from "react-icons/si"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
        <p className="footer_message">
            &copyright; God&apos;sFavour Omoare
        </p>
        <div className="header_sub-icons">
          <Link to="https://github.com/Bebek-hub/" target="_blank">
            <FaGithub />
          </Link>
          <Link>
            <SiHashnode />
          </Link>
          <Link>
            <FaLinkedinIn />
          </Link>
          <Link>
            <FaMediumM />
          </Link>
        </div>
    </section>
  )
}

export default Footer