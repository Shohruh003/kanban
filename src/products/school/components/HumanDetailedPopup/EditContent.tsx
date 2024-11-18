import { FC, useState } from "react";
import { Grid } from "@mui/material";
import useLocale from "/hooks/useLocale";
import Locale from "./locale";
import MuiForm from "/components/Mui/MuiForm/MuiForm";
import yup from "/core/yup-extended";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MuiInput from "/components/Mui/MuiInput/MuiInput";
import ImageComponent from "../ImageComponent/ImageComponent";
import FileUpload from "react-material-file-upload";
import MuiButton from "/components/Mui/MuiButton/MuiButton";
import styles from "./styles";
import { CSSProperties } from "styled-components";
import useStores from "/hooks/useStores";

interface FormData {
  displayName: string;
  className: string;
  age: number;
  photo: string;
}

interface IEditContentProps {
  card: FormData;
  humanWatchList?: number;
}

const EditContent: FC<IEditContentProps> = ({ card }) => {
  const locale = useLocale(Locale);
  const [files, setFiles] = useState<File[]>([]);
  const { popupStore } = useStores();
  const schema = yup.object({
    displayName: yup
      .string()
      .required(locale.formRequired),
    className: yup.string().required(locale.formRequired),
    age: yup.number().required(locale.formRequired),
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormData) => {
    popupStore.closeAllPopup();
    window.location.reload()
  };

  const onChangeViewMode = () => {
    popupStore.closeAllPopup();
  };

  return (
    <MuiForm methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <MuiInput
            sx={styles.rowInput}
            label={locale.displayName}
            defaultValue={card.displayName}
            name="displayName"
          />
          <MuiInput
            sx={styles.rowInput}
            label={locale.className}
            defaultValue={card.className}
            name="className"
          />
          <MuiInput
            sx={styles.rowInput}
            label={locale.ageLabel}
            defaultValue={card.age.toString()}
            name="age"
            type="number"
          />
        </Grid>
        <Grid item xs={6} textAlign="center">
          <ImageComponent
            src={card?.photo || ""}
            styles={{ borderRadius: "unset", height: "200px", width: "auto" }}
          />
          <FileUpload
            sx={styles.fileUpload as CSSProperties}
            multiple={false}
            value={files}
            onChange={setFiles}
            maxFiles={1}
            title={locale.fileUploaderTitle}
            buttonText={locale.fileUploaderButton}
          />
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <MuiButton label={locale.saveButton} />
        </Grid>
        <Grid item xs={6}>
          <MuiButton label={locale.cancelButton} onClick={onChangeViewMode} />
        </Grid>
      </Grid>
    </MuiForm>
  );
};

export default EditContent;
