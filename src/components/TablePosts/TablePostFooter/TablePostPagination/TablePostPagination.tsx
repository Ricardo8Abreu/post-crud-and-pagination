import { TablePagination } from '@mui/material'

import usePagination from '@/hooks/pagination/usePagination'

export interface ButtonsPaginationProps {
    maxPage: number

}

const TablePostPagination = ({ maxPage }: ButtonsPaginationProps) => {
    const { page, handleChangePage } = usePagination({ maxPage })

    return (
        <TablePagination
            page={page}
            count={maxPage}
            rowsPerPage={10}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[10]}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}

export default TablePostPagination
