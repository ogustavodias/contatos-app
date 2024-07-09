import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
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
