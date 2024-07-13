// Redux
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import contacts, { InitialContacts } from "./reducers/contacts";

// Middlewares
import localStorage from "./midlewares/localStorage";

const store = configureStore({
  reducer: { contacts },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export interface RootState {
  contacts: InitialContacts;
}

export default store;
