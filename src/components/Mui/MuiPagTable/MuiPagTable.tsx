import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import styles from "./styles";
import Loader from "/components/Loader/Loader";
import { TableHeaderCell, TableRow } from "../../../core/types/types";

interface IMuiPagTableProps {
    header: Array<TableHeaderCell>;
    data: Array<TableRow>;
    onItemClick?: (index: number) => void;
    onNextLoad?: () => void;
    scrollDisabled?: boolean;
    isLoading?: boolean;
}

const MuiPagTable: FC<IMuiPagTableProps> = ({ header, data, onItemClick, onNextLoad, scrollDisabled, isLoading }) => {
    let positionY = 0;

    const onWheel = (event: any) => {
        const rowsContainer = document.getElementById('rowsContainer') as HTMLElement;
        const lastChild = rowsContainer.lastChild as HTMLElement;
        positionY += event.deltaY;

        if (lastChild.getBoundingClientRect().y < 1000 && onNextLoad) {
            onNextLoad();
        }
    }

    return (
        <Box width="100%">
            <Grid container sx={styles.row}>
                {header.map(headerItem => (
                    <Grid item key={headerItem.key} xs={headerItem.size || 12 / header.length}>
                        <Typography textAlign="center" variant="body1">{headerItem.inner}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Box sx={styles.content} overflow="auto" onWheel={scrollDisabled ? () => { } : onWheel} id="rowsContainer">
                <Loader isLoading={Boolean(isLoading)} sx={{ backgroundColor: '#33333355' }} />
                {data.map((row, index) => (
                    <Grid container sx={{ ...styles.row, ...(onItemClick ? { cursor: 'pointer' } : {}) }} key={index.toString()} onClick={onItemClick && (() => onItemClick(index))}>
                        {header.map((headerItem, columnIndex) => (
                            <Grid textAlign="center" item xs={headerItem.size} key={`${headerItem.key}-${columnIndex}`} id={`item-${columnIndex}`}>
                                {row.find(cell => cell.key === headerItem.key)?.inner}
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Box>
        </Box>
    )
}

export default MuiPagTable;