// Styled-components
import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: var(--gray);
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: var(--bg-primary);
  margin-bottom: 40px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const inCommonButton = css`
  font-size: 18px;
  padding: 4px 12px;
  color: var(--white);
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  ${inCommonButton};
  background-color: var(--green-success);
`;

export const CancelButton = styled.button`
  ${inCommonButton};
  background-color: var(--red-danger);
`;
