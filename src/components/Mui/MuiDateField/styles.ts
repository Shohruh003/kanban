import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
    formControl: {
        my: 2,
        width: '100%',
       
    },
    years:
    {
        '& .PrivatePickersYear-yearButton':
        {
           fontSize: '14px'
        }
    }
}

export default styles;