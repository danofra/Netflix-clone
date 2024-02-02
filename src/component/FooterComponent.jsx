import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function FooterComponent() {
  return (
    <>
      <Row className="justify-content-start">
        <Col className="col-md-2 d-flex p-0 offset-2">
          <div className="p-2">
            <i className="fs-3 bi bi-facebook"></i>
          </div>
          <div className="p-2">
            <i className="fs-3 bi bi-instagram"></i>
          </div>
          <div className="p-2">
            <i className="fs-3 bi bi-twitter-x"></i>
          </div>
          <div className="p-2">
            <i className="fs-3 bi bi-youtube"></i>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col className="col-md-2 col-sm-6">
          <p>Audio e Sottotitoli</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <Button className="btn btn-outline-light btn-dark p-2">
            Service Code
          </Button>
        </Col>
        <Col className="col-md-2 col-sm-6">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </Col>
        <Col className="col-md-2 col-sm-6">
          <p>Audio Description</p>
          <p>Investion Relation</p>
          <p>Legal Notices</p>
        </Col>
        <Col className="col-md-2 col-sm-6">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </Col>
      </Row>
      <Row className="justify-content-start mt-3">
        <Col className="col col-md-6 d-flex p-0 offset-2">
          <div className="p-2">
            <p>&copy; 1997-2019 Netflix, Inc.</p>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default FooterComponent;
