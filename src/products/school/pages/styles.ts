import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = ({
    authContainer: {
        height: '100%',
    },
    authContent: {
        flexDirection: 'column',
        maxWidth: '700px',
        alignItems: 'center',
        m: 'auto',
        backgroundColor: '#fff',
        p: 4,
        borderRadius: '10px'
    },
    groupIcons: {
        borderRadius: '50%',
        padding: 0,
        fontSize: '14px',
        minWidth: '40px',
        height: '40px',
        marginLeft: '10px',
        boxShadow: '0 0 1px 1px'
    }
})

export default styles;
