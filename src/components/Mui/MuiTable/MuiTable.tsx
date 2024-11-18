import { SxProps, Table, TableBody, TableCell, TableHead, TableRow, Theme, Typography } from "@mui/material";
import { FC } from "react";
import { TableRow as MyTableRow, TableHeaderCell } from "../../../core/types/types";

interface IMuiTableProps {
    header: Array<TableHeaderCell>;
    content: Array<MyTableRow>;
    title?: string;
    sx?: SxProps<Theme>;
}

const MuiTable: FC<IMuiTableProps> = ({ title, content, header, sx }) => {
    return (
        <>
            <Typography variant="subtitle1" pb={2}>{title}</Typography>
            <Table sx={sx}>
                <TableHead>
                    <TableRow>
                        {header.map(item =>
                            <TableCell key={item.key} sx={{ textAlign: 'center' }}>{item.inner}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {content.map((row, index) => (
                        <TableRow key={index.toString()}>
                            {header.map((headerItem, columnIndex) => (
                                <TableCell key={`${headerItem.key}-${columnIndex}`} sx={{ textAlign: 'center' }}>{row.find(contentItem => contentItem.key === headerItem.key)?.inner}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default MuiTable;