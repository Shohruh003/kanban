import { Theme, SxProps } from "@mui/material/styles";
import { FC, memo } from "react";
import get from 'lodash/get';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField, FormHelperText } from '@mui/material';
import styles from './styles';

import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export interface IMuiDateFieldComponentProps {
    name: string;
    defaultValue?: string;
    label?: string;
    minRows?: number;
    helperText?: string;
    maxRows?: number;
    sx?: SxProps<Theme>;
    disabled?: boolean;
    transform?: {
        input: (value: any) => any;
        output: (value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => any;
    };
    onChange?: (value: string) => void;
    min_date?: string | number | Date;
    max_date?: string | number | Date;
    value?: string | number | Date;

    [otherProps: string]: any;
}

const defaultProps: Pick<IMuiDateFieldComponentProps, 'transform' | 'defaultValue' | 'disabled'> = {
    transform: {
        input: value => value,
        output: event => event.target.value
    },
    defaultValue: '',
    disabled: false
};

const MuiDateFieldComponent: FC<IMuiDateFieldComponentProps> = memo(({
    defaultValue = defaultProps.defaultValue,
    name,
    label,
    sx,
    disabled = defaultProps.disabled,
    helperText,
    control,
    min_date,
    max_date,
    error,
    setValue,
    value,
    ...otherProps
}) => (

    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => {
            const { ref, value, onChange, ...otherField } = field;
            const helperMessage = error?.message || helperText;

            return (
                <FormControl
                    sx={[styles.formControl, ...(Array.isArray(sx) ? sx : [sx])]}
                    error={Boolean(error?.message)}
                    disabled={disabled}
                >
                    <DesktopDatePicker
                        mask="__.__.____"
                        inputFormat="dd.MM.yyyy"
                        minDate={min_date ? new Date(min_date) : undefined}
                        maxDate={max_date ? new Date(max_date) : undefined}
                        onChange={(newValue) => onChange && onChange(newValue as string)}
                        value={value}
                        disabled={disabled}
                        PopperProps={
                            {
                                sx: styles.years
                            }
                        }
                        renderInput={(props) => {
                            return (
                                <TextField
                                    {...props}
                                    fullWidth
                                    error={Boolean(error?.message)}
                                    helperText={helperMessage}
                                    id={`${name}-label`}
                                    label={label}
                                    value={value}
                                    sx={styles.years}
                                />
                            );
                        }}
                    />
                </FormControl>
            )
        }}
    />
));

const MuiDateField = (props: IMuiDateFieldComponentProps) => {
    const methods = useFormContext();
    const error = get(methods.formState.errors, props.name);

    return <MuiDateFieldComponent control={methods.control} error={error} setValue={methods.setValue} {...props} />
};

export default MuiDateField;
