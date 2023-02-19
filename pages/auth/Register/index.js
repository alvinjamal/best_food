import Image from "next/image";
import { global } from "styled-jsx/css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RegisterUser } from "../../../Redux/action/register";
import { Col, Row, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      fullname,
      email,
      phone,
      password,
    };
    dispatch(RegisterUser(data, router));
    Swal.fire("Success", "Register Success,Returning to Login", "success");
  };
  return (
    <Row>
      <Col>
        {" "}
        <div
          style={{
            backgroundImage: `url(/col.png)`,
            height: "700px",
            width: "700px",
            opacity: 0.2,
            marginLeft: "8rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        ></div>
      </Col>
      <Col>
        {" "}
        <div className="row">
          <div className="text align-items-center">
            <div className="flex-end">
              <div
                className="login text-center mt-3 text-warning"
                style={{
                  // marginRight: "20%",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Let’s Get Started !
              </div>
              <h5
                className="text-secondary text-center mt-2 "
                // style={{ marginRight: "50px" }}
              >
                Create new account to access all features
              </h5>
            </div>
            <div className="input ">
              <Form onSubmit={postData} className="container mb-3 col-5 mt-4 ">
                <h5>Full Name</h5>
                <input
                  type="name"
                  className="form-control mb-2"
                  name="name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Full Name"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>E-mail</h5>
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>Phone Number</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Number"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create Password"
                  style={{ width: "25rem", height: "50px" }}
                />
                <Button
                  className="btn btn-warning mt-3"
                  type="submit"
                  style={{ width: "25rem" }}
                >
                  Register Account
                </Button>
                <div
                  className=" justify-content-center text-dark mt-1"
                  style={{ marginLeft: "5px" }}
                >
                  Already have account?{" "}
                  <Button
                    href={"/Login"}
                    className="text-dark"
                    variant="outline-warning"
                    style={{}}
                  >
                    Log In Here
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
