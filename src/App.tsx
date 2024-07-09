// React
import React from "react";

// Styles
import { GlobalStyle } from "./styles/Global";

// Components
import Header from "./components/Header";
import OpenModalButton from "./components/OpenModalButton";
import Contacts from "./components/Contacts";
import Modal from "./components/Modal";
import Form from "./components/Form";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <main>
      <GlobalStyle />
      <Header />
      <Contacts />
      <Modal modalOpen={modalOpen}>
        <Form setModalOpen={setModalOpen} />
      </Modal>
      <OpenModalButton onClick={() => setModalOpen(true)} />
    </main>
  );
}

export default App;
