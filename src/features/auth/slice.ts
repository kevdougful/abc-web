import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// TODO: Replace this type with actual backend user type
interface User {
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

export const getCurrentUser = (state: RootState) => state.auth.user;

export default slice.reducer;
