import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = ({
    weatherContainer: {
        flexDirection: 'row',
        alignItems: 'end',
        color: (theme) => theme.palette.text.primary,
    },
    listItem: {
        height: "100%",
        maxHeight: "310px",
        p: 2,
        alignItems: "center",
        justifyContent: "space-between",
    }
})

export default styles;
