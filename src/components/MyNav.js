import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../img/logom.png";

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        // bg="danger"
        text="light"
        expand="lg"
        style={{
          background: "#a1c4fd",
          color: "white",
        }}
        onSelect={(eventKey) =>
          eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
        }
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link eventKey="home">
              <img
                style={{
                  width: "300px",
                  borderRadius: "30px",
                }}
                src={logo}
                alt=""
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto" style={{ fontSize: "24px" }}>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
                    margin: "0 0px 1px",
                    borderRadius: "30px",
                  }}
                  eventKey="hastalik"
                >
                  Çocuk Sağlığı ve Hastalıkları
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
                    margin: " 2px 0",
                    borderRadius: "30px",
                  }}
                  eventKey="ortopedi"
                >
                  Çocuk Ortopedi
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
                    margin: " 2px 0",
                    borderRadius: "30px",
                  }}
                  eventKey="cerrahi"
                >
                  Çocuk Cerrahisi
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
                    margin: " 2px 0 0",
                    borderRadius: "30px",
                  }}
                  eventKey="psikoloji"
                >
                  Çocuk Psikolojisi ve Psikolojik Danışmanlık
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="about">About</Nav.Link>
              <Nav.Link eventKey="Scientists">Scientists</Nav.Link>
              <Nav.Link eventKey="education">Education</Nav.Link>
              <Nav.Link eventKey="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
