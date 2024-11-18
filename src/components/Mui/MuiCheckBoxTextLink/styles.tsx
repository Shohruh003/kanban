import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
    checkbox:
    {
        color: '#242524',
        paddingLeft: 0,
        paddingRight: 1,
        '&.Mui-checked': theme => ({
            color: theme.palette.text.secondary,
        }),
        '& .MuiSvgIcon-root':
        {
            fontSize: 20
        }
    }
}

export default styles;