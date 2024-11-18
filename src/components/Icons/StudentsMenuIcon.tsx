import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const StudentsMenuIcon: FC<SvgIconProps> = props => (
    <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M22 19.25H19.25L20.1667 16.5H21.0833L22 19.25ZM10.1053 15.0856L18.3333 10.8918V16.5C17.4102 18.3709 13.1936 19.25 10.5417 19.25C7.63125 19.25 3.76842 18.3388 2.75 16.5V10.4372L10.1053 15.0856ZM21.0833 15.5833H20.1667V8.92833L10.1539 14.0323L0 7.61567L11 2.75L21.0833 8.46175V15.5833Z" />
    </SvgIcon>
);

export default StudentsMenuIcon