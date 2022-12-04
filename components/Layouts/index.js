import React from "react";
import Link from "next/link";

const Layouts = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand bg-warning d-flex flex-row text-blue justify-content-around mb-5">
        {/* <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/recipe/3">Recipe 3</Link>
        <Link href="/user">User</Link> */}
        <Link href="/landingPage">Landing Page</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/landing">Landing</Link>
        <Link href="/Login">Login</Link>
        <Link href="/Register">Register</Link>
        <Link href="/Forgot">Forgot Password</Link>
        <Link href="/Code">Code Reset Password</Link>
        {/* <Link href="/add_recipe">Add Recipe</Link> */}
      </nav>
      <div className="container bg-light text-dark">{children}</div>
    </>
  );
};

export default Layouts;
