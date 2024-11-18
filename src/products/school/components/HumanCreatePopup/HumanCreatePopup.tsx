import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import Locale from './locale';
import useLocale from "/hooks/useLocale";
import MuiForm from "/components/Mui/MuiForm/MuiForm";
import yup from "/core/yup-extended";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MuiInput from "/components/Mui/MuiInput/MuiInput";
import MuiSelect from "/components/Mui/MuiSelect/MuiSelect";
import FileUpload from "react-material-file-upload";
import MuiButton from "/components/Mui/MuiButton/MuiButton";
import useStores from "/hooks/useStores";
import { setStoredData } from "/utils";
import { CreatedData } from "../../types";
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_HUMAN_IMAGE } from "/core/constants";

const HumanCreatePopup: FC = () => {
    const locale = useLocale(Locale);
    const [files, setFiles] = useState<File[]>([]);
    const { popupStore } = useStores();

    const schema = yup.object({
        displayName: yup.string(),
        className: yup.string(),
        age: yup.number(),
        status: yup.string().required()
    });

    const methods = useForm<CreatedData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data: CreatedData) => {
        if (files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const fileUrl = reader.result as string;
                const newData = { ...data, id: uuidv4(), photo: fileUrl }; 
                setStoredData("list", newData);
                popupStore.closeAllPopup();
                window.location.reload();
            };
    
            const file = files[0];
            if (file) {
                reader.readAsDataURL(file);
            } else {
                const newData = { ...data, id: uuidv4(), photo: DEFAULT_HUMAN_IMAGE };
                setStoredData("list", newData);
                popupStore.closeAllPopup();
                window.location.reload();
            }
        } else {
            const newData = { ...data, id: uuidv4(), photo: DEFAULT_HUMAN_IMAGE };
            popupStore.closeAllPopup();
            window.location.reload();
        }
    };
    

    return (
        <Box maxWidth="50vw">
            <Typography variant="subtitle1">{locale.title}</Typography>
            <MuiForm methods={methods} onSubmit={onSubmit}>
                <MuiInput name="displayName" label={locale.displayName} />
                <MuiInput name="className" label={locale.className} />
                <MuiInput name="age" label={locale.ageLabel} type="number" />
                <Grid container columnSpacing={2}>
                    <Grid item xs={6}>
                        <MuiSelect options={locale.rangItems} label={locale.rangLabel} name="status" />
                    </Grid>
                </Grid>
                <FileUpload
                    multiple={false}
                    value={files}
                    onChange={setFiles}
                    maxFiles={1}
                    title={locale.fileUploaderTitle}
                    buttonText={locale.fileUploaderButton}
                />
                <MuiButton label={locale.saveButton} type="submit" />
            </MuiForm>
        </Box>
    );
};

export default HumanCreatePopup;
