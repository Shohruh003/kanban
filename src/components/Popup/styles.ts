import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
    paper: {
        borderRadius: { xs: 0, sm: '8px' },
        maxWidth: '100%'
    },
    content: {
        p: 8,
        width: { sm: 'auto' },
        height: { xs: '100%', sm: 'auto' },
        position: 'relative'
    },
    close: {
        position: 'absolute',
        zIndex: 10,
        right: '16px',
        top: '16px',
        fill: 'none',
        color: '#333'
    }
}

export default styles;
