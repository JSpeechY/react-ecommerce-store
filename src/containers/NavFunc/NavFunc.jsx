import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavFunc = () => {
    return (
        <div>
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="#home">The Hot Saucery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#MelbourneHotSauce">
                                Melbourne Hot Sauce
                            </Nav.Link>
                            <Nav.Link href="#HotOnes">Hot Ones</Nav.Link>
                            <Nav.Link href="#GrumpyGarys">
                                Grumpy Gary's
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#Cart">Shopping Cart</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavFunc;
