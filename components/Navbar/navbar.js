import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap";

function NavbarComponent() {
  const token = localStorage.getItem("token");
  return (
    <Nav className="me-auto">
      <Nav.Link href="./home">Home</Nav.Link>

      <Nav.Link href="./product">Product</Nav.Link>

      <Nav.Link href="./myBag">My Bag</Nav.Link>
    </Nav>
  );
}
export default NavbarComponent;
