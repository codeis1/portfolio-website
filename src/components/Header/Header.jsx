import React, { useEffect, useState } from "react";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./header.css";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-medium">
        <a href="#Home" className="flex transition-colors li">
          Home
        </a>
      </li>
      <li color="blue-gray" className="p-1 font-medium ">
        <a href="#About" className="flex items-center transition-colors li">
          About
        </a>
      </li>
      <li color="blue-gray" className="p-1 font-medium ">
        <a
          href="#Experience"
          className="flex items-center transition-colors li"
        >
          Experience
        </a>
      </li>
      <li color="blue-gray" className="p-1 font-medium ">
        <a href="#Portfolio" className="flex items-center transition-colors li">
          Portfolio
        </a>
      </li>
      <li color="blue-gray" className="p-1 font-medium ">
        <a href="#Contact" className="flex items-center transition-colors li">
          Contact
        </a>
      </li>
    </ul>
  );
}

function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const navbarStyle = {
    backgroundColor: scrollPosition > 100 ? "rgba(255,142,121, 0.9)" : "black",
    transition: "background-color 200ms linear",
  };

  return (
    <div
      className="w-full fixed z-10 header-cont"
      style={navbarStyle}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-[white]"
        >
          Ravol Ashmeade
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-[white]"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}

export default Header;
