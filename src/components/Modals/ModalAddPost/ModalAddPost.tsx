import axios from 'axios'
import toast from 'react-hot-toast'

import { useAppDispatch, useAppSelector } from '@/store'
import { setCurrentData } from '@/store/data/dataSlice'

import useModal from '@/hooks/modal/useModal'

import { type HandleEditArgs } from '@/types/types'

import LayoutModal from '@/components/z_Reusable/Modal/LayoutModal/LayoutModal'

const ModalAddPost = () => {
    const dispatch = useAppDispatch()
    const { currentData } = useAppSelector(state => state.dataSlice)

    const { isOpen, closeModal } = useModal('AddPost')

    const handleAddPost = async (data: HandleEditArgs) => {
       await axios.post('https://jsonplaceholder.typicode.com/posts', { ...data, userId: '1' })
            .then((response) => {
                const newPost = response.data
                const newData = [newPost, ...currentData]

                dispatch(setCurrentData(newData))

                toast.success('Post successfully added')

                closeModal()
            })
            .catch((error) => {
                toast.error('There was an error adding the post')
                console.log('🚀 ~ file: ModalAddPost.tsx:32 ~ handleAddPost ~ error:', error)
            })
    }

    return (
        isOpen &&
        <LayoutModal
            title="Add new post"
            isOpen={isOpen}
            closeModal={closeModal}
            onSubmit={handleAddPost}
        />
    )
}
export default ModalAddPost
