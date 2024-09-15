import React, { useState } from "react";
import { Button, Col, Row, Modal } from "react-bootstrap";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const validarFormulario = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setModalMessage("Faltan campos");
      setIsError(true);
      setShowModal(true);
      return false;
    }

    if (password.length < 6) {
      setModalMessage("El tamaño de la contraseña debe ser 6 caracteres o más");
      setIsError(true);
      setShowModal(true);
      return false;
    }

    setModalMessage("Inicio de sesión exitoso");
    setIsError(false);
    setShowModal(true);

    setEmail("");
    setPassword("");
    return true;
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Inicio de sesión</h1>
        <form onSubmit={validarFormulario}>
          <Row>
            <Col>Email</Col>
            <Col>
              <input
                type="email"
                value={email}
                placeholder="Introduce tu email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>Contraseña</Col>
            <Col>
              <input
                type="password"
                value={password}
                placeholder="Introduce tu contraseña"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </Col>
          </Row>
          <Button type="submit">
            Enviar
          </Button>
        </form>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        animation={true}
        className={isError ? "error-modal" : "success-modal"}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isError ? (
              <FaExclamationTriangle style={{ color: "#dc3545" }} />
            ) : (
              <FaCheckCircle style={{ color: "#28a745" }} />
            )}
            {isError ? " Error" : " Éxito"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button
            variant={isError ? "danger" : "success"}
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
