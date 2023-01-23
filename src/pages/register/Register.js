import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <Row>
      <Col
        className="mx-auto px-4 py-5 bg-white rounded-4 mt-5"
        md={{ span: 3 }}
      >
        <h6 className="mr-4 mt-2 text-center">РЕГИСТРАЦИЯ</h6>
        <ul
          className="d-flex justify-content-center nav nav-pills my-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`${classes.rgstr_nav_link} nav-link me-2 btn active`}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Email
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`${classes.rgstr_nav_link} nav-link me-2 btn`}
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Телефон
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex="0"
          >
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Логин</Form.Label>
              <Form.Control type="email" placeholder="Введитее email" />
            </Form.Group>
          </div>
          <div
            className="tab-pane"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            <Form.Group className="mb-4" controlId="formBasicNumber">
              <Form.Label>Телефон номер</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введитее номер телефона"
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-2" controlId="formBasicPassword1">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword2">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control type="password" placeholder="Повторите пароль" />
        </Form.Group>
        <Button className="w-100" variant="success">
          Регистрация
        </Button>
        <p className={`fw-bold mt-3 ${classes.font}`}>
          Есть учетной записи?
          <Link
            to="/auth/login"
            className="text-success text-decoration-none ms-1"
          >
            Авторизация
          </Link>
        </p>
      </Col>
    </Row>
  );
};

export default Register;
