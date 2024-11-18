import { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
    backdrop: {
        zIndex: 50,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: '#fff'
    }
}

export default styles;
