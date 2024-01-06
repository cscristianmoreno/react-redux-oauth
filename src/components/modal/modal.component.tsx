import { DialogContent, DialogTitle, Divider, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { FC, ReactElement } from "react";
import { modalModelStruct } from "../../models/modal.model";

const ModalComponent: FC<modalModelStruct> = ({ icon, open, onClose, title, subtitle, children }: modalModelStruct): ReactElement => {

    return(
        <Modal
            open={open}
            onClose={onClose}
        >
            <ModalDialog>
                <ModalClose/>
                <DialogTitle>
                    {icon}
                    {title}
                </DialogTitle>
                <Divider/>
                <DialogContent>{subtitle}</DialogContent>

                {children}
            </ModalDialog>
        </Modal>
    );
};

export default ModalComponent;