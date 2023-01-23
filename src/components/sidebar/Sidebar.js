import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

function Sidebar({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        launch
      </Button>
      <Offcanvas
        style={{ maxWidth: "20%" }}
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
        enforceFocus={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
