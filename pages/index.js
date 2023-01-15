import Image from "next/image";
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { globals } from "styled-jsx/css";
import Footer from "../components/Footer";
import Link from "next/link";
import Layouts from "../components/Layouts";
import styles from "../styles/Home.module.css";
import CardRecipe from "../components/Layouts/card";
import { Button } from "react-bootstrap";

const LandingPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3500/recipe?search=${router.query.keyword}`
        );
        setData(result.data);
        setRecipes(result.data.data);
        setSearch(router.query.keyword);
      } catch (error) {
        console.log(error);
        if (error.response.data.message === "Data not found") {
          setRecipes(`Data not found`);
          setData("");
          setSearch("");
        }
        return Swal({
          title: "Warning!",
          text: `${error.response.data.message}`,
          icon: "warning",
        });
      }
    };
    if (router.query.keyword !== undefined) {
      console.log(router.query.keyword);
      fetch();
    }
  }, [router.query.keyword]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (search === router.query.keyword) {
      return Swal({
        title: "Warning!",
        text: `This is the result of ${search}`,
        icon: "warning",
      });
    }
    router.push(`search?keyword=${search}`);
  };

  return (
    <div className="container">
      <Layouts />
      <div>
        <div className="food">
          <form
            className="box col-4"
            style={{ marginTop: "18px", color: "blue" }}
            onSubmit={handleSubmitSearch}
          >
            <h1>Discover recipe & Delicious food</h1>
            <span className="icon"></span>
            <input
              type="search"
              className="search"
              placeholder="Search Restaurant Food"
              id="search"
              defaultValue={router.query.keyword}
              onChange={handleSearchInput}
            />
          </form>
          <div>
            <div
              className="wrapper-right"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "55%",
                // backgroundImage: `url(/bg.png)`,
                borderRadius: "12px",
                // width: "725px",
                height: "570px",
              }}
            >
              <div
                className="img"
                style={{ height: "650px", width: "880px", marginTop: "1rem" }}
              >
                <Image
                  src="/food1.png"
                  alt="makanan"
                  width={600}
                  height={650}
                />
              </div>
            </div>
          </div>
          <h4 className="title" style={{ marginTop: "2rem" }}>
            <span></span>popular For You!
          </h4>
        </div>
        <section className="mb-5">
          <div className={`${styles.titleSection}  mb-4 mb-md-5`}>
            <h1>Search Result</h1>
          </div>
          <div className="row">
            {recipes.length >= 1 &&
              recipes.map((item) => {
                return (
                  <CardRecipe
                    key={item.id}
                    photo={item.image}
                    title={item.title}
                    // type='edit'
                    path={() => router.push(`/recipe/${item.id}`)}
                  />
                );
              })}
          </div>
        </section>
        <div className="wrapper" style={{ marginBottom: "2rem" }}>
          <div
            style={{
              border: "3px solid #EFC81A",
              width: "700px",
              height: "600px",
            }}
          >
            <div
              className="wrapper-left"
              style={{
                // backgroundImage: `url(/bg2.png)`,
                height: "700px",
                width: "720px",
                borderRadius: "10px",
              }}
            >
              <div className="wrapper-img-popular">
                <Image
                  src="/food2.png"
                  alt="makanan"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="wrapper-right" style={{ marginLeft: "100px" }}>
            <div>
              <h2 className="subtitle">
                Healthy Bone Broth Ramen (Quick & Easy)
              </h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <button className="button">Learn More</button>
            </div>
          </div>
        </div>
        <h1 className="title" style={{ marginTop: "5rem" }}>
          <span></span>New Recipe
        </h1>
        <div className="wrapper">
          <div
            className="wrapper-left"
            style={{
              backgroundColor: `#EFC81A`,
              borderRadius: "12px",
              height: "40rem",
              width: "50rem",
            }}
          >
            <div
              className="wrapper-img-popular mb-5"
              style={{ marginTop: "15rem" }}
            >
              <Image
                style={{ marginLeft: "2rem" }}
                src="/mam.png"
                alt="makanan"
                width={600}
                height={500}
              />
            </div>
          </div>
          <div className="wrapper-right" style={{ marginLeft: "60px" }}>
            <div style={{ marginLeft: "5rem" }}>
              <h2 className="subtitle">
                Healthy Bone Broth Ramen (Quick & Easy)
              </h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <button className="button">Learn More</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="title " style={{ marginTop: "7rem" }}>
            <span></span>Popular Recipe
          </h1>
        </div>
        <Button
          variant="light"
          className="popular-img col-12 p-10 mt-10"
          style={{ padding: "1rem" }}
          href="/Detail-Recipe"
        >
          <div className="img-shop mt-5">
            <Image src="/gambar1.png" alt="makanan" width={400} height={350} />
          </div>
          <div className="img-shop mt-5">
            <Image src="/gambar2.png" alt="makanan" width={400} height={350} />
          </div>
          <div className="img-shop mt-5">
            <Image src="/gambar3.png" alt="makanan" width={400} height={350} />
          </div>
          <div className="img-shop mb-4">
            <Image src="/gambar4.png" alt="makanan" width={400} height={350} />
          </div>
          <div className="img-shop mb-4">
            <Image src="/gambar5.png" alt="makanan" width={400} height={350} />
          </div>
          <div className="img-shop mb-4">
            <Image src="/gambar6.png" alt="makanan" width={400} height={350} />
          </div>
        </Button>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
