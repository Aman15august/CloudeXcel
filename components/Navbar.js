
import React, { useState, useEffect } from 'react';

import {

  Container,

  Collapse,

  Navbar,

  NavbarToggler,

  NavbarBrand,

  Nav,

  NavItem,

  NavLink

} from 'reactstrap';



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [sticky, setSticky] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

  });



  const handleScroll = () => {

    if (window.scrollY > 90) {

      setSticky(true);

    } else if (window.scrollY < 90) {

      setSticky(false);

    }

  }

  return (

    <div className={`header${sticky ? '' : 'sticky'}`}>

      <nav  className='navbar navbar-expand-lg navbar-light  fixed-top shadow-5-strong'>

        <Container >

          <NavbarBrand  href="#header">CloudXcel</NavbarBrand>

          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>

            <Nav className="nav m-auto top-fixed" navbar>

              <NavItem>

                <NavLink href="#">Home</NavLink>

              </NavItem>

              <NavItem>

                <NavLink href="#about">About</NavLink>

              </NavItem>

              <NavItem>

                <NavLink href="#services">Services</NavLink>

              </NavItem>
              <NavItem>

                <NavLink href="#project">Project</NavLink>

              </NavItem>
              <NavItem>

                <NavLink href="#team">Team</NavLink>

              </NavItem>

              {/* <NavItem>

                <NavLink href="#testimonials">Testimonials</NavLink>

              </NavItem> */}
              <NavItem>

                <NavLink href="#contact">Contact us</NavLink>

              </NavItem>

            </Nav>

          </Collapse>

        </Container>

      </nav>

    </div>

  );

}



export default Header;