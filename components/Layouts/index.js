import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Layouts = ({ children, login }) => {
  const router = useRouter();
  const logout = async () => {
    try {
      const result = await fetch("/api/logout");
      const { logout } = await result.json();
      if (logout) {
        Swal.fire({
          title: "Don't Forget to Log in Again!",
          text: `Logout Success`,
          icon: "success",
          timer: "2000",
          showConfirmButton: false,
        }).then(() => {
          router.push("/");
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Food Recipe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <nav className="container-fluid mt-3 ">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <Link href="/">
                {" "}
                <h4>Home</h4>{" "}
              </Link>
            </div>
            <div className="col-2">
              <Link href="/Add-Recipe">
                {" "}
                <h4>Add Recipe</h4>{" "}
              </Link>
            </div>
            <div className="col-1">
              <Link href="/Profile">
                {" "}
                <h4>Profile</h4>{" "}
              </Link>
            </div>

            <div className="col-1 offset-7">
              {!login ? (
                <div
                  className="btn"
                  style={{ borderRadius: "30px" }}
                  onClick={() => logout()}
                >
                  <Image
                    src="/user.png"
                    height={33}
                    width={33}
                    priority
                    alt=""
                  />
                  <h6>Logout</h6>
                </div>
              ) : (
                <Link href="/auth/Login">
                  <div className="btn" style={{ borderRadius: "30px" }}>
                    <Image
                      src="/user.png"
                      height={33}
                      width={33}
                      priority
                      alt=""
                    />
                    <h6>Login</h6>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid bg-white">{children}</div>
    </>
  );
};

export default Layouts;
