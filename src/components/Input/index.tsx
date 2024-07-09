// Styles
import * as S from "./styles";

// React Typescript
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: { value: string; color?: "#10403B" | "#ffffff" };
}

const Input = ({ label, ...props }: Props) => {
  return (
    <S.Container>
      <label htmlFor={label.value} style={{ color: label.color }}>
        {label.value}
      </label>
      <input type="text" id={label.value} name={label.value} {...props} />
    </S.Container>
  );
};

export default Input;
