// Styled-components
import styled, { keyframes } from "styled-components";

export const Container = styled.ul`
  padding: 160px 20px 20px;
`;

const show = keyframes`
  from {
    transform: translateX(-100px);
  } to {
    transform: initial;
  }
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--white-emerald-light);
  border-radius: 50px 8px 8px 50px;
  cursor: pointer;
  animation: ${show} 0.3s ease forwards;

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

export const EmptyMessage = styled.p`
  color: var(--white);
  font-weight: 700;
`;

export const Trash = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  width: 30px;
  margin-left: auto;
  margin-right: 20px;
  transition: transform 0.3s ease;

  img {
    display: block;
    width: 100%;
  }

  &:hover {
    transform: scale(0.8);
  }
`;
