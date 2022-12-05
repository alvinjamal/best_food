import Image from "next/image";
import { globals } from "styled-jsx/css";
import { Button, Form } from "react-bootstrap";

function DetailRecipe() {
  return (
    <div className="container">
      <div>
        <div className="food" style={{ backgrounColor: "blue" }}>
          <div className="wrapper-left mt-2 ">
            <div>
              <div className="box mb-3" style={{ textAlign: "center" }}>
                <h1>Loream Sandwich</h1>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src="/food1.png" alt="makanan" width={800} height={700} />
            </div>
          </div>
        </div>
        <div>
          <Form>
            <div className="mt-5 mb-3 bg-secondary">
              <Form.Control
                type="text"
                id="inputPassword5"
                size="lg"
                placeholder="Comment"
                style={{ height: "15rem", textAlign: "center" }}
              />
            </div>
          </Form>
          <Button
            type="submit"
            className="bg-warning"
            style={{ width: "30rem", height: "3rem", textAlign: "center" }}
          >
            Send
          </Button>
        </div>
        <div>
          <div className="mt-3 mb-3">
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
      <div id="end">
        <div class="background">
          <h2 class="data mb-5">Eat, Cook, Repeat</h2>
          <a style={{ color: "#707070" }}>
            Share your best recipe by uploading here !
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailRecipe;
