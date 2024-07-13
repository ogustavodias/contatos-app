import { PayloadAction } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import { RootState } from "../configureStore";

interface ActionWithMeta extends PayloadAction {
  meta: { localStorage: boolean; key: string };
}

const localStorage: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const response = next(action);
    const actionRef = action as ActionWithMeta;

    if (actionRef.meta?.localStorage) {
      const { key } = actionRef.meta;
      const { contacts }: RootState = getState();
      window.localStorage.setItem(key, JSON.stringify(contacts.list));
    }

    return response;
  };

export const getLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  if (value) return JSON.parse(value);
};

export default localStorage;
