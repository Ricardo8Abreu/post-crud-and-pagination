import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { Button, Modal, Stack, TextField, Typography } from '@mui/material'

import LoadingButton from '@mui/lab/LoadingButton'

import { type HandleEditArgs } from '@/types/types'

type Data = HandleEditArgs

export interface LayoutModalProps {
    title: string
    onSubmit: (data: Data) => Promise<void>
    isOpen: boolean
    closeModal: () => void
    defaultValues?: Data
}

const LayoutModal = ({ title, onSubmit, isOpen, closeModal, defaultValues }: LayoutModalProps) => {
    const [isLoading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues })

    const submit = async (data: Data) => {
        setLoading(true)
        onSubmit && await onSubmit(data)
        setLoading(false)
    }

    return (
        <Modal
            open={isOpen}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: isLoading ? 'none' : undefined
            }}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"

        >
            <Stack
                spacing={4}
                direction={'column'}
                style={{
                    width: '400px',
                    padding: '20px',
                    borderRadius: '5px',
                    backgroundColor: 'white'
                }}
            >
                {
                    title &&
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                }
                {/* <form onSubmit={}> */}
                <Stack
                    spacing={4}
                    direction={'column'}
                >
                    <TextField
                        label="Post Title"
                        error={!!errors.title?.message}
                        helperText={errors.title?.message}
                        {...register('title', { required: 'Title is required' })}
                    />
                    <TextField
                        rows={4}
                        error={!!errors.body?.message}
                        label="Post Content"
                        multiline
                        helperText={errors.body?.message}
                        {...register('body', { required: 'Content is required' })}
                    />

                    <Stack
                        spacing={1}
                        direction={'row'}
                        justifyContent={'space-between'}
                    >

                        <LoadingButton
                            loading={isLoading}
                            type="submit"
                            color="primary"
                            variant="contained"
                            onClick={handleSubmit(submit)}
                        >
                            {defaultValues ? 'Edit' : 'Add'} Post
                        </LoadingButton>
                        <Button
                            color="inherit"
                            variant="outlined"
                            onClick={closeModal}
                        >
                            Close
                        </Button>

                    </Stack>
                </Stack>

                {/* </form> */}
            </Stack>
        </Modal>
    )
}

export default LayoutModal
