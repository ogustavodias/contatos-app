// Styled-components
import styled from "styled-components";

// Types and Interfaces
import { Props } from ".";

type ContainerProps = Omit<Props, "label">;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.display === "block" ? "column" : "row")};
  align-items: ${(props) => (props.display === "block" ? "initial" : "center")};
  gap: 8px;

  label {
    font-weight: 700;
  }

  input {
    width: 100%;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 8px;
    font-size: 14px;
    color: var(--bg-primary);

    &::placeholder {
      color: var(--white-emerald);
    }
  }
`;

export const Optional = styled.span`
  font-weight: 300;
  font-size: 14px;
  color: var(--bg-secundary);
  margin-left: 8px;
`;
