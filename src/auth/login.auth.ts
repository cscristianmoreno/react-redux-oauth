import { AxiosResponse } from "axios";
import { http } from "../services/http.service";
import { AuthModelStruct } from "../models/auth.model";
import { FormValueModelStruct } from "../models/form.model";

export class Login {
    public async getLogin(data: FormValueModelStruct): Promise<AuthModelStruct> {
        const result: AxiosResponse<AuthModelStruct> = await http.post("/auth/login", data);
        return result.data;
    }
}