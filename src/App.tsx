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

// Redux
import { useSelector } from "react-redux";
import { RootState } from "./redux/configureStore";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const { inEditing } = useSelector((state: RootState) => state.contacts);

  React.useEffect(() => {
    if (inEditing) setModalOpen(true);
  }, [inEditing]);

  return (
    <main>
      <GlobalStyle />
      <Header setSearch={setSearch} />
      <Contacts search={search} />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Form setModalOpen={setModalOpen} />
      </Modal>
      <OpenModalButton onClick={() => setModalOpen(true)} />
    </main>
  );
}

export default App;
