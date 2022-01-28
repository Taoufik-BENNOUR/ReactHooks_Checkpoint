import React from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';
import { useState } from 'react';

const AddMovie = ({addnew}) => {
    const [newMovie, setnewMovie] = useState();

  return <>
    <Form  style={{margin:"50px 10%"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Movie title </Form.Label>
    <Form.Control onChange={(e)=>setnewMovie({...newMovie,title:e.target.value})} type="text" value={newMovie.title} placeholder="Enter Movie title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Rate</Form.Label>
    <Form.Control  onChange={(e)=>setnewMovie({...newMovie,rate:e.target.value})} type="text" value={newMovie.rate} placeholder="Rate" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control onChange={(e)=>setnewMovie({...newMovie,description:e.target.value})} type="text" value={newMovie.description} placeholder="description" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Poster</Form.Label>
    <Form.Control onChange={(e)=>setnewMovie({...newMovie,posterUrl:e.target.value})} type="text" value={newMovie.posterUrl} placeholder="Image link"  />
  </Form.Group>
  <Button   onClick={(e)=>{e.preventDefault() 
    addnew({...newMovie,id:Math.random()})
    setnewMovie({title:'',rate:'',description:'',posterUrl:''})
    }} variant="warning" type='submit'>
    Submit
  </Button>
</Form>
  </>;
};


export default AddMovie;
