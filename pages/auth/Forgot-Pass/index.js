import { Button } from "react-bootstrap";

const Forgot = () => {
  return (
    <div className="container row align-items-center">
      <div className="col-lg-6 col-sm-8">
        <div
          style={{
            backgroundImage: `url(/col.png)`,
            height: "40rem",
            width: "41rem",
            opacity: 0.2,
            marginTop: "2rem",
          }}
        />
      </div>
      <div className="col-lg-4 offset-lg-1 col-sm-10 mt-sm-4">
        <div className="flex-end">
          <div
            className="Forgot text-center col-12 mb-2 text-warning"
            style={{
              marginLeft: "3rem",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Forgot Password
          </div>
          <h5
            className="text-secondary col-10 text-center mb-3"
            style={{ marginLeft: "6rem" }}
          >
            We just need your registered e-mail address to send your password
            resend
          </h5>
        </div>
        <div className="input ">
          <form className="container mb-3 col-8 mt-4 ">
            <h5 className="text-secondary">E-mail</h5>
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              placeholder="Email"
              style={{ width: "25rem", height: "40px" }}
            />
            <Button
              href={"/Code"}
              type="submit"
              className="btn btn-warning mt-3"
              style={{ width: "25rem" }}
            >
              Send Email
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
