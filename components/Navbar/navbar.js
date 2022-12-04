import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap";

function NavbarComponent() {
  const token = localStorage.getItem("token");
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container fluid>
        <Image
          src={"/food1"}
          alt="logo"
          width={50}
          hight={50}
          style={{ width: "30px", marginRight: "10px" }}
        />
        <Navbar.Brand href="/home">Store.id</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "end" }}
        >
          {token && (
            <Nav className="me-auto">
              <Nav.Link href="./home">Home</Nav.Link>

              <Nav.Link href="./product">Product</Nav.Link>

              <Nav.Link href="./myBag">My Bag</Nav.Link>
            </Nav>
          )}
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: "13px", height: "40px" }}
            />
          </Form>
          <Button
            variant="light"
            style={{ width: "40px", marginRight: "10px" }}
          >
            <Image
              src={col}
              alt="Filter"
              width={20}
              height={20}
              style={{
                marginRight: "20px",
                paddingRight: "8px",
              }}
            />
          </Button>
          <Button
            variant="light"
            style={{ width: "50px", marginRight: "10px" }}
          >
            <Image
              href="/myBag"
              src={Roll}
              alt="Roll"
              style={{
                width: "30px",
                marginRight: "20px",
                paddingRight: "8px",
              }}
            />
          </Button>
          {token ? (
            <Button variant="light">
              <Image
                src={col}
                alt="or"
                width={35}
                height={30}
                style={{
                  verticalAlign: "middle",

                  borderRadius: "50%",
                  marginLeft: "-100px",
                }}
              />
            </Button>
          ) : (
            <>
              <Button
                href="/loginSeller"
                className="btn-1"
                variant="danger"
                size="sm"
                style={{ borderRadius: "13px" }}
              >
                Login
              </Button>
              <Button
                href="/registerSeller"
                className="btn-1"
                variant="outline-danger"
                size="sm"
                style={{ borderRadius: "13px" }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
