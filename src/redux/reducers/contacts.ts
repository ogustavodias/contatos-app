// Redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types and Interfaces
import { Contact, ContactWithoutId } from "../../models/contacts";

// Helper functions
import { getLocalStorage } from "../midlewares/localStorage";

export interface InitialContacts {
  list: Contact[];
  inEditing: Contact | null;
}

const initialState: InitialContacts = {
  list: getLocalStorage("contacts") ? [...getLocalStorage("contacts")] : [],
  inEditing: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    add: {
      reducer(state, action: PayloadAction<ContactWithoutId | Contact>) {
        if (!state.inEditing) {
          const indexOfLastElement = state.list.length - 1;
          const last_id =
            indexOfLastElement === -1 ? 1 : state.list[indexOfLastElement].id;
          state.list.push({ ...action.payload, id: last_id + 1 });
        } else {
          const payloadId = (action.payload as Contact).id;
          state.list = state.list.map((item) => {
            if (item.id !== payloadId) return item;
            else return action.payload as Contact;
          });
        }
      },
      prepare(payload) {
        return {
          payload,
          meta: { localStorage: true, key: "contacts" },
        };
      },
    },

    remove: {
      reducer(state, action: PayloadAction<number>) {
        state.list = state.list.filter((item) => item.id !== action.payload);
      },
      prepare(payload) {
        return {
          payload,
          meta: { localStorage: true, key: "contacts" },
        };
      },
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
