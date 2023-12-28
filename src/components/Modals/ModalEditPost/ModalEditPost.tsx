import axios from 'axios'
import toast from 'react-hot-toast'

import { useAppDispatch, useAppSelector } from '@/store'
import { setCurrentData } from '@/store/data/dataSlice'

import useModal from '@/hooks/modal/useModal'

import { type HandleEditArgs } from '@/types/types'

import LayoutModal from '@/components/z_Reusable/Modal/LayoutModal/LayoutModal'

const ModalEditPost = () => {
    const dispatch = useAppDispatch()
    const { currentData } = useAppSelector(state => state.dataSlice)

    const { isOpen, currentData: currentDataModal, closeModal } = useModal('UpdatePost')

    const handleEditPost = async (data: HandleEditArgs) => {
        const { id } = data

        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { ...data, userId: '1' })
            .then((response) => {
                const newPost = response.data
                const newData = currentData.map(post => {
                    if (post.id === newPost.id) return newPost
                    return post
                })

                dispatch(setCurrentData(newData))

                toast.success('The post was edited correctly')

                closeModal()
            })
            .catch((error) => {
                toast.error('There was an error when editing the post')
                console.log('🚀 ~ file: ModalEditPost.tsx:37 ~ handleEditPost ~ error:', error)
            })
    }

    return (
        isOpen &&
        <LayoutModal
            title="Edit post"
            isOpen={isOpen}
            onSubmit={handleEditPost}
            closeModal={closeModal}
            defaultValues={currentDataModal}
        />
    )
}
export default ModalEditPost
