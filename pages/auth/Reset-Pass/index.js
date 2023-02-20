import { Button } from "react-bootstrap";

const Code = () => {
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
        <div className="input ">
          <form className="container mb-3 col-9">
            <div
              className="Forgot text-start mb-3 text-warning"
              style={{
                marginLeft: "10%",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Change Password
            </div>
            <h5 className="text-secondary">New Password</h5>
            <input
              type="text"
              className="form-control mb-2"
              name="Code 6 Digit"
              placeholder="New Password"
              style={{ width: "25rem", height: "40px" }}
            />
            <Button
              href={"/Login"}
              type="submit"
              className="btn btn-warning mt-3"
              style={{ width: "25rem" }}
            >
              Change Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Code;
