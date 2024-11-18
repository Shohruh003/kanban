import { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SystemStyleObject } from "@mui/system";
import styles from './styles';

interface ILoaderProps {
    isLoading: boolean;
    sx?: SystemStyleObject<Theme>;
    size?: number;
    circularSx?: SystemStyleObject<Theme>;
}

const Loader: FC<ILoaderProps> = ({ isLoading, sx, size, circularSx }): JSX.Element => {

    if (!isLoading) {
        return <></>;
    }

    return (
        <Backdrop open sx={{ ...styles.backdrop, ...sx } as SystemStyleObject}>
            <CircularProgress color="primary" size={size} sx={{ ...circularSx }} />
        </Backdrop>
    );
}

export default Loader;
