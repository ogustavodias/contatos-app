// Styles
import * as S from "./styles";

// Components
import Input from "../Input";

const Header = () => {
  return (
    <S.Container>
      <Input
        label={{ value: "Buscar", color: "#ffffff" }}
        placeholder="Nome ou apelido"
      />
    </S.Container>
  );
};

export default Header;
