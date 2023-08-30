import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import OpenSvg from "@/atoms/OpenSvg";
import CloseSvg from "@/atoms/CloseSvg";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <NavBrand href="/">SHIV</NavBrand>
          <NavLinkDesktop>
            <NavLink active={router.pathname === "/"}>
              <Link href="/">Home</Link>
            </NavLink>
            <NavLink active={router.pathname === "/testingDesign"}>
              <Link href="/testingDesign">Testing Design</Link>
            </NavLink>
            <NavLink active={router.pathname === "/readMore"}>
              <Link href="/readMore">Apps</Link>
            </NavLink>
            <NavLink active={router.pathname === "/testingDesign"}>
              <Link href="/tabChange">tabChange</Link>
            </NavLink>
            <NavLink>
              <Link href="https://shivlahejat.netlify.app/" target="_blank">
                About us
              </Link>
            </NavLink>
          </NavLinkDesktop>
          <MobileNavToggle onClick={toggleMobileNav}>
            {isOpen ? <CloseSvg /> : <OpenSvg />}
          </MobileNavToggle>
          <MobileNavLinks isOpen={isOpen}>
            <LinkWrap>
              <NavLink active={router.pathname === "#"}>
                <Link href="/">Home</Link>
              </NavLink>
              <NavLink active={router.pathname === "/testingDesign"}>
                <Link href="/testingDesign">Testing Design</Link>
              </NavLink>
              <NavLink active={router.pathname === "/readMore"}>
                <Link href="/readMore">Apps</Link>
              </NavLink>
              <NavLink active={router.pathname === "/testingDesign"}>
                <Link href="/tabChange">tabChange</Link>
              </NavLink>
              <NavLink>
                <Link href="https://shivlahejat.netlify.app/" target="_blank">
                  About us
                </Link>
              </NavLink>
            </LinkWrap>
          </MobileNavLinks>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};

export default NavBar;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 999999999999;
  justify-content: center;
`;

const NavContainer = styled.nav`
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding: 10px;
  width: 100%;

  @media (max-width: 990px) {
    justify-content: flex-end;
  }
`;

const NavBrand = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  font-family: "MulishSemiBold";
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  img {
    height: 50px;
    width: 50px;
    mix-blend-mode: multiply;
  }
`;

const NavLinkDesktop = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;

  @media (max-width: 990px) {
    display: none;
  }

  a {
    text-decoration: none;

    &:hover {
      color: #0056b3;
    }
  }
`;

const NavLink = styled.li`
  font-size: 20px;
  cursor: pointer;

  a {
    display: flex;
    width: 100%;
    color: ${({ active }) => (active ? "rgba(31,21,52,1)" : "#1F1534")};
    font-size: 18px;
    font-family: "MulishSemiBold";
    opacity: ${({ active }) => (active ? "1" : "0.5")};

    &:hover {
      text-decoration: none;
      color: ${({ active }) => (active ? "#F00" : "#0056b3")};
    }
  }
`;

const MobileNavToggle = styled.div`
  display: none;

  @media (max-width: 990px) {
    display: block;
    cursor: pointer;
    z-index: 9999 !important;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: #cdcdcd;
  padding: 15px;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 990px) {
    display: none;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  gap: 30px;
  padding: 0 20px;
`;
