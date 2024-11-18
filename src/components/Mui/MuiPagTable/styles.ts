import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
    row: {
        width: "100%",
        p: 2,
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderColor: '#333'
    },
    content: {
        width: "100%",
        height: '500px'
    }
}

export default styles;