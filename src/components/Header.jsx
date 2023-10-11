import React from "react";
import { MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { Logo } from "../data";

function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  const navList = (
    <ul className="flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center sm:items-center lg:gap-6">
      <div className="bg-[#8a2be2] rounded-sm cursor-pointer">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#Home" className="flex items-center text-base text-white">
            Home
          </a>
        </Typography>
      </div>

      <div className="hover:bg-[#8a2be2] rounded-sm cursor-pointer">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#About" className="flex items-center text-base text-white">
            About
          </a>
        </Typography>
      </div>
      <div className="hover:bg-[#8a2be2] rounded-sm cursor-pointer">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#Portfolio"
            className="flex items-center text-base text-white"
          >
            Portfolio
          </a>
        </Typography>
      </div>
      <div className="hover:bg-[#8a2be2] rounded-sm cursor-pointer">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#Contact" className="flex items-center text-base text-white">
            Contact
          </a>
        </Typography>
      </div>
    </ul>
  );

  return (
    <div className="mx-auto w-full py-3 px-4 lg:px-8 lg:py-4 fixed z-50 header bg-[#000]">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex cursor-pointer">
          <div>
            <img className="w-10" src={Logo} alt="Logo" />
          </div>
          <div className="flex justify-center items-center font-bold text-xl text-white cursor-pointer">
            <span>Webbify</span>
          </div>
        </div>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto mt-3">{navList}</div>
      </MobileNav>
    </div>
  );
}

export default Header;
