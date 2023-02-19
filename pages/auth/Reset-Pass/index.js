import Image from "next/image";
import { global } from "styled-jsx/css";
import { Col, Row, Button } from "react-bootstrap";

const Code = () => {
  return (
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
              <form className="container mb-3 col-8 mt-5 ">
                <div
                  className="Forgot text-start mt-3 mb-3 text-warning"
                  style={{
                    marginLeft: "10%",
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  Change Password
                </div>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="Code 6 Digit"
                  placeholder="New Password"
                  style={{ width: "25rem", height: "40px" }}
                />
                <Button
                  href={"/Login"}
                  type="submit"
                  className="btn btn-warning mt-3"
                  style={{ width: "25rem" }}
                >
                  Change Password
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Code;
