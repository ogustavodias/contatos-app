// Styles
import * as S from "./styles";

// React Typescript
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  modalOpen: boolean;
}

const Modal = ({ children, modalOpen }: Props) => {
  if (!modalOpen) return;

  // Else
  return <S.Container>{children}</S.Container>;
};

export default Modal;
