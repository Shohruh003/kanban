import { FC, useState } from "react";
import { Box, Menu, MenuItem, Stack, SvgIconProps, Typography } from "@mui/material";
import styles from "./styles";
import Weather from "../../../../components/Weather/Weather";
import useStores from "/hooks/useStores";
import { useNavigate } from "react-router-dom";
import { ThemeTypes } from "../../../../core/types/types";
import { observer } from "mobx-react-lite";
import useLocale from "/hooks/useLocale";
import ChangeThemeIcon from "/components/Icons/ChangeThemeIcon";
import AlertIcon from "/components/Icons/AlertIcon";
import ExitIcon from "/components/Icons/ExitIcon";

interface HeaderProps {
  showWeather?: boolean;
  logo: FC;
}

interface ThemeOption {
  key: ThemeTypes;
  title: string;
}

const Header: FC<HeaderProps> = ({ showWeather, logo }) => {
  const { userStore } = useStores();
  const { header: locale } = useLocale();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const open = Boolean(anchorEl);

  const onLogout = () => {
    userStore.logout();
    navigate("/");
  };

  const openThemeMenu = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const onChangeTheme = (type: ThemeTypes) => {
    userStore.setCurrentTheme(type);
    window.location.reload();
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      sx={styles.header}
    >
      <Stack flexDirection="row" sx={{alignItems: 'center'}}>
        <Typography sx={{fontSize: '40px', padding: '0 50px', color: 'white', fontWeight: 'bold'}}>SAIDOFF</Typography>
        {showWeather && (
          <Box sx={styles.weather}>
            <Weather />
          </Box>
        )}
      </Stack>
      <Stack flexDirection="row">
        <ChangeThemeIcon sx={styles.toolsButton} onClick={openThemeMenu} />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {locale.themeOptions.map((item: ThemeOption, index: number) => (
            <MenuItem
              key={index.toString()}
              onClick={() => onChangeTheme(item.key)}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
        <AlertIcon sx={styles.toolsButton} />
        <ExitIcon sx={styles.toolsButton} onClick={onLogout} />
      </Stack>
    </Stack>
  );
};

export default observer(Header);
