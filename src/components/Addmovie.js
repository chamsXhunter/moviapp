import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
function Addmovie({movies, setmovies}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name:"",
    posterurl:"",
    description:"",
    rating:""
  })

  const handleadd=()=>{
    setmovies([...movies, newmovie])
  }
//   movies.push(newmovie)
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:"red", border:"none",color:"white"}}>
       +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} />
    
      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Movie posterurl</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image"  onChange={(e)=>setnewmovie({...newmovie,posterurl:e.target.value})} />
    
      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description"  onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})} />
    
      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rate</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rate"  onChange={(e)=>setnewmovie({...newmovie,rating:e.target.value})} />
    
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleadd();handleClose()}} style={{backgroundColor:"red", border:"none",color:"white"}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addmovie