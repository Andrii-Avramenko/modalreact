import { Component } from "react";
import { Container } from "./components/Container/Container";
import { GlobalStyle } from "./components/GlobalStyle";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <h2>Log in to discover more</h2>
        <button type="button" onClick={this.toggleModal}>
          Log in
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal} />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
