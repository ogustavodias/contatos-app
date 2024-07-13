// Styles
import * as S from "./styles";

// React Typescript
import { PropsWithChildren } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { endEdit } from "../../redux/reducers/contacts";

interface Props extends PropsWithChildren {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, modalOpen, setModalOpen }: Props) => {
  const { inEditing } = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  function checkOutsideClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      if (inEditing) dispatch(endEdit());
      setModalOpen(false);
    }
  }

  if (!modalOpen) return;

  // Else
  return (
    <S.Container onClick={(e) => checkOutsideClick(e)}>{children}</S.Container>
  );
};

export default Modal;
