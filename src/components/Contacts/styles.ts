import styled from "styled-components";

export const Container = styled.ul`
  padding: 160px 20px 20px;
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--white-emerald-light);
  border-radius: 50px 8px 8px 50px;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const FirstLetterName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: var(--gray);
  font-size: 30px;
  font-weight: bold;
  color: var(--bg-primary);
`;

export const Name = styled.span`
  color: var(--bg-secundary);
`;

export const Nickname = styled.span`
  color: var(--white-emerald);
  font-size: 14px;
`;
