import { FC, useState, useEffect } from "react";
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
import { IEditFormData } from "../../types";
interface IEditContentProps {
  card: IEditFormData;
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

  const methods = useForm<IEditFormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: IEditFormData) => {
    const updatedData: IEditFormData = {
      ...card,
      displayName: data.displayName !== card.displayName ? data.displayName : card.displayName,
      className: data.className !== card.className ? data.className : card.className,
      age: data.age !== card.age ? data.age : card.age,
      photo: files.length > 0 && files[0] instanceof File ? await filesToBase64(files) : card.photo,
    };

    if (card?.id) {
      updateStoredDataById(card.id, updatedData);
    }

    popupStore.closeAllPopup();
    window.location.reload();
  };

  const filesToBase64 = (files: File[]): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      if(files.length > 0) {
        const file = files[0];
        if(file) {
          reader.readAsDataURL(file);
        }
      }
    });
  };

  const updateStoredDataById = (id: string, updatedData: IEditFormData) => {
    const storedData = JSON.parse(localStorage.getItem("list") || "[]");
    const updatedList = storedData.map((item: IEditFormData) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  const onChangeViewMode = () => {
    popupStore.closeAllPopup();
  };

  useEffect(() => {
    if (card?.photo) {
      setFiles([]);
    }
  }, [card]);

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
            src={files.length > 0 && files[0] instanceof File ? URL.createObjectURL(files[0]) : card?.photo || ""}
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
