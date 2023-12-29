import { TableBody, TableRow, TableCell, Skeleton } from '@mui/material'

import { type HandleDelete, type HandleEdit, type Post } from '@/types/types'

import Editable from '@/components/z_Reusable/Editable/Editable'

export interface TablePostBodyProps {
    data: Post[]
    isLoading: boolean
    handleEdit: HandleEdit
    handleDelete: HandleDelete

}
const SkeletonRow = () => (
    <TableRow>
        <TableCell>
            <Skeleton variant="text" />
        </TableCell>
        <TableCell>
            <Skeleton variant="text" />
        </TableCell>
        <TableCell>
            <Skeleton variant="text" />
        </TableCell>
    </TableRow>
)

const TablePostBody = ({ data, isLoading, handleEdit, handleDelete }: TablePostBodyProps) => {
    return (
        <TableBody>
            {
                isLoading
                    ? Array.from({ length: 10 }).map((_, index) => <SkeletonRow key={index} />)
                    : data.map((post) => {
                        const { id, title, body } = post

                        return (
                            <TableRow key={id}>
                                <TableCell>{title}</TableCell>
                                <TableCell style={{ minWidth: '200px' }}>{body}</TableCell>
                                <TableCell>
                                    <Editable
                                        handleEdit={() => { handleEdit({ id, title, body }) }}
                                        handleDelete={() => { handleDelete({ id }) }}
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })
            }
        </TableBody>
    )
}
export default TablePostBody
