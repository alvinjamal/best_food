import Image from "next/image";
import { global } from "styled-jsx/css";
import { Col, Row } from "react-bootstrap";

const Register = () => {
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
              <form className="container mb-3 col-8 mt-4 ">
                <h5>E-mail</h5>
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  placeholder="Email"
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
                <h5>Phone Number</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="Number"
                  placeholder="Number"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>Create New Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  placeholder="Creat New Password"
                  style={{ width: "25rem", height: "50px" }}
                />
                <h5>New Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  placeholder="New Password"
                  style={{ width: "25rem", height: "50px" }}
                />
                <button
                  type="submit"
                  className="btn btn-warning mt-3"
                  style={{ width: "25rem" }}
                >
                  Register Account
                </button>
                <div
                  className=" justify-content-center text-dark mt-1"
                  style={{ marginLeft: "5px" }}
                >
                  Already have account?{" "}
                  <button className="btn">Log In Here</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
