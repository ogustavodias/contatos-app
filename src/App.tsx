// Styles
import { GlobalStyle } from "./styles/Global";

// Components
import Header from "./components/Header";
import OpenModalButton from "./components/OpenModalButton";
import Contacts from "./components/Contacts";
import Modal from "./components/Modal";
import Form from "./components/Form";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <Contacts />
      <Modal>
        <Form />
      </Modal>
      <OpenModalButton />
    </main>
  );
}

export default App;
