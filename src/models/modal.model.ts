import { ReactElement, ReactNode } from "react";

export type modalModelStruct = {
    icon?: ReactElement,
    open: boolean,
    onClose: () => void,
    title?: string,
    subtitle?: string,
    children: ReactNode
};