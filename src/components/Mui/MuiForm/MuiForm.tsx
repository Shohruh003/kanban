import { Box, SxProps, Theme } from "@mui/material";
import { FC, ReactNode, useEffect } from "react";
import { FormProvider, SubmitErrorHandler, SubmitHandler, UseFormReturn } from "react-hook-form";

interface IFormMessage {
    type: 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESS';
    context: 'GLOBAL' | 'MODEL' | 'FIELD';
    path: string;
    value: string;
    code: string;
}

interface IMuiFormProps {
    methods: UseFormReturn<any, object>;
    children: ReactNode;
    autocomplete?: 'off' |'on' ;
    onSubmit: SubmitHandler<any>;
    onInvalid?: SubmitErrorHandler<any>;
    fieldMessages?: Record<string, Array<IFormMessage>>;
    formatMessage?: (message: IFormMessage) => string;
    sx?: SxProps<Theme>;
}

const defaultProps = {
    onInvalid: () => { },
    autocomplete: 'off',
    formatMessage: (message: IFormMessage) => message.value || message.code
}

const MuiForm: FC<IMuiFormProps> = ({
    methods,
    children,
    autocomplete = defaultProps.autocomplete,
    onSubmit,
    onInvalid = defaultProps.onInvalid,
    fieldMessages = {},
    formatMessage = defaultProps.formatMessage,
    sx
}) => {
    const { handleSubmit } = methods;

    useEffect(() => {
        Object.keys(fieldMessages).forEach((fieldName: string) => {
            const field = fieldMessages[fieldName];
            if (field && field[0]) {
                methods.setError(fieldName, {
                    message: formatMessage(field[0]),
                    type: field[0].code
                })
            }
        })
    }, [fieldMessages])

    return (
        <FormProvider {...methods}>
            <Box autoComplete={autocomplete} component="form" onSubmit={handleSubmit(onSubmit, onInvalid)} sx={sx} noValidate>
                {children}
            </Box>
        </FormProvider>
    )
}

export default MuiForm;