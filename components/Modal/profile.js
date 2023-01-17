import Image from "next/image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const css = { maxWidth: "100%", height: "auto", minWidth: "30%" };

function ModalProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState({
    file: null,
    priview: "",
  });

  const handleUploadChange = (e) => {
    console.log(e.target.files[0]);
    let upload = e.target.files[0];
    setFile(upload);
  };

  const handleData = (e) => {
    e.preventDefault();
    const localdata = localStorage.getItem("Ankasa");
    const { token } = JSON.parse(localdata);
    const formData = new FormData();
    formData.append("photo", file);
    dispatch(editProfile(id, formData, token));
    dispatch(detailProfile(token));
  };

  useEffect(() => {
    const localdata = localStorage.getItem("token");
    const { token } = JSON.parse(localdata);
    dispatch(detailProfile(token));
  }, []);
  return (
    <div>
      <div className="btn mt-1" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Photo Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Foto Profile</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={(e) => handleData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalProfile;
