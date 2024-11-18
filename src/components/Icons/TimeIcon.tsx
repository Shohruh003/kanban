import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const TimeIcon: FC<SvgIconProps> = props => (
<SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M11 0C4.92525 0 0 4.92525 0 11C0 17.0748 4.92525 22 11 22C17.0748 22 22 17.0748 22 11C22 4.92525 17.0748 0 11 0ZM17.4167 12.8333H10.0833V4.58333H11.9167V11H17.4167V12.8333Z"/>
</SvgIcon>
);

export default TimeIcon