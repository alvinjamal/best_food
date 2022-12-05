import { Form } from "react-bootstrap";

const addRecipe = () => {
  return (
    <div>
      <div className="box">
        <div className="form bg-secondary">
          <Form.Group controlId="formFileSm" className="mb-3 mt-5">
            <Form.Control type="file" size="lg" placeholder="Photo" />
          </Form.Group>
        </div>
        <div className="form bg-secondary">
          <Form.Control
            type="text"
            id="inputPassword5"
            size="lg"
            placeholder="Title"
            aria-describedby="textHelpBlock"
          />
        </div>
        <div className="form ">
          <div className="mt-3 bg-secondary">
            <Form.Control
              type="text"
              id="inputPassword5"
              size="lg"
              placeholder="Ingeredients"
              aria-describedby="textHelpBlock"
              style={{ height: "20rem" }}
            />
          </div>
        </div>
        <div className="form bg-secondary">
          <Form.Group controlId="formFileSm" className="mb-3 mt-3">
            <Form.Control type="file" size="lg" placeholder="Video" />
          </Form.Group>
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
    </div>
  );
};

export default addRecipe;
