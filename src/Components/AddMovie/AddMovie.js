import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

import './AddMovie.css'


const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);
  // const [title, setTitle] = useState("");
  // const [rating, setRating] = useState(1);
  // const [img, setImg] = useState("");
  const [newMovie, setNewMovie] = useState({
    id: Math.random(), title: "", rating: 1, img: ""
  });


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleChangeTitle = (e) => {
  //   setTitle(e.target.value)
  // }
  // const handleChangeRating = (e) => {
  //   setRating(e.target.value)
  // }
  // const handleChangeImg = (e) => {
  //   setImg(e.target.value)
  // }

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
  }

  const addMovie = (newMovie) => {
    setMovies([newMovie, ...movies])
    handleClose()
    // setTitle("")
    // setRating(1)
    // setImg("")
    setNewMovie({ title: "", rating: 1, img: "" })
  }

  return (
    <>
      <Button variant="light" onClick={handleShow} className="addBtn">
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Control type="text" placeholder="Enter new movie title ..."
            // onChange={handleChangeTitle}
            // value={title}
            name="title"
            onChange={handleChange}
            value={newMovie.title}
            className="modalInput" />

          <Form.Control type="number" min="1" max="5"
            placeholder="Enter new movie rating ..."
            onChange={handleChange}
            value={newMovie.rating}
            // onChange={handleChangeRating}
            // value={rating}
            name="rating"

            className="modalInput" />

          <Form.Control type="text" placeholder="Enter new movie image src ..."
            // onChange={handleChangeImg}
            // value={img}
            onChange={handleChange}
            value={newMovie.img}
            name="img"
            className="modalInput" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addMovie(
            newMovie
            // { id: Math.random(),
            // title,
            // rating,
            // img}
          )}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default AddMovie
