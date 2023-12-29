import { Paper, Stack, Table, TableContainer } from '@mui/material'

import TablePostHead, { type TablePostHeadData } from './TablePostHead/TablePostHead'
import TablePostFooter, { type TablePostFooterProps } from './TablePostFooter/TablePostFooter'

interface TablePostsProps extends TablePostFooterProps {

    dataHead: TablePostHeadData
    children: JSX.Element
}

const TablePosts = ({ maxPage, dataHead, children }: TablePostsProps) => {
    return (
        <Paper
            sx={{ height: '100%' }}
        >
            <Stack
                height={'100%'}
                direction={'column'}
            >
                <TableContainer>
                    <Table
                        stickyHeader
                    >
                        <TablePostHead
                            data={dataHead}
                        />
                        {children}
                    </Table>

                </TableContainer>
                {
                    maxPage > 0 &&
                    <TablePostFooter
                        maxPage={maxPage}
                    />
                }
            </Stack>
        </Paper>
    )
}
export default TablePosts
