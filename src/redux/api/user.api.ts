import { Api, BaseQueryApi, BaseQueryFn, EndpointBuilder, reactHooksModuleName} from "@reduxjs/toolkit/query/react";
import { FormValueModelStruct } from "../../models/form.model";
import { reduxApi } from "./redux.api";
import { Login } from "../../auth/login.auth";
import { AuthModelStruct } from "../../models/auth.model";
import { QueryReturnValue, UserEndpointModelStruct } from "../../models/redux.model";
import { AxiosInstance } from "axios";
import { credentials } from "../actions/user.action";
import { Token } from "../../utils/token.util";

const userApi: Api<AxiosInstance, never, "reducerApi", never, typeof reactHooksModuleName> = reduxApi.injectEndpoints({
    endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>): UserEndpointModelStruct => ({
        register: build.mutation<void, FormValueModelStruct>({
            query: (data: FormValueModelStruct): unknown => ({
                url: "/auth/register",
                method: "POST",
                body: {...data}
            })
        }),
        login: build.mutation<AuthModelStruct, FormValueModelStruct>({
            queryFn: async (data: FormValueModelStruct, api: BaseQueryApi): Promise<QueryReturnValue<AuthModelStruct>> => {
                const login: Login = new Login();
                const auth: AuthModelStruct = await login.getLogin(data);

                Token.save(auth.token);
                api.dispatch(credentials(auth));
                
                return {
                    data: auth
                };
            }
        }),
        authentication: build.query<AuthModelStruct, void>({
            query: (): unknown => ({
                url: "/auth/authentication",
                method: "POST"
            })
        }) 
    })
});

export const { useRegisterMutation, useLoginMutation, useAuthenticationQuery }: any  = userApi;