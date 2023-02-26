/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { globals } from "styled-jsx/css";
import Footer from "../components/Footer";
import Link from "next/link";
import Layouts from "../components/Layouts";
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;

  if (!cookie) {
    return {
      redirect: {
        destination: "/auth/Login",
        permanent: true,
      },
    };
  }
  return {
    props: {
      isLogin: true,
      login: cookie,
    },
  };
}

const LandingPage = ({ login }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.URL_BASE}/recipe`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  const [key, setKey] = useState("myrecipe");
  const router = useRouter();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.URL_BASE}/recipe/detail/${data.id_recipe}`, {
        withCredentials: true,
      })
      .then((res) => {
        setDetail(res.data.data);
      });
  }, []);
  return (
    <div className="container">
      <Layouts Login={login} />
      <div
        className="row align-items-center bg-white"
        style={{ marginTop: "80px" }}
      >
        <div className="col-3 text-primary">
          <h1>Discover Recipe & Delicious Food</h1>
          <input
            type="search"
            className="form-control rounded-2 bg-light"
            style={{ width: "22rem", height: "3rem" }}
            name="search"
            placeholder="Search restaurant, food"
          />
        </div>
        <div className="col-4 offset-3 " style={{ marginBottom: "120px" }}>
          <Image src="/food1.png" height={500} width={500} priority alt="" />
        </div>
      </div>
      <div className="row align-items-center bg-white">
        <div className="col-1">
          <div
            style={{
              backgroundColor: "#EFC81A",
              height: "60px",
              width: "10px",
            }}
          ></div>
        </div>
        <div className="col-10">
          <h3 className="mt-2">Popular For You !</h3>
        </div>
      </div>
      <div className="row align-items-center bg-white">
        <div
          className="col-6"
          style={{ marginTop: "90px", marginBottom: "100px" }}
        >
          <Image src="/food3.png" height={500} width={500} priority alt="" />
        </div>
        <div className="col-4 offset-1">
          <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
          <div
            style={{
              backgroundColor: "#6F6A40",
              height: "2px",
              width: "70px",
            }}
          ></div>
          <p className="mt-4">
            Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
            hurry? That’s right!
          </p>
          <Button
            variant="warning"
            size="lg"
            style={{ width: "12rem", height: "3rem" }}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="row align-items-center bg-white">
        <div className="col-1">
          <div
            style={{
              backgroundColor: "#EFC81A",
              height: "60px",
              width: "10px",
            }}
          ></div>
        </div>
        <div className="col-10">
          <h3 className={[styles.colorfont, "mt-5"]}>New Recipe</h3>
        </div>
        <div className="row align-items-center bg-white">
          <div
            className="col-6"
            style={{ marginTop: "90px", marginBottom: "100px" }}
          >
            <Image src="/food2.png" height={500} width={500} alt="" />
          </div>
          <div className="col-4 offset-1">
            <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
            <div
              style={{
                backgroundColor: "#6F6A40",
                height: "2px",
                width: "70px",
              }}
            ></div>
            <p className="mt-4">
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <Button
              variant="warning"
              size="lg"
              style={{ width: "12rem", height: "3rem" }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="row align-items-center bg-white">
        <div className="col-1">
          <div
            style={{
              backgroundColor: "#EFC81A",
              height: "60px",
              width: "10px",
            }}
          ></div>
        </div>
        <div className="col-10">
          <h3 className="mt-2">Popular Recipe</h3>
        </div>
        <div className="row align-items-center bg-white mb-5">
          {data ? (
            data.map((item) => (
              <div
                className="col-4"
                style={{ marginTop: "90px", marginBottom: "10px" }}
                key={item.id_recipe}
                onClick={() => router.push(`/Detail-Recipe/${item.id_recipe}`)}
              >
                <img
                  src={item.photo}
                  style={{
                    height: "400px",
                    width: "400px",
                    borderRadius: "12px",
                  }}
                  alt=""
                />
                <h5
                  style={{
                    marginTop: "-40px",
                    marginLeft: "13px",
                    fontWeight: "bold",
                  }}
                  className="text-white"
                >
                  {item.title}
                </h5>
              </div>
            ))
          ) : (
            <>
              <h1 className="mt-5">Please Wait...</h1>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
