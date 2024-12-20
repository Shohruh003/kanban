import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const DomIcons: FC<SvgIconProps> = props => (
    <SvgIcon {...props} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#ffbe98" />
        <path
            d="M33 20.093L30 17.093V15H33V20.093ZM37 26H34V36H16V26H13L25 14L37 26ZM27 28H23V34H27V28Z"
            fill="white"
        />
    </SvgIcon>
);

export default DomIcons;