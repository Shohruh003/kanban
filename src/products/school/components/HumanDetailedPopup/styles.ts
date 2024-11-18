import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
    // ShowContent
    stackRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #e0e0e0',
        '&:last-child': {
            borderBottom: 'none'
        }
    },
    rowTitle: {
        fontWeight: 'bold',
        color: '#616161',
        mb: 1,
        fontSize: '1rem',
    },
    rowResult: {
        mb: 1,
        fontSize: '1rem',
        color: '#424242',
    },
    rowFullName: {
        mb: 2,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#212121',
    },
    rowImage: {
        borderRadius: '8px',
        height: '200px',
        width: '100%',
        objectFit: 'cover',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '16px',
    },
    cardContainer: {
        mb: 2,
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        backgroundColor: '#fafafa',
    },
    // EditContent
    rowInput: {
        mr: 1,
    },
    fileUpload: {
        mr: 2,
    },
    // PieMock
    pieContainer: {
        padding: 2,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        maxHeight: 300,
        overflowY: 'auto',
    }
};

export default styles;
