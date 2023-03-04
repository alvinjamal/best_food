/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;

  if (!cookie) {
    return {
      redirect: {
        destination: "/auth/Login",
        permanent: true,
      },
    };
  }
  return {
    props: {
      // isLogin: true,
      login: cookie,
    },
  };
}

function ModalEdit({ token }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [photo, setPhoto] = useState("");
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const updatePhoto = async (e) => {
    e.preventDefault();
    const user = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .put(`/users/update`, user)
      .then((res) => {
        console.log("Update profile succes");
        console.log(res);
        Swal.fire({
          title: "Update Success",
          text: "Update profile success",
          icon: "success",
          timer: "2000",
          showConfirmButton: false,
        }).then(() => {
          window.location.reload(false);
        });
      })
      .catch((err) => {
        console.log("Update photo failed");
        console.log(err);
        Swal.fire("Warning", "Update photo failed", "error");
      });
  };

  return (
    <div>
      <div className="btn" onClick={handleShow}>
        <div style={{ marginLeft: "68px", marginTop: "-85px" }}>
          <Image src="/edit.png" width={20} height={20} priority />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Photo Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Foto Profile</Form.Label>
              <Form.Control
                type="file"
                id="photo"
                onChange={handlePhoto}
                name="photo"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={updatePhoto}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEdit;
