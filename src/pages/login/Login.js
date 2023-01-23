import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Register = () => {
  return (
    <Row>
      <Col
        className="mx-auto px-4 py-5 bg-white rounded-4 mt-5"
        md={{ span: 3 }}
      >
        <h6 class="mr-4 mt-2 text-center">Войти в систему</h6>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите email или номер телефона"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Запомнить меня" />
            <Link className="text-decoration-none text-success">
              Забыли пароль?
            </Link>
          </Form.Group>
          <Form.Group className="px-2">
            <Button className="w-100" variant="success" type="submit">
              Войти
            </Button>
          </Form.Group>

          <p className={`fw-bold mt-3 ${classes.font}`}>
            Нет учетной записи?
            <Link
              to="/auth/register"
              class="text-success text-decoration-none ms-1"
            >
              Регистрация
            </Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
