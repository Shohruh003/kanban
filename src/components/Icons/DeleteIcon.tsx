import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const DeleteIcon: FC<SvgIconProps> = props => (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"></path>
        <path d="M0 0h48v48H0z" fill="none"></path>
    </SvgIcon>
);

export default DeleteIcon;