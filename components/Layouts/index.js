import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button } from "react-bootstrap";

const Layouts = ({ children }) => {
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
                <h4 style={{ marginLeft: "40px" }}>Profile</h4>{" "}
              </Link>
            </div>
            <div className="col-1 offset-5">
              <Link href="/Login">
                <div className="btn" style={{ borderRadius: "30px" }}>
                  <Image
                    src="/panel.png"
                    height={40}
                    width={80}
                    alt=""
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid bg-white">{children}</div>
    </>
  );
};

export default Layouts;
