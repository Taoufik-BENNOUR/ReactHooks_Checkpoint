import React from 'react';
import {Navbar,Container,NavDropdown,Form,FormControl,Button,Nav} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

import { useState } from 'react';
function Headers({filter}) {
    const [search, setsearch] = useState();
    const [rating, setrating] = useState();
  return <div>
      <Navbar style={{backgroundColor:'orange'}} expand="lg">
  <Container style={{margin:'0 10%'}}  fluid>
    <Navbar.Brand href="#">Hooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">State</Nav.Link>
        <Nav.Link href="#action2">setState</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <Rating onClick={(rate)=>setrating(rate/20)} emptyColor='white' fillColor='black' />
      <Form className="d-flex">
        <FormControl onChange={(e)=>setsearch(e.target.value)} //()=>filter(e.target.value)
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={()=>filter(search,rating)} variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
}


export default Headers;
