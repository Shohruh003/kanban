import { SxProps, Theme } from "@mui/material";
import { ThemeTypes } from "../../../../core/types/types";

const styles: Record<string, SxProps<Theme>> = {
  header: {
    marginBottom: "10px",
    height: "80px",
    alignItems: "center",
    backgroundColor: (theme) => theme.palette.primary.main,
  },
  weather: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "end",
    padding: "10px",
    color: (theme) => theme.palette.text.primary,
    borderRadius: "10px",
    height: "100%",
  },
  dashboardIcon: {
    height: "100%",
    width: "auto",
    fill: (theme) => theme.palette.primary.main,
    cursor: "pointer",
  },
  userIconBox: {
    height: "100%",
    display: "flex",
    justifyContent: "end",
  },
  userIcon: {
    height: "90%",
  },
  toolsButton: {
    maxWidth: "40px",
    cursor: "pointer",
    mr: 2,
    height: "100%",
    width: "auto",
    fill: (theme) => theme.palette.primary.main,
  },
};

export default styles;
