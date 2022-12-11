import Image from "next/image";
import { globals } from "styled-jsx/css";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";

function DetailRecipe() {
  return (
    <div className="container">
      <div
        className="row justify-content-center mt-4"
        style={{ marginLeft: "1rem" }}
      >
        <div className="col-4">
          <h1>Loream Sandwich</h1>
        </div>
        <div
          className="row justify-content-center mt-5"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-10">
            <Image src="/food1.png" width={900} height={600} alt="" />
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
          <p>
            - 2 eggs - 2 tbsp mayonnaise - 3 slices bread - a little butter - ⅓
            carton of cress - 2-3 slices of tomato or a lettuce leaf and a slice
            of ham or cheese - crisps , to serve
          </p>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <h4 className="mb-4">Video Step</h4>
          <Link
            href={"/https://www.youtube.com/watch?v=qbw3K7r16Rw"}
            type="submit"
            className="btn btn-warning text-white mt-3"
            style={{
              position: "absolute",
              width: "25rem",
              height: "47px",
            }}
          >
            Link Step
          </Link>
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
    </div>
  );
}

export default DetailRecipe;
