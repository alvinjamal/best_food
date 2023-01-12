import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Layouts from "../../components/Layouts";
import { addRecipeData } from "../../Redux/action/add-Recipe";

// export const getServerSideProps = async (context) => {
//   const { token } = context.req.cookies;
//   console.log(token);
//   if (!token) {
//     return {
//       redirect: {
//         destination: "/Login",
//         permanent: true,
//       },
//     };
//   }

//   return {
//     props: {
//       isLogin: true,
//       token: token,
//     },
//   };
// };

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(ingredients);
    console.log(photo);
    console.log(video);
    let data = {
      title,
      ingredients,
      photo,
      video,
    };
    dispatch(addRecipeData(data));
    Swal.fire("Success", "Post Success", "success");
  };
  return (
    <div className="container">
      <Layouts />
      <div>
        <Form onSubmit={postData}>
          <div className="bg-secondary">
            <div className="row  mt-5">
              <div className="col-lg-12">
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
          <div className="bg-secondary">
            <div className="row text-start mt-3 ">
              <div className="col-lg-12 ">
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
          <div className="bg-secondary mt-3">
            <div className="row text-start">
              <div className="col-lg-12">
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
          <div className="bg-secondary mt-3">
            <div className="row text-start">
              <div className="col-lg-12">
                <input
                  type="text"
                  id="video"
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
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
                <button
                  className="btn"
                  type="submit"
                  style={{
                    backgroundColor: "#EFC81A",
                    color: "white",
                    width: "60rem",
                    height: "3rem",
                    marginLeft: "10rem",
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddRecipe;
