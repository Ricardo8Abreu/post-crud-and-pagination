import { TableHead, TableRow, TableCell } from '@mui/material'

export type TablePostHeadData = string[]

export interface TablePostHeadProps {
    data: TablePostHeadData
}

const TablePostHead = ({ data }: TablePostHeadProps) => {
    return (
        <TableHead>
            <TableRow>
                {
                    data.map((label, index) => (
                        <TableCell key={index}>{label}</TableCell>
                    ))
                }
            </TableRow>
        </TableHead>

    )
}
export default TablePostHead
