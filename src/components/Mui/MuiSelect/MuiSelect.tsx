import { FormControl, FormControlProps, InputLabel, MenuItem, OutlinedInput, Select, SxProps, Theme } from "@mui/material";
import { get } from "lodash";
import { FC, ReactNode, memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface IOption {
    value?: string;
    label: string;
}

export interface IMuiSelectProps {
    options: Array<IOption>;
    name: string;
    defaultValue?: string;
    sx?: SxProps<Theme>;
    label?: string | ReactNode;
    disabled?: boolean;
    variant?: FormControlProps['variant'];

    [key: string]: any;
}

const styles = {
    formControl: {
        my: 2,
        width: '100%'
    }
};

const MuiSelectComponent: FC<IMuiSelectProps> = memo(({
    options,
    name,
    defaultValue,
    sx,
    label,
    disabled,
    variant,
    control,
    error,
    renderItem,
    ...otherProps
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => {
            const { ref, ...otherField } = field;

            return (
                <FormControl
                    sx={[styles.formControl, ...(Array.isArray(sx) ? sx : [sx])]}
                    error={Boolean(error?.message)}
                    disabled={disabled}
                    variant={variant}
                >
                    {label && <InputLabel id={`${name}-label`}>{label}</InputLabel>}
                    <Select
                        MenuProps={{ variant: 'menu' }}
                        id={name}
                        input={variant === 'outlined' ? <OutlinedInput notched label={label} /> : undefined}
                        labelId={`${name}-label`}
                        inputRef={ref}
                        {...otherField}
                        {...otherProps}
                    >
                        {options.map(option => (
                            <MenuItem value={option.value} key={option.value}>
                                {renderItem ? renderItem(option) : option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )
        }}
    />
))

const MuiSelect = (props: IMuiSelectProps) => {
    const methods = useFormContext();
    const error = get(methods.formState.errors, props.name);

    return <MuiSelectComponent control={methods.control} error={error} {...props} />;
}

export default MuiSelect;