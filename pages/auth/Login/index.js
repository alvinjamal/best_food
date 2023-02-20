import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { LoginUser } from "../../../Redux/action/login";

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const router = useRouter();

  // const postData = async (e) => {
  //   e.preventDefault();
  //   email;
  //   password;
  //   let data = {
  //     email,
  //     password,
  //   };
  //   const config = {
  //     withCredentials: true,
  //     "Access-Control-Allow-Origin": `${process.env.URL_BASE}/users/login`,
  //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  //     "Access-Control-Allow-Headers": "Authorization",
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: `${process.env.API_KEY}`,
  //   };
  //   const result = ("localhost:3500/users/login", data, config);

  //   axios.post(result, { headers });

  //   const token = result.data.message.token;
  //   const id_user = result.data.message.id_user;
  //   const dataToken = {
  //     token: token,
  //     id_user: id_user,
  //   };
  //   console.log(cookie);
  //   const cookie = await fetch("/api/login.js", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(dataToken),
  //   });
  //   const checkToken = await cookie.json();
  //   if (!checkToken) {
  //     return Swal.fire("warning", "Login Failed", "error");
  //   }
  //   Swal.fire("success", "Login Success", "success");
  //   console.log(dataToken);
  //   router.push("/");
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    dispatch(LoginUser(data, router));
  };
  // return (
  //   <div className="body">
  //     <Row>
  //       <Col>
  //         <div
  //           style={{
  //             backgroundImage: `url(/col.png)`,
  //             height: "35rem",
  //             width: "41rem",
  //             opacity: 0.2,
  //             marginLeft: "4rem",
  //             marginTop: "2rem",
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //           }}
  //         />
  //       </Col>
  //       <Col>
  //         <div className="row">
  //           <div className="flex-end mb-4">
  //             <div
  //               className="login text-center mt-3 text-warning"
  //               style={{
  //                 // marginRight: "29%",
  //                 fontWeight: "bold",
  //                 fontSize: 30,
  //               }}
  //             >
  //               Welcome
  //             </div>
  //             <h5
  //               className="text-secondary text-center mt-2"
  //               // style={{ marginRight: "27%" }}
  //             >
  //               Log in into your exiting account
  //             </h5>
  //           </div>
  //           <div className="input ">
  //             <Form onSubmit={postData} className="container mb-3 col-9 mt-3 ">
  //               <h5 className="text-secondary">E-mail</h5>
  //               <input
  //                 type="email"
  //                 className="form-control mb-2"
  //                 name="email"
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //                 placeholder="Email"
  //                 style={{ width: "25rem", height: "40px" }}
  //               />
  //               <h5 className="text-secondary">Password</h5>
  //               <input
  //                 type="password"
  //                 className="form-control mb-2"
  //                 name="password"
  //                 value={password}
  //                 onChange={(e) => setPassword(e.target.value)}
  //                 placeholder="Password"
  //                 style={{ width: "25rem", height: "40px" }}
  //               />
  //               <Button
  //                 type="submit"
  //                 className="btn btn-warning text-white mt-3"
  //                 style={{
  //                   position: "absolute",
  //                   width: "25rem",
  //                   height: "47px",
  //                 }}
  //               >
  //                 Login
  //               </Button>
  //             </Form>
  //             <Link href={"/auth/Forgot-Pass"}>
  //               <h5
  //                 style={{ marginTop: "5rem" }}
  //                 className="text-end text-warning col-10 mb-4"
  //               >
  //                 Forgot Password ?
  //               </h5>
  //             </Link>
  //             <h5 className=" text-center text-dark mt-1">
  //               Dont have an account?
  //               <Link href={"/auth/Register"} className="text-warning">
  //                 Sign Up
  //               </Link>
  //             </h5>
  //           </div>
  //         </div>
  //       </Col>
  //     </Row>
  //   </div>
  // );
  return (
    <div>
      <div>
        <div className="container row align-items-center">
          <div className="col-lg-6 col-sm-8">
            <div
              style={{
                backgroundImage: `url(/col.png)`,
                height: "35rem",
                width: "41rem",
                opacity: 0.2,
                marginTop: "2rem",
              }}
            />
          </div>
          <div className="col-lg-4 offset-lg-1 col-sm-10 mt-sm-4">
            <h3
              className="text-warning text-end"
              style={{ marginRight: "4rem" }}
            >
              Welcome
            </h3>
            <h6 className="text-end">Log in into your exiting account</h6>
            <Form onSubmit={postData} className="container mb-3 col-8 mt-3 ">
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
              <h5 className="text-secondary">Password</h5>
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
            <Link href={"/auth/Forgot-Pass"}>
              <h5
                style={{ marginTop: "5rem" }}
                className="col-12 text-end text-warning col-8 mb-3"
              >
                Forgot Password ?
              </h5>
            </Link>
            <h5
              className="col-12 text-end text-dark mt-1"
              style={{ marginLeft: "3rem" }}
            >
              Dont have an account?
              <Link href={"/auth/Register"} className="text-warning">
                Sign Up
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
