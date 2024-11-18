import { Stack, Typography, Checkbox, SxProps, Theme } from "@mui/material";
import React, { ChangeEvent, FC, useCallback } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import useStores from "/hooks/useStores";
import styles from './styles';
import { Variant } from '@mui/material/styles/createTypography'

interface IMuiCheckBoxTextLink {
    preLinkText: string;
    linkText: string;
    hrefText: string;
    onChange?: (checked: boolean) => void;
    sx?: SxProps<Theme>;
    textVariant?: Variant;
}

const defaultProps = {
    preLinkText: 'use this',
    linkText: 'link',
    hrefText: '#',
    textVariant: 'h4'
}

const MuiCheckBoxTextLink: FC<IMuiCheckBoxTextLink> = ({
    preLinkText = defaultProps.preLinkText,
    linkText = defaultProps.linkText,
    hrefText = defaultProps.hrefText,
    onChange,
    sx,
    textVariant
}) => {
    const onChanged = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (onChange) {
            onChange(checked);
        }
    }
    return (
        <Stack direction="row">
            <Checkbox
                onChange={onChanged}
                sx={styles.checkbox}
                name="field"
                defaultChecked={false}
            />
            <Typography sx={sx} variant={textVariant} my="auto" dangerouslySetInnerHTML={{ __html: `${preLinkText} <a href='${hrefText}'>${linkText}</a>` }} />
        </Stack>
    )
}

export default MuiCheckBoxTextLink;
