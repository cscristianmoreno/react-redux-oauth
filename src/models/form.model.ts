import { FormEvent, FormEventHandler, ReactNode } from "react";
import { FuncModelStruct } from "./fc.model";

export type formModelStruct = {
    children: ReactNode,
    onSubmit?: FormEventHandler
}

export type FormEventType = FormEvent<HTMLFormElement>;
export type FormSubmitModelStruct = FuncModelStruct<FormEventType, void>;
export type FormValueModelStruct = {
    [k: string]: FormDataEntryValue;
};