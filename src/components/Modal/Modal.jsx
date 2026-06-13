import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContent, ModalClose, ModalForm, ModalLabel } from "./Modal.styled";

import { GrClose } from "react-icons/gr";

export const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {
    name: "",
    email: "",
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") this.props.onClose();
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onClose();
    this.setState({
      name: "",
      email: "",
    });
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <ModalClose onClick={this.props.onClose}><GrClose /></ModalClose>
          <ModalForm action="get" onSubmit={this.handleSubmit}>
            <ModalLabel htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </ModalLabel>

            <ModalLabel htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </ModalLabel>
            <button type="submit">Log in</button>
          </ModalForm>
        </ModalContent>
      </Backdrop>,
      modalRoot,
    );
  }
}

export default Modal;
