import { Button, Stack } from "@mui/material";
import { FC, useState } from "react";
import useDarkMode from "/hooks/useDarkMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styles from './styles';
import ClearIcon from "@mui/icons-material/Clear";
import { SettingsOutlined } from "@mui/icons-material";
import useLocale from "/hooks/useLocale";
import Locale from './locale';

const ChangeLangMenu: FC = () => {
    const [isSettingGroupVisible, setIsSettingGroupVisible] = useState(false);
    const { dark, toggleDark } = useDarkMode();
    const locale = useLocale(Locale);

    const handleSettingButtonClick = () => {
        setIsSettingGroupVisible((prev) => !prev);
    };

    const changeLang = (lang: string) => {
        localStorage.setItem("lang", lang);
        window.location.reload();
    };

    return (
        <>
            {isSettingGroupVisible && (
                <Stack
                    sx={{
                        position: "fixed",
                        right: 75,
                        bottom: 24,
                        flexDirection: 'row'
                    }}
                >
                    <Button sx={styles.groupIcons} onClick={() => toggleDark()}>
                        {dark ? <DarkModeIcon /> : <LightModeIcon />}
                    </Button>
                    <Button sx={styles.groupIcons} onClick={() => changeLang("uz")}>
                        {locale.language.uz}
                    </Button>
                    <Button sx={styles.groupIcons} onClick={() => changeLang("ru")}>
                        {locale.language.ru}
                    </Button>
                    <Button sx={styles.groupIcons} onClick={() => changeLang("eng")}>
                        {locale.language.eng}
                    </Button>
                </Stack>
            )}
            <Button
                sx={styles.groupIcons}
                style={{ position: "fixed", right: 24, bottom: 24 }}
                onClick={handleSettingButtonClick}
            >
                {isSettingGroupVisible ? <ClearIcon /> : <SettingsOutlined />}
            </Button>
        </>
    )
}

export default ChangeLangMenu;
