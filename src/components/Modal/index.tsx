// Styles
import * as S from "./styles";

// React Typescript
import { PropsWithChildren } from "react";

const Modal = ({ children }: PropsWithChildren) => {
  const open = true;

  if (!open) return;

  // Else
  return <S.Container>{children}</S.Container>;
};

export default Modal;
