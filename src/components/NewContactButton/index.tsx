// Styles
import * as S from "./styles";

// SRC of icon
import addIcon from "../../assets/add-user.png";
import { ButtonHTMLAttributes } from "react";

const NewContactButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.Button {...props}>
      <img src={addIcon} />
    </S.Button>
  );
};

export default NewContactButton;
