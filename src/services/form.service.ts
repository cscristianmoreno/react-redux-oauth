import { FormEvent } from "react";
import { FuncModelStruct } from "../models/fc.model";
import { FormValueModelStruct } from "../models/form.model";

export const formService: FuncModelStruct<FormEvent<HTMLFormElement>, FormValueModelStruct> = (form?: FormEvent<HTMLFormElement>): FormValueModelStruct => {
    if (!form) {
        return {};
    }

    form.preventDefault();

    const formData: FormData = new FormData(form.currentTarget);
    const formBody: FormValueModelStruct = Object.fromEntries(formData.entries());
    
    return formBody;
};