import { TableBody, TableRow, TableCell } from '@mui/material'

import { type HandleDelete, type HandleEdit, type Post } from '@/types/types'

import Editable from '@/components/z_Reusable/Editable/Editable'

export interface TablePostBodyProps {
    data: Post[]
    handleEdit: HandleEdit
    handleDelete: HandleDelete

}

const TablePostBody = ({ data, handleEdit, handleDelete }: TablePostBodyProps) => {
    return (
        <TableBody>
            {
                data.map((post) => {
                    const { id, title, body } = post

                    return (
                        <TableRow key={id}>
                            <TableCell>{title}</TableCell>
                            <TableCell>{body}</TableCell>
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
