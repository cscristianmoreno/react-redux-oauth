import { Search } from "@mui/icons-material";
import { Input } from "@mui/joy";
import { FC, ReactElement } from "react";

const SearchComponent: FC = (): ReactElement => {
    return (
        <Input
            style={{padding: "10px", width: "300px"}}
            startDecorator={<Search/>}
            placeholder="Buscar..."
        />
    );
};

export default SearchComponent;