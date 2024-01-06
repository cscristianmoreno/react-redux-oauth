import { AxiosInstance } from "axios";
import { configStore } from "../redux/store/redux.store";
import { Api, BaseQueryFn, EndpointDefinitions, MutationDefinition, QueryDefinition, coreModuleName, reactHooksModuleName } from "@reduxjs/toolkit/query/react";
import { FormValueModelStruct } from "./form.model";
import { AuthModelStruct } from "./auth.model";

export type RootState = ReturnType<typeof configStore.getState>;

export type ApiModelStruct = Api<AxiosInstance, EndpointDefinitions, "reducerApi", never, typeof coreModuleName | typeof reactHooksModuleName>;

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> = {
    error: E;
    data?: undefined;
    meta?: M;
} | {
    error?: undefined;
    data: T;
    meta?: M;
};

export type UserEndpointModelStruct = {
    register: MutationDefinition<FormValueModelStruct, BaseQueryFn, string, void, string>,
    login: MutationDefinition<FormValueModelStruct, BaseQueryFn, string, AuthModelStruct, string>,
    authentication: QueryDefinition<void, BaseQueryFn, string, AuthModelStruct, string>,
};

