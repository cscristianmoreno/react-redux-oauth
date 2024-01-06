import { FC, ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { configStore } from "../store/redux.store";

export const ReduxProvider: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <Provider store={configStore}>
            {children}
        </Provider>
    );
};