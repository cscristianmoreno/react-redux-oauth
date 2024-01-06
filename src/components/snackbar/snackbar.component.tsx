import { Snackbar } from "@mui/joy";
import { FC, ReactElement, useEffect, useState } from "react";
import { HookModelStruct } from "../../models/hook.model";
import { SnackbarModelStruct } from "../../models/snackbar.model";

const SnackbarComponent: FC<SnackbarModelStruct> = ({ open, message, color, icon }: SnackbarModelStruct): ReactElement => {

    const [openSnackbar, setOpenSnackbar]: HookModelStruct<boolean> = useState<boolean>(false);

    useEffect((): void => {
        setOpenSnackbar(open);
    }, [open]);

    return (
        <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            color={color}
            variant="solid"
            onClose={(): void => setOpenSnackbar(false)}
            anchorOrigin={{
                horizontal: "right",
                vertical: "top"
            }}
            startDecorator={icon}
        >
            {message}
        </Snackbar>
    );
};

export default SnackbarComponent;