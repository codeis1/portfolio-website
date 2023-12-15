// import Logo from "../data.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <footer className="py-24 flex justify-center content-center flex-col">
        <div className="w-full flex justify-center content-center mx-[#400] pb-3">
          <a className="cursor-pointer mx-2" href="https://github.com/codeis1">
            <FaGithub className="text-white text-[30px]" />
          </a>
          <a
            className="cursor-pointer mx-2"
            href="https://www.linkedin.com/in/ravol-ashmeade246645/"
          >
            <FaLinkedin className="text-white text-[30px]" />
          </a>
        </div>
        <p className="text-center text-[#fff]">
          <span className="text-[#c5c5c5]">All rights reserved</span> © {year}{" "}
          Ravol Ashmeade
        </p>
      </footer>
    </div>
  );
};

export default Footer;
