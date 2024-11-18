import { SxProps, Theme } from "@mui/material";
import { normalizePathname } from "react-router/lib/router";

const styles: Record<string, SxProps<Theme>> = {
    div:
    {
        alignItems: "center",
        py: 1
    },
    textbox: {
        my: 1
    },
    title:
    {
        py: 1
    }
}

export default styles;
