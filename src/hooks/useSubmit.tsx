import { FuncModelStruct } from "../models/fc.model";
import { FormSubmitModelStruct, FormValueModelStruct } from "../models/form.model";
import { FormEvent } from "react";
import { formService } from "../services/form.service";
import { useLoginMutation, useRegisterMutation } from "../redux/api/user.api";
import { SubmitModelStruct } from "../models/submit.model";

export const useSubmit: FuncModelStruct<void, SubmitModelStruct> = (): SubmitModelStruct => {
    const [register, registerResult]: any = useRegisterMutation();
    const [login, loginResult]: any = useLoginMutation();

    const onRegister: FormSubmitModelStruct = (form?: FormEvent<HTMLFormElement>): void => {
        if (!form) {
            return;
        }

        form.preventDefault();
        const data: FormValueModelStruct = formService(form);

        register(data);
    };

    const onLogin: FormSubmitModelStruct = (form?: FormEvent<HTMLFormElement>): void => {
        if (!form) {
            return;
        }

        form.preventDefault();
        const data: FormValueModelStruct = formService(form);

        login(data);
    };

    return { onRegister, registerResult, onLogin, loginResult };
};