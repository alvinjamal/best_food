/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";

export async function getServerSideProps(context) {
  const id_user = req.params.id_user;
  const cookie = context.req.headers.cookie;
  console.log(cookie);
  const res = await axios.put(`http://localhost:3500/users/update/${id_user}`, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  });
  console.log("ini data", res.data);
  return {
    props: {
      data: res.data.data,
      // login: token ? true : false,
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
  const postData = async (e) => {
    e.preventDefault();
    console.log(photo);
    let data = {
      photo,
    };
    const user = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .put("http://localhost:3000/users/update", data, user)
      .then((res) => {
        console.log("Update profile succes");
        console.log(res);
        Swal.fire({
          title: "Update Success",
          text: "Update profile success",
          icon: "success",
          timer: "3000",
          showConfirmButton: false,
        }).then(() => {
          window.location.reload(false);
        });
      })
      .catch((err) => {
        console.log("Update data profile failed");
        console.log(err);
        Swal.fire("Warning", "Update profile failed", "error");
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
          <Button variant="warning" onClick={postData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEdit;
