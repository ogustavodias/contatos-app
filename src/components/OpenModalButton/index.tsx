// Styles
import * as S from "./styles";

// SRC of icon
import addIcon from "../../assets/add-user.png";

const OpenModalButton = () => {
  return (
    <S.Button>
      <img src={addIcon} />{" "}
    </S.Button>
  );
};

export default OpenModalButton;
