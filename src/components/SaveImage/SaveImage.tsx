import { FC, useEffect, useState } from "react";
import styles from './styles';
import { CSSProperties } from "styled-components";
import { SxProps, Theme } from "@mui/material";

interface ISaveImageProps {
    src?: string;
    alternativeSrc?: string;
    alternativeText?: string;
    sx?: SxProps<Theme>;
}

const SaveImage: FC<ISaveImageProps> = ({ src, alternativeSrc, alternativeText, sx }) => {
    const [hasError, setError] = useState(false);

    const onError = () => {
        console.log('error');

        setError(true);
    }

    return (
        <img style={{ ...styles.icon, ...sx } as CSSProperties} src={hasError ? alternativeSrc : src} alt={alternativeText} onError={onError} />
    )
}

export default SaveImage;