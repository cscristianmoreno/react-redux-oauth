import { EndpointDefinitions, createApi } from "@reduxjs/toolkit/query/react";
import { http } from "../../services/http.service";
import { ApiModelStruct } from "../../models/redux.model";

export const reduxApi: ApiModelStruct = createApi({
    reducerPath: "reducerApi",
    baseQuery: http,
    endpoints: (): EndpointDefinitions => ({})
});