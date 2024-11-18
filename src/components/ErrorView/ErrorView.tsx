import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { FC } from "react";
import useLocale from "../../hooks/useLocale";
import styles from './styles';

interface IErrorViewProps {
    code: number | string;
}

const ErrorView: FC<IErrorViewProps> = ({ code }) => {
    const locale = useLocale();

    const message = locale.errors[code];
    const defaultMessage = locale.errors.DEFAULT;

    let { title } = defaultMessage;
    let text;

    if (message && typeof message === 'string') {
        text = message;
    } else {
        title = message ? message.title : defaultMessage.title;
        text = message ? message.text : defaultMessage.text;
    }

    return (
        <Box>
            {/* <ErrorIcon sx={styles.icon} /> */}
            <Box>
                {title && <Typography variant="h4" sx={styles.title}>{title}</Typography>}
                <Typography variant="subtitle2">{text}</Typography>
            </Box>
        </Box>
    )
}

export default ErrorView;
