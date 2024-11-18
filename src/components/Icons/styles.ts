import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = ({
    container: {
        fill: (theme) => theme.palette.primary.contrastText,
        ':hover': {
            fill: (theme) => theme.palette.primary.main
        }
    },
    inner: {
        fill: '#000',
        '&:hover': {
            fill: '#fff'
        }
    }
})

export default styles;
