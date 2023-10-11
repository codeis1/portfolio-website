// import Logo from "../data.js";
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className="footer-container">
        <footer className="py-24 flex justify-center content-center flex-col">
          <div className="w-full flex justify-center content-center mx-[#400] pb-3">
            <a className="cursor-pointer mx-2" src="">
              <FaFacebook fontSize={40} className="text-white" />
            </a>
            <a className="cursor-pointer mx-2" src="">
              <FaTwitter fontSize={40} className="text-white" />
            </a>
            <a className="cursor-pointer mx-2" href="https://tiktok.com/@1timoyash">
              <FaTiktok fontSize={40} className="text-white" />
            </a>
            <a className="cursor-pointer mx-2" src="">
              <FaInstagram fontSize={40} className="text-white" />
            </a>
          </div>
          <p className="text-center text-[#fff]">
            <span className="text-[#c5c5c5]">All rights reserved</span> © {year}{" "}
            Ravol Ashmeade
          </p>
        </footer>
      </div>
    </div>
  );
};

{
  /* 
      <div>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div></div>
      </div>
    </div> */
}

{
  /* <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul> */
}

export default Footer;
