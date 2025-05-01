"use client";
import { NavbarWrapper, NavLink } from "./Styled";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div>Harper Zhu</div>
      <div>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </NavbarWrapper>
  );
}
