import { FormControl, FormLabel, Input } from "@mui/joy";
import { FC, ReactElement } from "react";
import { fieldModelStruct } from "../../../models/field.model";

const FieldComponent: FC<fieldModelStruct> = ({ label, placeholder, type, name }: fieldModelStruct): ReactElement => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input name={name} type={type} placeholder={placeholder}/>
        </FormControl>
    );
};

export default FieldComponent;