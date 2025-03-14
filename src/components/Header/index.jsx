import React, { useEffect, useState } from "react";
import { StyledHeader } from "./Header.style";
import LogoLg from "../../../public/images/logo.png";
import MenuIcon from "../../../public/images/menuIcon.svg";
import Image from "next/image";
import Button from "../molecules/Button";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const navList = ["home", "about", "education", "experience", "projects"];

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBar = () => {
    setMenuBar(!menuBar);
  };
  useEffect(() => {
    document.body.style.overflow = menuBar ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuBar]);
  return (
    <StyledHeader className="container">
      <Link href="/" className="logo">
        <Image src={LogoLg} alt="logo" />
      </Link>
      <ul className="list-wrap">
        {navList?.map((item, index) => (
          <Link key={index} href={`/${item === "home" ? "/" : item}`}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
      <Button variant="outline" width="157px" className="btn">
        Contact
      </Button>

      <Image
        src={MenuIcon}
        alt="menuIcon"
        className="menuIcon"
        onClick={handleMenuBar}
      />

      <div className={`${menuBar ? "sideBar sideBar-active" : "sideBar"}`}>
        <div className="closeIcon">
          <IoClose color="white" size={22} onClick={handleMenuBar} />
        </div>
        <ul className="sm-list-wrap">
          {navList?.map((item, index) => (
            <Link key={index} href={`/${item}`}>
              <li>{item}</li>
            </Link>
          ))}
        </ul>
        <Button variant="outline" width="157px" className="sm-btn">
          Contact
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
