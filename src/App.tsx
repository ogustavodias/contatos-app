// Styles
import { GlobalStyle } from "./styles/Global";

// Components
import Header from "./components/Header";
import OpenModalButton from "./components/OpenModalButton";
import Contacts from "./components/Contacts";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <Contacts />
      <OpenModalButton />
    </main>
  );
}

export default App;
