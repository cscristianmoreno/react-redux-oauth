import { BaseQueryFn, EndpointBuilder } from "@reduxjs/toolkit/query/react";
import { reduxApi } from "./redux.api";
import { ProductDTO } from "../../dto/product.dto";

const productsApi: any = reduxApi.injectEndpoints({
    endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>): any => ({
        GetProducts: build.query<ProductDTO[], void>({
            query: (): string => "/products/all"
        })
    })
});

export const { useGetProductsQuery }: any = productsApi;