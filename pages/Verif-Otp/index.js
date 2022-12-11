import Image from "next/image";
import { global } from "styled-jsx/css";
import { Col, Row, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { verificationOtpUser } from "../../Redux/reducers/otp";

const VerifOtp = () => {
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const postData = (e) => {
    e.preventDefault();
    otp;
    let data = {
      otp,
    };

    dispatch(verificationOtpUser(data, router));
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
              <Form onChange={postData} className="container mb-3 col-8 mt-5 ">
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
