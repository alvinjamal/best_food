import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Layouts from "../../components/Layouts";
import { addRecipeData } from "../../Redux/action/add-Recipe";
import { Button } from "react-bootstrap";

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  console.log(token);
  if (!token) {
    return {
      redirect: {
        destination: "/Login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      isLogin: true,
      token: token,
    },
  };
};

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleVideo = (e) => {
    setVideo(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("video", video);
    // let data = {
    //   title,
    //   ingredients,
    //   photo,
    //   video,
    // };
    dispatch(addRecipeData(formData));
  };
  return (
    <div className="container">
      <Layouts />
      <div>
        <Form onSubmit={postData}>
          <div className="">
            <div className="row  mt-5">
              <div className="col-lg-12">
                <h4 className="bg-white mb-3 text-secondary">Photo</h4>
                <input
                  type="file"
                  id="photo"
                  onChange={handlePhoto}
                  name="photo"
                  placeholder="photo"
                  className="form-control bg-light"
                  style={{ height: "3rem" }}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="row text-start mt-3 ">
              <div className="col-lg-12 ">
                <h4 className="bg-white mb-3 text-secondary">Title</h4>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  placeholder="Title"
                  className="form-control bg-light"
                  style={{ height: "3rem" }}
                />
              </div>
            </div>
          </div>
          <div className=" mt-3">
            <div className="row text-start">
              <div className="col-lg-12">
                <h4 className="bg-white mb-3 text-secondary">Ingredients</h4>
                <textarea
                  class="form-control bg-light"
                  id="exampleFormControlTextarea1"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  name="ingredients"
                  rows="9"
                  placeholder="Ingredients"
                ></textarea>
              </div>
            </div>
          </div>
          <div className=" mt-3">
            <div className="row text-start">
              <div className="col-lg-12">
                <h4 className="bg-white mb-3 text-secondary">Video</h4>
                <input
                  type="file"
                  id="video"
                  // value={video}
                  onChange={handleVideo}
                  name="video"
                  placeholder=" Video "
                  className="form-control bg-light"
                  style={{ height: "3rem" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 mb-5">
            <div className="row">
              <div className="col-lg-12">
                <Button
                  className="btn"
                  type="submit"
                  size="lg"
                  style={{
                    backgroundColor: "#EFC81A",
                    color: "white",
                    width: "60rem",
                    height: "3rem",
                    marginLeft: "10rem",
                  }}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddRecipe;
