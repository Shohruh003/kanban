import React, { ErrorInfo, ReactNode } from "react";
import { Box } from "@mui/material";

interface State {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}

interface Props {
    children: ReactNode;
}

export default class ErrorBoundary extends React.Component<Props, State> {
    state = { hasError: false, error: undefined, errorInfo: undefined, checked: false };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({ error, errorInfo });
    }

    render() {
        const { hasError } = this.state;

        // if (hasError) {
        // return (
        // <Box>Error</Box>
        // )
        // }
        return this.props.children;
    }
}