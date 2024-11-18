import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import styles from "./styles";
import WeatherIcon from "/components/Icons/WeatherIcon";
import CelcyIcon from "/components/Icons/CelcyIcon";

const Weather: FC = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    return (
        <Stack sx={styles.weatherContainer}>
            <WeatherIcon sx={{ maxHeight: '40px' }} />
            <Typography color="#fff" variant="h5" ml={1}>22</Typography>
            <CelcyIcon sx={{ maxHeight: '30px', alignSelf: 'center', ml: 1 }} />
            <Typography color="#fff" variant="h5" ml={1}>{`${day}/${month}/${year}`}</Typography>
        </Stack>
    )
}

export default Weather;