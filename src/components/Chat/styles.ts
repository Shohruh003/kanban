import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = ({
    chatContainer: {
        backgroundColor: (theme) => theme.palette.primary.main,
        p: 1,
        borderRadius: '10px',
        textAlign: 'center',
        height: '100%'
    },
    title: {
        p: 1,
        backgroundColor: (theme) => theme.palette.text.primary,
        borderRadius: '10px'
    },
    chatsListBox: {
        mt: 2,
        backgroundColor: (theme) => theme.palette.text.primary,
        borderRadius: '10px',
        p: 2
    },
    chatBox: {
        p: 1,
        borderRadius: '10px',
        borderColor: (theme) => theme.palette.primary.main,
        borderWidth: '2px',
        borderStyle: 'solid',
        cursor: 'pointer'
    }
})

export default styles;
