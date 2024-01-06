import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { userAction } from "../actions/user.action";
import { reduxApi } from "../api/redux.api";

export const configStore: EnhancedStore = configureStore({
    reducer: { 
        [userAction.reducerPath]: userAction.reducer,
        [reduxApi.reducerPath]: reduxApi.reducer 
    },
    middleware: (getDefaultMiddleware: any): any => getDefaultMiddleware().concat(reduxApi.middleware)
});