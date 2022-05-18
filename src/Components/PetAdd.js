import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import petStore from "../petStore";
function PetAdd() {
  const [show, setShow] = useState(false);

  const [thePet, setThePet] = useState({
    name: "",
    type: "",
    image: "",
  });

  const handleChange = (event) => {
    setThePet({ ...thePet, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.addNewPet(thePet);
    handleClose();
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mx-2">
        <Button variant="light" onClick={handleShow}>
          Add Pet
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name..."
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Select
                required
                name="type"
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Type</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link..."
                name="image"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary mx-2" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default PetAdd;
