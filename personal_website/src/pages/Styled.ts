import styled from "styled-components";
import Link from "next/link";

// Layout
export const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Typography
export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const SubText = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

// Buttons
export const ButtonPrimary = styled.a`
  display: inline-block;
  background: black;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background: #222;
  }
`;

export const ButtonSecondary = styled.a`
  display: inline-block;
  border: 1px solid black;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background: #f9f9f9;
  }
`;

// Grid for projects
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

// Project Card
export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.75rem;
`;

export const CardSubtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
`;

// Navbar
export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #eaeaea;
  font-weight: 500;
`;

export const NavLink = styled(Link)`
  margin-left: 1.5rem;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
