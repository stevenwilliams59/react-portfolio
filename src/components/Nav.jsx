import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.ul`
  color: ${(props) => props.theme.colours.backgroundLight};
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const ListItem = styled.li`
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  &:hover {
    background: ${(props) => props.theme.colours.backgroundLight};
    color: ${(props) => props.theme.colours.primaryDark};
    cursor: pointer;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Link to="projects" spy={true} smooth={true}>
        <ListItem>Projects</ListItem>
      </Link>
      <Link to="about" spy={true} smooth={true}>
        <ListItem>About Me</ListItem>
      </Link>
    </Nav>
  );
}

// * activeClass - class applied when element is reached
// * to - target to scroll to
// * spy - make Link selected when scroll is at its targets position
// * smooth - animate the scrolling
