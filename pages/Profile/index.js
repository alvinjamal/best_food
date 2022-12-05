import Image from "next/image";
import { globals } from "styled-jsx/css";
import { Button, Form } from "react-bootstrap";

function DetailRecipe() {
  return (
    <div>
      <div style={{ height: "30rem", border: "1px solid" }}>
        <Image
          className="mt-5 mb-2"
          src="/foto2.png"
          alt="img"
          width={200}
          height={200}
        />
        <h3 style={{ fontWeight: "bold" }}>Garneta Sharina</h3>
      </div>
      <div>
        <button className="btn ">My Recipe</button>
        <button className="btn ">Saved Recipe</button>
        <button className="btn ">Liked Recipe</button>
      </div>
    </div>
  );
}

export default DetailRecipe;
