import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import Locale from './locale';
import useLocale from "/hooks/useLocale";
import MuiForm from "/components/Mui/MuiForm/MuiForm";
import yup from "/core/yup-extended";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MuiInput from "/components/Mui/MuiInput/MuiInput";
import MuiSelect from "/components/Mui/MuiSelect/MuiSelect";
import FileUpload from "react-material-file-upload";
import MuiButton from "/components/Mui/MuiButton/MuiButton";
import useStores from "/hooks/useStores";
import { AllPeopleStatisticType } from "/core/types/types";

interface CreatedData {
    displayName: string;
    className: string;
    age: number;
    rang: AllPeopleStatisticType;
}

const HumanCreatePopup: FC = () => {
    const locale = useLocale(Locale);
    const [files, setFiles] = useState<File[]>([]);
    const { popupStore } = useStores();

    const schema = yup.object({
        displayName: yup.string(),
        className: yup.string(),
        age: yup.number(),
        rang: yup.string().required()
    });

    const methods = useForm<CreatedData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data: CreatedData) => {
        
        popupStore.closeAllPopup();
    window.location.reload()
    };

    const rangValue = useWatch({
        control: methods.control,
        name: "rang"
    });

    return (
        <Box maxWidth="50vw">
            <Typography variant="subtitle1">{locale.title}</Typography>
            <MuiForm methods={methods} onSubmit={onSubmit}>
                    <MuiInput name="displayName" label={locale.displayName} />
                    <MuiInput name="className" label={locale.className} />
                <MuiInput name="age" label={locale.ageLabel} type="number" />
                <Grid container columnSpacing={2}>
                    <Grid item xs={6}>
                        <MuiSelect options={locale.rangItems} label={locale.rangLabel} name="rang" />
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
