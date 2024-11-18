import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const ThemeIcon: FC<SvgIconProps> = props => (
<SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M0 11C0 17.0748 4.92525 22 11 22C17.0748 22 22 17.0748 22 11C22 4.92525 17.0748 0 11 0C4.92525 0 0 4.92525 0 11ZM1.83333 11C1.83333 5.9455 5.9455 1.83333 11 1.83333V20.1667C5.9455 20.1667 1.83333 16.0545 1.83333 11Z"/>
</SvgIcon>
);

export default ThemeIcon

