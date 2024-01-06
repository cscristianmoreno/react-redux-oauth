import { ColorPaletteProp } from "@mui/joy";
import { ReactElement } from "react";

export type SnackbarModelStruct = {
    open: boolean,
    message?: string,
    color?: ColorPaletteProp,
    icon?: ReactElement
};