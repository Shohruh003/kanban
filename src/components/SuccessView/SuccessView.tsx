import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { FC } from "react";
import useLocale from "../../hooks/useLocale";
import styles from './styles';
import Locale from "./locale";
import MuiButton from "../Mui/MuiButton/MuiButton";
import useStores from "/hooks/useStores";

interface ISuccessViewProps {
    message?: string;
}

const SuccesView: FC<ISuccessViewProps> = ({ message }) => {
    const { popupStore } = useStores();
    const { successView: locale } = useLocale(Locale);

    const onClick = () => {
        popupStore.closePopup()
    }
    return (
        <Box sx={styles.div}>
            <Typography variant="h4" sx={styles.title}>{locale.contextText}</Typography>
            <Typography variant="body1">{(message || locale.descriptionText)}</Typography>
            <MuiButton sx={styles.button} label={locale.buttonText} onClick={onClick} />
        </Box>
    )
}

export default SuccesView;
