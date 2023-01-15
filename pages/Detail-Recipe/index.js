import Image from "next/image";
import { globals } from "styled-jsx/css";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";
import Layouts from "../../components/Layouts";
import Footer from "../../components/Footer";

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3500/recipe`);
//   const data = await res.json();

//   const paths = data.map((recipe) => ({
//     params: {
//       id_recipe: `${recipe.id_recipe}`,
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps(context) {
//   try {
//     const id_recipe = context.params.id_recipe;
//     console.log(id_recipe);
//     const res = await fetch(`http://localhost:3500/recipe/${id_recipe}`);
//     const data = await res.json();
//     console.log(data);
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// }

function DetailRecipe(data) {
  return (
    <div className="container">
      <Layouts />
      <div
        className="row justify-content-center mt-4"
        style={{ marginLeft: "1rem" }}
      >
        <div className="col-4">
          <h1>Loream Sandwich</h1>
        </div>
        <div
          className="row justify-content-center mt-4"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-10">
            <Image
              src="/food1.png"
              alt=""
              width={700}
              height={600}
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
          <p>{[0].ingredients}</p>
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
        ></textarea>
        <Button
          type="submit"
          className="bg-warning mb-4"
          style={{ width: "30rem", height: "3rem", textAlign: "center" }}
        >
          Send
        </Button>
        <div>
          <div className="mt-3 mb-4">
            <h2 style={{ fontWeight: "bold" }}>Comment</h2>
          </div>
          <div className="mb-2">
            <Image src="/foto.png" alt="img" width={50} height={50} />
            <h4 style={{ fontWeight: "bold" }}>Ayudia</h4>
            <p style={{ marginBottom: "30px" }}>
              Nice recipe. simple and delicious, thankyou
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailRecipe;
