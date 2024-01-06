import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { http } from "../services/http.service";
import { Token } from "../utils/token.util";

export class RequestInterceptor {
    constructor() {
        this.initializerInterceptor();
    }

    public initializerInterceptor(): void {
        http.interceptors.request.use((req: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> => {
            req.headers["Content-Type"] = "application/json";
            const token: string | null = Token.load();
            req.headers["Authorization"] = "Bearer " + token;
            return req;
        });

        http.interceptors.response.use(
            (res: AxiosResponse<unknown>): AxiosResponse<unknown> => {
                res.headers["Content-Type"] = "application/json";
                return res;
            },
            (error: AxiosError): AxiosError => { 
                console.log("Llegó al interceptor");
                throw new Error(error.message);
            }
        );
    }
}