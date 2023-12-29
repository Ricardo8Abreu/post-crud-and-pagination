import { TablePagination, TableRow } from '@mui/material'

import usePagination from '@/hooks/pagination/usePagination'

export interface ButtonsPaginationProps {
    maxPage: number

}

const TablePostPagination = ({ maxPage }: ButtonsPaginationProps) => {
    const { page, handleChangePage } = usePagination({ maxPage })

    return (
        <TableRow>
            <TablePagination
                page={page - 1}
                count={maxPage}
                rowsPerPage={10}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[10]}
            // onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableRow>
    )
}

export default TablePostPagination
