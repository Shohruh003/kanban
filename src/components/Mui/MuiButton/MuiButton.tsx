import { Button, SxProps, Theme } from "@mui/material";
import { FC, memo, useCallback } from "react";
import { UseFormReset, useFormContext } from "react-hook-form";
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import styles from './styles';

const getSxProp = (prop: SxProps<Theme> | SystemStyleObject<Theme>, theme: Theme): SystemStyleObject<Theme> => {
    if (typeof prop === 'function') {
        return prop(theme);
    }

    return prop as SystemStyleObject<Theme>;
}

interface IMuiButtonProps {
    label?: string;
    type?: 'submit' | 'reset' | 'button';
    sx?: SxProps<Theme>;
    disabled?: boolean;
    onClick?: () => void;
    reset?: UseFormReset<any>;
    size?: 'small' | 'large' | 'medium';
}

const defaultProps: IMuiButtonProps = {
    label: 'Ok',
    type: 'submit',
    disabled: false,
    size: 'medium',
    onClick: () => { }
};

const MuiButtonComponent: FC<IMuiButtonProps> = memo(({
    label = defaultProps.label,
    sx,
    type = defaultProps.type,
    disabled = defaultProps.disabled,
    onClick = defaultProps.onClick,
    reset,
    size
}) => {
    const handleClick = useCallback(() => {
        if (type == 'reset' && reset) {
            reset();
        }

        onClick?.();
    }, [onClick, reset, type]);

    return (
        <Button
            type={type}
            onClick={handleClick}
            sx={[styles.button as SystemStyleObject<Theme>, theme => getSxProp(sx || {}, theme)]}
            variant={type === 'submit' ? 'contained' : 'outlined'}
            color="primary"
            disabled={disabled}
            size={size}
        >
            {label}
        </Button>
    );
});

const MuiButton = (props: IMuiButtonProps) => {
    const methods = useFormContext();
    return <MuiButtonComponent {...props} reset={methods && methods.reset} />;
};

export default MuiButton;
