// React
import React from "react";

// Styles
import { GlobalStyle } from "./styles/Global";

// Components
import Header from "./components/Header";
import NewContactButton from "./components/NewContactButton";
import Contacts from "./components/Contacts";
import Modal from "./components/Modal";
import Form from "./components/Form";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/configureStore";
import { endEdit } from "./redux/reducers/contacts";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const { inEditing } = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    if (inEditing) dispatch(endEdit());
    setModalOpen(false);
  }

  React.useEffect(() => {
    if (inEditing) setModalOpen(true);
  }, [inEditing]);

  return (
    <main>
      <GlobalStyle />
      <Header setSearch={setSearch} />
      <Contacts search={search} />
      <Modal modalOpen={modalOpen} closeModal={closeModal}>
        <Form setModalOpen={setModalOpen} />
      </Modal>
      <NewContactButton onClick={openModal} />
    </main>
  );
}

export default App;
