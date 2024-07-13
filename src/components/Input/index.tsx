// Styles
import * as S from "./styles";

// React Typescript
import { InputHTMLAttributes } from "react";

// react-input-mask library
import InputMask from "react-input-mask";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: { value: string; color?: "#127369" | "#ffffff" };
  display?: string;
  optional?: boolean;
  mask?: string;
}

const Input = ({ label, display, optional, mask, ...props }: Props) => {
  return (
    <S.Container display={display}>
      <div>
        <label htmlFor={label.value} style={{ color: label.color }}>
          {label.value}
        </label>
        {optional ? <S.Optional>opcional</S.Optional> : ""}
      </div>
      <InputMask
        mask={mask || ""}
        type="text"
        id={label.value}
        name={label.value}
        {...props}
        maskChar={""}
      />
    </S.Container>
  );
};

export default Input;
