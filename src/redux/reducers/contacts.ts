// Redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types and Interfaces
import { Contact, ContactWithoutId } from "../../models/contacts";

export interface InitialContacts {
  list: Contact[];
  inEditing: Contact | null;
}

const initialState: InitialContacts = {
  list: [
    { id: 1, name: "Guga", email: "teste", tel: "123123" },
    { id: 2, name: "Guga2", email: "teste", tel: "123123" },
  ],
  inEditing: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    add(state, action: PayloadAction<ContactWithoutId | Contact>) {
      if (!state.inEditing) {
        const indexOfLastElement = state.list.length - 1;
        const last_id = state.list[indexOfLastElement].id;
        state.list.push({ ...action.payload, id: last_id + 1 });
      } else {
        const payloadId = (action.payload as Contact).id;
        state.list = state.list.map((item) => {
          if (item.id !== payloadId) return item;
          else return action.payload as Contact;
        });
      }
    },

    remove(state, action: PayloadAction<number>) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },

    edit(state, action: PayloadAction<Contact>) {
      state.inEditing = action.payload;
    },

    endEdit(state) {
      state.inEditing = null;
    },
  },
});

export const { add, remove, edit, endEdit } = slice.actions;

export default slice.reducer;
