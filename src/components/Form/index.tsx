// React
import React, { FormEvent } from "react";

// Styles
import * as S from "./styles";

// Components
import Input from "../Input";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { add, endEdit } from "../../redux/reducers/contacts";
import { RootState } from "../../redux/configureStore";

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ setModalOpen }: Props) => {
  const { inEditing } = useSelector((state: RootState) => state.contacts);

  const [name, setName] = React.useState(inEditing?.name || "");
  const [nickname, setNickname] = React.useState(inEditing?.nickname || "");
  const [tel, setTel] = React.useState(inEditing?.tel || "");
  const [email, setEmail] = React.useState(inEditing?.email || "");

  const dispatch = useDispatch();

  function saveContact(e: FormEvent) {
    e.preventDefault();
    if (inEditing) {
      dispatch(add({ name, nickname, tel, email, id: inEditing.id }));
      dispatch(endEdit());
    } else dispatch(add({ name, nickname, tel, email }));

    setModalOpen(false);
  }

  function cancel() {
    if (inEditing) dispatch(endEdit());
    setModalOpen(false);
  }

  return (
    <S.Container>
      <S.Title>Novo contato</S.Title>
      <form onSubmit={saveContact}>
        <Input
          label={{ value: "Nome", color: "#127369" }}
          display="block"
          placeholder="Nome do contato"
          value={name}
          maxLength={18}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <Input
          label={{ value: "Apelido", color: "#127369" }}
          display="block"
          optional={true}
          placeholder="Apelido do contato"
          value={nickname}
          maxLength={10}
          onChange={({ target }) => setNickname(target.value)}
        />
        <Input
          label={{ value: "Telefone", color: "#127369" }}
          display="block"
          type="tel"
          autoComplete="tel"
          placeholder="Número de telefone do contato"
          value={tel}
          onChange={({ target }) => setTel(target.value)}
          required
          mask="+55 (99) 99999-9999"
        />
        <Input
          label={{ value: "E-mail", color: "#127369" }}
          display="block"
          type="email"
          placeholder="E-mail do contato"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <S.Actions>
          <S.SaveButton type="submit">Salvar</S.SaveButton>
          <S.CancelButton type="reset" onClick={cancel}>
            Cancelar
          </S.CancelButton>
        </S.Actions>
      </form>
    </S.Container>
  );
};

export default Form;
