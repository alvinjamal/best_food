import Image from "next/image";
import { global } from "styled-jsx/css";
import { Col, Row, Form, Button } from "react-bootstrap";

const VerifOtp = () => {
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
            <div className="input ">
              <Form className="container mb-3 col-8 mt-5 ">
                <h5>Verification</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="Code 6 Digit"
                  placeholder="Verification Otp"
                  style={{ width: "25rem", height: "40px" }}
                />
                <Button
                  href={"/Login"}
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
