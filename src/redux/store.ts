import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadUser } from "./auth/auth.reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

store.dispatch(loadUser());
export default store;
