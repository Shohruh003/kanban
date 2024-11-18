import { Theme, SxProps } from "@mui/material/styles";
import { FC, memo } from "react";
import get from 'lodash/get';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField, FormHelperText } from '@mui/material';
import InputMask from "react-input-mask"
import { IMuiInputProps } from "../MuiInput/MuiInput";
import styles from './styles';
interface IMuiMaskedInputProps extends IMuiInputProps {
    mask: string;
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
    disabled = defaultProps.disabled,
    transform = defaultProps.transform,
    helperText,
    control,
    error,
    setValue,
    mask,
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
                    <InputMask
                        mask={mask}
                        disabled={false}
                        value={transform?.input(field.value)}
                        maskChar="_"
                        onChange={e => onChange(transform?.output(e))}
                    >
                        {() =>
                            <TextField
                                label={label}
                                id={`${name}-label`}
                                {...otherProps}
                            />
                        }
                    </InputMask>
                    {helperMessage && <FormHelperText>{helperMessage}</FormHelperText>}
                </FormControl>
            )
        }}
    />
));

const MuiMaskedInput = (props: IMuiInputProps) => {
    const methods = useFormContext();
    const error = get(methods.formState.errors, props.name);

    return <MuiInputComponent control={methods.control} error={error} setValue={methods.setValue} {...props} />
};

export default MuiMaskedInput;
