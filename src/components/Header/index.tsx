// Styles
import * as S from "./styles";

// Components
import Input from "../Input";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setSearch }: Props) => {
  return (
    <S.Container>
      <Input
        label={{ value: "Buscar", color: "#ffffff" }}
        placeholder="Nome ou apelido"
        onChange={({ target }) => setSearch(target.value)}
      />
    </S.Container>
  );
};

export default Header;
