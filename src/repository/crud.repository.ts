import { AxiosResponse } from "axios";
import { RepositoryImpl } from "../impl/repository.impl";
import { http } from "../services/http.service";

export class CrudRepository<T> implements RepositoryImpl<T> {
    
    constructor(private path: string) {
        
    }
    
    async save(data: T): Promise<void> {
        await http.post<T>(this.path + "/register", data);
    }

    async findAll(): Promise<T> {
        const result: AxiosResponse<T> = await http.get<T>(this.path + "/all");
        return result.data;
    }
}