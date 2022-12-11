import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../Redux/action/login";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };

    dispatch(LoginUser(data, router));
  };
  return (
    <Row>
      <Col>
        {" "}
        <div
          style={{
            backgroundImage: `url(/col.png)`,
            height: "800px",
            width: "800px",
            opacity: 0.2,
            marginLeft: "10rem",
            marginTop: "2rem",
          }}
        ></div>
      </Col>
      <Col>
        {" "}
        <div className="row">
          <div className="text align-items-center">
            <div className="flex-end mb-4">
              <div
                className="login text-center mt-3 text-warning"
                style={{
                  marginRight: "29%",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Welcome
              </div>
              <h5
                className="text-secondary text-center mt-2"
                style={{ marginRight: "27%" }}
              >
                Log in into your exiting account
              </h5>
            </div>
            <div className="input ">
              <Form onSubmit={postData} className="container mb-3 col-8 mt-4 ">
                <h5>E-mail</h5>
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{ width: "25rem", height: "40px" }}
                />
                <h5>Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  style={{ width: "25rem", height: "40px" }}
                />
                <Button
                  type="submit"
                  className="btn btn-warning text-white mt-3"
                  style={{
                    position: "absolute",
                    width: "25rem",
                    height: "47px",
                  }}
                >
                  Login
                </Button>
              </Form>
              <Link href={"/Forgot-pass"}>
                <h5 style={{ marginTop: "5rem" }} className="text-center mb-4">
                  Forgot Password ?
                </h5>
              </Link>
              <h5
                className=" justify-content-center text-dark mt-1"
                style={{ marginLeft: "15rem" }}
              >
                Dont have an account?{" "}
                <Link
                  href={"/Register"}
                  className="text-dark"
                  variant="outline-warning"
                >
                  Sign Up
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
