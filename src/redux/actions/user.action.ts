import { CaseReducerActions, PayloadAction, Slice, SliceCaseReducers, UnknownAction, createSlice } from "@reduxjs/toolkit";
import { AuthModelStruct } from "../../models/auth.model";

export const userAction: Slice = createSlice({
    name: "user",
    initialState: { token: null, user: null, logged: false } as AuthModelStruct,
    reducers: {
        credentials: (state: AuthModelStruct, action: PayloadAction<AuthModelStruct>): void => {
            const { token, user }: AuthModelStruct = action.payload;

            state.token = token;
            state.user = user;
            state.logged = true;
        },
        logout: (state: AuthModelStruct): void => {
            state.token = null;
            state.user = null;
            state.logged = false;
        }
    }
});

export const { credentials, logout }: CaseReducerActions<SliceCaseReducers<UnknownAction>, string> = userAction.actions;