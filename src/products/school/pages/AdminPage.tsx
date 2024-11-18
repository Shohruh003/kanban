import { FC, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import DashboardIcon from "/components/Icons/DashboardIcon";
import Header from "../components/Header/Header";
import KanbanComponent from "../components/Kanban/KanbanComponent";
import Locale from "./locale";
import useLocale from "/hooks/useLocale";
import ClearIcon from "@mui/icons-material/Clear";
import { SettingsOutlined } from "@mui/icons-material";
import styles from "./styles";

const AdminPage: FC = () => {
  const locale = useLocale(Locale);
  const [isSettingGroupVisible, setIsSettingGroupVisible] = useState(false);
  const changeLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  const handleSettingButtonClick = () => {
    setIsSettingGroupVisible((prev) => !prev);
  };
  return (
    <>
      <Header showWeather logo={DashboardIcon} />
      <Container>
        <KanbanComponent />;
      </Container>
      <Box
        style={{
          position: "fixed",
          right: 75,
          bottom: 24,
          display: isSettingGroupVisible ? "flex" : "none",
        }}
      >
        <Button sx={styles.groupIcons} onClick={() => changeLang("uz")}>
          {locale.language.uz}
        </Button>
        <Button sx={styles.groupIcons} onClick={() => changeLang("ru")}>
          {locale.language.ru}
        </Button>
        <Button sx={styles.groupIcons} onClick={() => changeLang("eng")}>
          {locale.language.eng}
        </Button>
      </Box>
      <Button
        sx={styles.groupIcons}
        style={{ position: "fixed", right: 24, bottom: 24 }}
        onClick={handleSettingButtonClick}
      >
        {isSettingGroupVisible ? <ClearIcon /> : <SettingsOutlined />}
      </Button>
    </>
  );
};

export default AdminPage;
