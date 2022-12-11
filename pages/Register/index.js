import Image from "next/image";
import { global } from "styled-jsx/css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Form, Button } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(phone);
    console.log(password);
    let data = {
      fullname,
      email,
      phone,
      password,
    };
    dispatch(regisUser(data));
  };
  return (
    <Row>
      <Col>
        {" "}
        <div
          style={{
            backgroundImage: `url(/col.png)`,
            height: "800px",
            width: "700px",
            opacity: 0.2,
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
                  marginRight: "20%",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Let’s Get Started !
              </div>
              <h5
                className="text-secondary text-center mt-2 "
                style={{ marginRight: "50px" }}
              >
                Create new account to access all features
              </h5>
            </div>
            <div className="input ">
              <Form onSubmit={postData} className="container mb-3 col-8 mt-4 ">
                <h5>Full Name</h5>
                <input
                  type=""
                  className="form-control mb-2"
                  name="name"
                  placeholder="Full Name"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>E-mail</h5>
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  placeholder="Email"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>Phone Number</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="Number"
                  placeholder="Number"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  placeholder="Password"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>Confirm Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  placeholder="Confirm Password"
                  style={{ width: "25rem", height: "50px" }}
                />
                <Button
                  href={"/Verif-Otp"}
                  type="submit"
                  className="btn btn-warning mt-3"
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
