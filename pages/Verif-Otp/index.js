import Image from "next/image";
import { global } from "styled-jsx/css";
import { Col, Row, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { VerifOtpUser } from "../../Redux/action/otp";

const VerifOtp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const postData = (e) => {
    e.preventDefault();
    console.log(otp, email);
    let data = {
      otp,
      email,
    };
    console.log(data);

    dispatch(VerifOtpUser(data, router));
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
            marginLeft: "20rem",
            marginBottom: "5rem",
            opacity: 0.2,
          }}
        ></div>
      </Col>
      <Col>
        {" "}
        <div className="row">
          <div className="text align-items-center">
            <div className="input ">
              <Form onSubmit={postData} className="container mb-3 col-8 mt-5 ">
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
                <h5>Verification</h5>
                <input
                  type="code"
                  className="form-control mb-2"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  name="text"
                  placeholder="Verification Otp"
                  style={{ width: "25rem", height: "40px" }}
                />
                <Button
                  type="submit"
                  className="btn btn-warning mt-3"
                  style={{ width: "25rem" }}
                >
                  Verification Otp
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default VerifOtp;
