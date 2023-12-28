import { TableFooter } from '@mui/material'

import TablePostPagination, { type ButtonsPaginationProps } from './TablePostPagination/TablePostPagination'

export interface TablePostFooterProps extends ButtonsPaginationProps { }

const TablePostFooter = ({ maxPage }: TablePostFooterProps) => {
    return (
        <TableFooter>
            <TablePostPagination
                maxPage={maxPage}
            />
        </TableFooter>
    )
}
export default TablePostFooter
