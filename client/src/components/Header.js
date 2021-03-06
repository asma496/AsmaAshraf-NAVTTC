import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="">
      <Navbar.Brand as={Link} to="/">
        Home
      </Navbar.Brand>

      <Nav.Link as={Link} to="/books">
          Books
            </Nav.Link>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
          Posts
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
          New Post
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Login
          </Nav.Link>
        <Nav.Link as={Link} to="/logout">
          Logout
            </Nav.Link>




      </Nav>
    </Navbar>
  );
};

export default Header;
