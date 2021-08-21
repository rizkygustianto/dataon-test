import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Link to='/' className='navbar-brand'>
                    {/* <Navbar.Brand> */}
                        Guest Management
                    {/* </Navbar.Brand> */}
                </Link>

                <Nav className="me-auto">
                    <Link to='/' className='nav-link'>
                        {/* <Nav.Link> */}
                            Home
                        {/* </Nav.Link> */}
                    </Link>
                    <Link to='/logs' className='nav-link'>
                        {/* <Nav.Link> */}
                            Guest Logs
                        {/* </Nav.Link> */}
                    </Link>
                    <Link to='/new-guest' className='nav-link'>
                        {/* <Nav.Link> */}
                            Add New Guest
                        {/* </Nav.Link> */}
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}