import HeaderStyle from "./Header.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = ({handlepage}) => {
  const navbarId = "offcanvasNavbar";
  const navbarLabelId = "offcanvasNavbarLabel";

  return (
    <header className={`${HeaderStyle.header}`}>
      <Navbar expand="lg" className=" mb-3 w-100 flex-nowrap  h-100">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex align-items-center w-25">
            <div className={HeaderStyle.image}>
              <img className="w-100" src="./images/logo.png" alt="" />
            </div>
            <p className={`${HeaderStyle.logo} fs-4 fw-bold`}>CineDeniz</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={navbarId} className="bg-warning" />
          <Navbar.Offcanvas
            id={navbarId}
            aria-labelledby={navbarLabelId}
            placement="end"
            className="bg-black"
          >
            <Offcanvas.Header
              closeButton
              className="bg-danger"
            ></Offcanvas.Header>
            <Offcanvas.Body className="ps-5 gap-5">
            <Form className="d-flex w-75 mb-1">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="bg-warning" variant="outline-dark">Search</Button>
              </Form>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-5">
                <Nav.Link
                  href="#action1"
                  className="btn text-white px-4"
                  onClick={handlepage}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#action1"
                  className="btn text-white px-3"
                >
                  Campaigns
                </Nav.Link>
                <NavDropdown
                  title={
                    <span className={HeaderStyle.dropdownLink}>About Us</span>
                  }
                  className="rounded-2 px-2 text-white text-center"
                  id="offcanvasNavbarDropdown"
                >
                  <NavDropdown.Item href="#action3" >
                    Who we are
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Contact</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
