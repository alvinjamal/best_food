/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import { globals } from "styled-jsx/css";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import Layouts from "../../components/Layouts";
import Footer from "../../components/Footer";
import { useState } from "react";

export async function getServerSideProps(context) {
  try {
    const id_recipe = context.params.id_recipe;
    console.log(id_recipe);
    const res = await fetch(`http://localhost:3500/recipe/${id_recipe}`);
    const data = await res.json();
    console.log(data);
    const { token } = context.req.cookies;
    console.log(data, id_recipe);
    return {
      props: {
        data,
        id_recipe,
        token: token,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

function DetailRecipe({ data, id_recipe, token }) {
  console.log(data, token);

  const router = useRouter([]);
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [dataComment, setDataComment] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3500/recipe/comment/${id_recipe}`)
      .then((res) => {
        console.log("Get comment by recipe success");
        console.log(res.data);
        res.data && setDataComment(res.data.data);
      })
      .catch((err) => {
        console.log("Get comment by recipe fail");
        console.log(err);
      });
  }, []);
  const [postData, setPostData] = useState([]);
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const handleData = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.URL_BASE}/recipe/add-comment/${id_recipe}`,
        postData,
        user
      )
      .then((result) => {
        console.log("Post comment success");
        console.log(result);
        Swal.fire("Success", "Post comment success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Post comment fail");
        console.log(err);
        Swal.fire("Warning", "Post comment failed", "error");
      });
  };
  const handleSave = async (e) => {
    e.preventDefault();
    let form = {
      recipe_id: id_recipe,
    };
    axios
      .post(`${process.env.URL_BASE}/recipe/saved-recipe`, form, user)
      .then((res) => {
        console.log("Add save recipe success");
        console.log(res);
        Swal.fire("Success", "Add save recipe success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Add save recipe fail");
        console.log(err);
        Swal.fire("Warning", "Add save recipe fail", "error");
      });
  };
  const handleLike = async (e) => {
    e.preventDefault();
    let form = {
      recipe_id: id_recipe,
    };
    axios
      .post(`${process.env.URL_BASE}/recipe/like-recipe`, form, user)
      .then((res) => {
        console.log("Add like recipe success");
        console.log(res);
        Swal.fire("Success", "Add like recipe success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Add like recipe fail");
        console.log(err);
        Swal.fire("Warning", "Add like recipe fail", "error");
      });
  };
  return (
    <div className="container">
      <Layouts />
      <div
        className="row justify-content-center mt-4"
        style={{ marginLeft: "1rem" }}
      >
        <div className="col-4">
          <h1>{data.data[0].title}</h1>
        </div>
        <div
          className="row justify-content-center mt-4"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-10">
            <img
              src={data.data[0].photo}
              alt=""
              style={{ width: "900px", height: "500px" }}
            />
          </div>
        </div>
      </div>
      <div
        className="row justify-content-start mt-5"
        style={{ marginLeft: "50px" }}
      >
        <div className="col-2">
          <h3>Ingredients</h3>
        </div>
      </div>
      <div
        className="row justify-content-start mt-3"
        style={{ marginLeft: "50px" }}
      >
        <div className="col-2">
          <p>{data.data[0].ingredients}</p>
        </div>
        <div>
          <div className="col-2">
            <h3>Video Step</h3>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <button
              className="btn btn-warning"
              onClick={() =>
                router.push(`/detail-recipe/${data.data[0].id_recipe}`)
              }
              style={{ width: "190px", height: "45px" }}
            >
              <Image src="/video2.png" height={10} width={10} alt="" />
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <button
              className="btn btn-warning"
              style={{ width: "190px", height: "45px" }}
            >
              <Image src="/video2.png" height={10} width={10} alt="" />
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <button
              className="btn btn-warning"
              style={{ width: "190px", height: "45px" }}
            >
              <Image src="/video2.png" height={10} width={10} alt="" />
            </button>
          </div>
        </div>
        <textarea
          className="form-control bg-light mt-5 mb-3"
          name="comment"
          rows="9"
          placeholder="Comment"
          onChange={(e) => handleChange(e)}
          value={postData.comment_text}
        ></textarea>
        <Button
          type="submit"
          onClick={(e) => handleData(e)}
          className="bg-warning mb-4"
          style={{ width: "30rem", height: "3rem", textAlign: "center" }}
        >
          Send
        </Button>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          {dataComment ? (
            dataComment.map((item) => (
              <div key={item.id_comment}>
                <div className="col-1">
                  <img
                    src={item.photo}
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="col-5">
                  <h6>{item.fullname_user}</h6>
                  <p>{item.comment_text}</p>
                </div>
              </div>
            ))
          ) : (
            <h1>...Loading</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailRecipe;
