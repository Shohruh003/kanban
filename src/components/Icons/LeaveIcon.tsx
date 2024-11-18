import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const LeaveIcon: FC<SvgIconProps> = props => (
    <SvgIcon {...props} width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect fill="none" height="30" width="30"></rect>
        <polyline fill="none" points="80 176 30 128 76 80" stroke="#ff0000 " strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
        <line fill="none" stroke="#ff0000 " strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="30" x2="136" y1="128" y2="128"></line>
        <path d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" fill="none" stroke="#ff0000 " strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></path>
    </SvgIcon>
);

export default LeaveIcon;