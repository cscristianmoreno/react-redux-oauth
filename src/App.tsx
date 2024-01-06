import "./assets/css/App.css";
import { FC, ReactElement } from "react";
import { IndexComponent } from "./pages/index/index.component";
import { ReduxProvider } from "./redux/provider/redux.provider";

const App: FC = (): ReactElement => {
    return (
        <ReduxProvider>
            <IndexComponent/>
        </ReduxProvider>
    );
};

export default App;