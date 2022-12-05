import Image from "next/image";
import { global } from "styled-jsx/css";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Col, Row, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success",
  });
  const [messageShow, setMessageShow] = useState(false);

  const handleLogin = (e) => {
    axios
      .post(
        process.env.API,
        { email: inputData.email, password: inputData.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        setMessage({
          title: "Success",
          text: "Login success",
          type: "success",
        });
        setTimeout(() => {
          setMessageShow(true);
        }, 500);
        setTimeout(() => {
          window.location = "/landingPage";
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(message);
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
                Welcome
              </div>
              <h5
                className="text-secondary text-center mt-2"
                style={{ marginRight: "50px" }}
              >
                Log in into your exiting account
              </h5>
            </div>
            <div className="input ">
              <Form className="container mb-3 col-8 mt-4 ">
                <h5>E-mail</h5>
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  value={inputData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  style={{ width: "25rem", height: "40px" }}
                />
                <h5>Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  value={inputData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  style={{ width: "25rem", height: "40px" }}
                />
                <Button
                  href={"/landingPage"}
                  type="submit"
                  className="btn btn-warning mt-3"
                  onClick={handleLogin}
                  style={{ width: "25rem" }}
                >
                  Login
                </Button>
                <Button
                  href={"/Forgot"}
                  type="submit"
                  className="text-dark mt-2 mb-2"
                  variant="outline-warning"
                >
                  Forgot Password
                </Button>
                <div
                  className=" justify-content-center text-dark"
                  style={{ marginLeft: "5px" }}
                >
                  Dont have Store.id account?
                  <Button
                    href={"/Register"}
                    type="submit"
                    className="btn text-dark"
                    variant="outline-warning"
                  >
                    Register
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

export default Login;
