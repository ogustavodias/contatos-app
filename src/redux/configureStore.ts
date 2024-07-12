// Redux
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import contacts, { InitialContacts } from "./reducers/contacts";

const store = configureStore({
  reducer: { contacts },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export interface RootState {
  contacts: InitialContacts;
}

export default store;
