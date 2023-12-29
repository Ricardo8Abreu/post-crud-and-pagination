import { useState } from 'react'

import { LoadingButton } from '@mui/lab'
import { Stack, Button } from '@mui/material'

export interface EditableProps {
    handleEdit: () => void
    handleDelete: () => Promise<void>
}

const Editable = ({ handleEdit, handleDelete }: EditableProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const onDelete = async () => {
        setIsLoading(true)
        await handleDelete()
        setIsLoading(false)
    }

    return (
        <Stack direction="row" spacing={2}>
            <Button
                color="success"
                variant="contained"
                onClick={handleEdit}
            >
                Edit
            </Button>
            <LoadingButton
                color="error"
                variant="contained"
                onClick={onDelete}
                loading={isLoading}
            >
                Delete
            </LoadingButton>
        </Stack>
    )
}

export default Editable
