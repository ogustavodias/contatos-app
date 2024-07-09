// Styles
import * as S from "./styles";

// React Typescript
import { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: { value: string; color?: "#127369" | "#ffffff" };
  display?: string;
  optional?: boolean;
}

const Input = ({ label, display, optional, ...props }: Props) => {
  return (
    <S.Container display={display}>
      <div>
        <label htmlFor={label.value} style={{ color: label.color }}>
          {label.value}
        </label>
        {optional ? <S.Optional>opcional</S.Optional> : ""}
      </div>
      <input type="text" id={label.value} name={label.value} {...props} />
    </S.Container>
  );
};

export default Input;
