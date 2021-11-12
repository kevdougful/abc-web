import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// TODO: Replace this type with actual backend user type
interface User {
  email: string;
  name: string;
}

interface AuthState {
  user: any | null;
}

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user } }: PayloadAction<{ user: any }>
    ) => {
      state.user = user;
    },
  },
});

export const { setCredentials } = slice.actions;

export const getCurrentUser = (state: RootState) => state.auth.user;

export default slice.reducer;
