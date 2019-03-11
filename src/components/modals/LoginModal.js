import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class LoginModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.show}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle}>streetorigin.com</ModalHeader>
        <ModalBody>Placeholder for Login Page</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>
            Close
          </Button>{" "}
        </ModalFooter>
      </Modal>
    );
  }
}

export default LoginModal;
