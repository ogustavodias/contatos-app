// Styles
import * as S from "./styles";

// React Typescript
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  modalOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ children, modalOpen, closeModal }: Props) => {
  function checkOutsideClick(e: React.MouseEvent) {
    console.log(e.target);
    if (e.target === e.currentTarget) closeModal();
  }

  if (!modalOpen) return;

  // Else
  return <S.Container onMouseDown={checkOutsideClick}>{children}</S.Container>;
};

export default Modal;
