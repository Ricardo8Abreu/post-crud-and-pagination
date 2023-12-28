import { Stack, Button } from '@mui/material'

export interface EditableProps {
    handleEdit: () => void
    handleDelete: () => void
}
const Editable = ({ handleEdit, handleDelete }: EditableProps) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={handleEdit}>Edit</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </Stack>
    )
}

export default Editable
