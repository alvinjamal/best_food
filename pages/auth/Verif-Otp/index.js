import { Form, Button } from "react-bootstrap";
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
    <div className="container row align-items-center">
      <div className="col-lg-6 col-sm-8">
        <div
          style={{
            backgroundImage: `url(/col.png)`,
            height: "40rem",
            width: "41rem",
            opacity: 0.2,
            marginTop: "2rem",
          }}
        />
      </div>
      <div className="col-lg-4 offset-lg-1 col-sm-10 mt-sm-4">
        <div className="input flex-end">
          <Form onSubmit={postData} className="container mb-3 col-9 ">
            <div
              className="Forgot text-end col-12 mb-3 text-warning"
              style={{
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Verification Otp
            </div>
            <h5 className="text-secondary">E-mail</h5>
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{ width: "25rem", height: "40px" }}
            />
            <h5 className="text-secondary">Verification</h5>
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
  );
};

export default VerifOtp;
