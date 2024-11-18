import { Theme, SxProps } from "@mui/material/styles";
import { FC, memo } from "react";
import get from 'lodash/get';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField, FormHelperText } from '@mui/material';
import styles from './styles';

export interface IMuiInputProps {
    name: string;
    defaultValue?: string;
    label?: string;
    minRows?: number;
    helperText?: string;
    maxRows?: number;
    multiline?: boolean;
    sx?: SxProps<Theme>;
    inputSx?: SxProps<Theme>;
    disabled?: boolean;
    value?: string;
    transform?: {
        input: (value: any) => any;
        output: (value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => any;
    };
    onChangeProp?: (value: string) => void;

    [otherProps: string]: any;
}

const defaultProps: Pick<IMuiInputProps, 'transform' | 'defaultValue' | 'disabled'> = {
    transform: {
        input: value => value,
        output: event => event.target.value
    },
    defaultValue: '',
    disabled: false
};

const MuiInputComponent: FC<IMuiInputProps> = memo(({
    defaultValue = defaultProps.defaultValue,
    name,
    label,
    sx,
    inputSx,
    disabled = defaultProps.disabled,
    transform = defaultProps.transform,
    helperText,
    control,
    multiline,
    error,
    setValue,
    value,
    onChangeProp,
    ...otherProps
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => {
            const { ref, value: fieldValue, onChange, ...otherField } = field;
            const helperMessage = error?.message || helperText;

            return (
                <FormControl
                    sx={[styles.formControl, ...(Array.isArray(sx) ? sx : [sx])]}
                    error={Boolean(error?.message)}
                    disabled={disabled}
                >
                    <TextField
                        label={label}
                        id={`${name}-label`}
                        inputRef={ref}
                        value={transform?.input(value || fieldValue)}
                        onChange={e => {
                            if (onChangeProp) {
                                onChangeProp(e.target.value);
                            }
                            onChange(transform?.output(e));
                        }}
                        multiline={multiline}
                        disabled={disabled}
                        {...otherField}
                        {...otherProps}
                    />
                    {helperMessage && <FormHelperText>{helperMessage}</FormHelperText>}
                </FormControl>
            )
        }}
    />
));

const MuiInput = (props: IMuiInputProps) => {
    const methods = useFormContext();
    const error = get(methods.formState.errors, props.name);

    return (
        <MuiInputComponent
            control={methods.control}
            error={error}
            setValue={methods.setValue}
            multiline={props.multiline}
            inputSx={props.inputSx}
            value={props.value}
            onChangeProp={props.onChangeProp}
            disabled={props.disabled}
            {...props}
        />
    )
};

export default MuiInput;
