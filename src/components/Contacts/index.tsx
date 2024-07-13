// React
import { MouseEvent } from "react";

// Styles
import * as S from "./styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { edit, remove, selectContacts } from "../../redux/reducers/contacts";

// Icons SRC
import trashIcon from "../../assets/trash-can.png";

// Types and Interfaces
import { Contact } from "../../models/contacts";

interface Props {
  search: string;
}

const Contacts = ({ search }: Props) => {
  const list = useSelector(selectContacts(search));

  const dispatch = useDispatch();

  function handleCard(e: MouseEvent, payload: Contact) {
    const { target } = e;
    const trash = (target as HTMLElement).dataset.action === "remove";
    if (!trash) dispatch(edit(payload));
  }

  function showContacts() {
    const contacts = list.map((item) => {
      const firstLetterName = item.name.charAt(0).toUpperCase();
      const nickName = item.nickname ? `(${item.nickname})` : "";

      return (
        <S.Card key={item.id} onClick={(e) => handleCard(e, item)}>
          <S.FirstLetterName>{firstLetterName}</S.FirstLetterName>
          <S.Name>{item.name}</S.Name>
          <S.Nickname>{nickName}</S.Nickname>
          <S.Trash
            src={trashIcon}
            onClick={() => dispatch(remove(item.id))}
            data-action="remove"
          />
        </S.Card>
      );
    });

    return contacts;
  }

  return (
    <S.Container>
      {!list.length ? (
        <S.EmptyMessage>Nenhum contato encontrado</S.EmptyMessage>
      ) : (
        showContacts()
      )}
    </S.Container>
  );
};

export default Contacts;
