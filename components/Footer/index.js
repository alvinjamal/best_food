import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../../styles/footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: "#EFC81A" }}>
        <div className="row">
          <div className="col-lg-12 mt-5 mb-5">
            <h1 className="text-center">Eat, Cook, Repeat</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-12">
            <h6 className="text-center" style={{ color: "#707070" }}>
              Share your best recipe by uploading here !
            </h6>
          </div>
        </div>
        <div className="row mb-2" style={{ marginLeft: "4rem" }}>
          <div className="col-lg-1 mt-5">
            <Button variant="outline">
              <h6 style={{ color: "#707070" }}>Product</h6>
            </Button>
          </div>
          <div className="col-lg-1  mt-5">
            <Button variant="outline">
              <h6 style={{ color: "#707070" }}>Company</h6>
            </Button>
          </div>
          <div className="col-lg-1  mt-5">
            <Button variant="outline">
              <h6 style={{ color: "#707070" }}>Learn More</h6>
            </Button>
          </div>
          <div className="col-lg-2  mt-5">
            <Button variant="outline">
              <h6 style={{ color: "#707070" }}>Get In Touch</h6>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
