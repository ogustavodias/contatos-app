// Styles
import * as S from "./styles";

// Components
import Input from "../Input";

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ setModalOpen }: Props) => {
  return (
    <S.Container>
      <S.Title>Novo contato</S.Title>
      <form>
        <Input
          label={{ value: "Nome", color: "#127369" }}
          display="block"
          placeholder="Nome do contato"
        />
        <Input
          label={{ value: "Apelido", color: "#127369" }}
          display="block"
          optional={true}
          placeholder="Apelido do contato"
        />
        <Input
          label={{ value: "Telefone", color: "#127369" }}
          display="block"
          type="tel"
          placeholder="Número de telefone do contato"
        />
        <Input
          label={{ value: "E-mail", color: "#127369" }}
          display="block"
          type="email"
          placeholder="E-mail do contato"
        />
        <S.Actions>
          <S.SaveButton>Salvar</S.SaveButton>
          <S.CancelButton onClick={() => setModalOpen(false)}>
            Cancelar
          </S.CancelButton>
        </S.Actions>
      </form>
    </S.Container>
  );
};

export default Form;
