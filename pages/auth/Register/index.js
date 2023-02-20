import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RegisterUser } from "../../../Redux/action/register";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

function Register() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      fullname,
      email,
      phone,
      password,
    };
    dispatch(RegisterUser(data, router));
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
        <div className="flex-end">
          <div
            className="text-center mt-3 text-warning"
            style={{
              marginLeft: "5rem",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Let’s Get Started !
          </div>
          <h5
            className="text-secondary col-12 text-end mt-2"
            style={{ marginLeft: "2rem" }}
          >
            Create new account to access all features
          </h5>
        </div>
        <div className="input ">
          <Form onSubmit={postData} className="container mb-3 col-9 mt-4 ">
            <h5 className="text-secondary">Full Name</h5>
            <input
              type="name"
              className="form-control mb-2"
              name="name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
              style={{ width: "25rem", height: "50px" }}
            />
            <h5 className="text-secondary">E-mail</h5>
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{ width: "25rem", height: "50px" }}
            />
            <h5 className="text-secondary">Phone Number</h5>
            <input
              type="text"
              className="form-control mb-2"
              name="Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Number"
              style={{ width: "25rem", height: "50px" }}
            />
            <h5 className="text-secondary">Password</h5>
            <input
              type="password"
              className="form-control mb-2"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
              style={{ width: "25rem", height: "50px" }}
            />
            <Button
              className="btn btn-warning mt-3"
              type="submit"
              style={{ width: "25rem" }}
            >
              Register Account
            </Button>
            <h5
              className="col-12 text-dark mt-3"
              style={{ marginLeft: "5rem" }}
            >
              Already have account?
              <Link href="/auth/Login" className="text-warning">
                Login
              </Link>
            </h5>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
