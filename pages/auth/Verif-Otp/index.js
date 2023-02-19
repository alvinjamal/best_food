import Image from "next/image";
import { global } from "styled-jsx/css";
import { Col, Row, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { VerifOtpUser } from "../../../Redux/action/otp";

const VerifOtp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      otp,
      email,
    };

    dispatch(VerifOtpUser(data, router));
  };
  return (
    <div className="body">
      <Row>
        <Col>
          <div
            style={{
              backgroundImage: `url(/col.png)`,
              height: "700px",
              width: "700px",
              opacity: 0.2,
              marginLeft: "10rem",
              marginTop: "2rem",
            }}
          />
        </Col>
        <Col>
          <div className="row">
            <div className="text align-items-center">
              <div className="input ">
                <Form
                  onSubmit={postData}
                  className="container mb-3 col-5 mt-5 "
                >
                  <div
                    className="Forgot text-center mt-3 mb-3 text-warning"
                    style={{
                      marginRight: "20%",
                      fontWeight: "bold",
                      fontSize: 30,
                    }}
                  >
                    Verification Otp
                  </div>
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
    </div>
  );
};

export default VerifOtp;
