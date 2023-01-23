import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddPatient = ({ value, func }) => {
  return (
    <>
      <Modal fullscreen show={value} onHide={() => func(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить пацыент</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <form className="row">
            <div className="col-8 offset-2">
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      className="form-control"
                    />
                    <label className="form-label" for="form6Example1">
                      First name
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control"
                    />
                    <label className="form-label" for="form6Example2">
                      Last name
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form6Example3"
                  className="form-control"
                />
                <label className="form-label" for="form6Example3">
                  Company name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form6Example4"
                  className="form-control"
                />
                <label className="form-label" for="form6Example4">
                  Address
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form6Example5"
                  className="form-control"
                />
                <label className="form-label" for="form6Example5">
                  Email
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="number"
                  id="form6Example6"
                  className="form-control"
                />
                <label className="form-label" for="form6Example6">
                  Phone
                </label>
              </div>
              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form6Example7"
                  rows="4"
                ></textarea>
                <label className="form-label" for="form6Example7">
                  Additional information
                </label>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => func(false)}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPatient;
