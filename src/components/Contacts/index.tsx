// React
import { MouseEvent } from "react";

// Styles
import * as S from "./styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { edit, remove } from "../../redux/reducers/contacts";

// Icons SRC
import trashIcon from "../../assets/trash-can.png";

// Types and Interfaces
import { Contact } from "../../models/contacts";

interface Props {
  search: string;
}

const Contacts = ({ search }: Props) => {
  const list = useSelector((state: RootState) =>
    state.contacts.list.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.nickname?.toLowerCase().includes(search.toLowerCase())
    )
  );
  const dispatch = useDispatch();

  function handleCard(e: MouseEvent, payload: Contact) {
    const { target } = e;
    const firstParent = (target as HTMLElement).parentElement;
    const remove = firstParent?.dataset.action === "remove";
    if (!remove) dispatch(edit(payload));
  }

  return (
    <S.Container>
      {!list.length ? (
        <S.EmptyMessage>Nenhum contato encontrado</S.EmptyMessage>
      ) : (
        list.map((item) => {
          return (
            <S.Card key={item.id} onClick={(e) => handleCard(e, item)}>
              <S.FirstLetterName>
                {item.name.charAt(0).toUpperCase()}
              </S.FirstLetterName>
              <S.Name>{item.name}</S.Name>
              {item.nickname ? <S.Nickname>({item.nickname})</S.Nickname> : ""}
              <S.Trash
                type="button"
                onClick={() => dispatch(remove(item.id))}
                data-action="remove"
              >
                <img src={trashIcon} />
              </S.Trash>
            </S.Card>
          );
        })
      )}
    </S.Container>
  );
};

export default Contacts;
