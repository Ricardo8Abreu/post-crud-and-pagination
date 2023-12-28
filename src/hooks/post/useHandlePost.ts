import axios from 'axios'
import toast from 'react-hot-toast'

import { type HandleDeleteArgs, type HandleEdit } from '@/types/types'

import { setCurrentData } from '@/store/data/dataSlice'
import { useAppDispatch, useAppSelector } from '@/store'

import useModal from '../modal/useModal'

const useHandlePost = () => {
    const dispatch = useAppDispatch()
    const { currentData } = useAppSelector(state => state.dataSlice)

    const { openModal, setCurrentDataModal } = useModal('UpdatePost')

    const handleEditPost: HandleEdit = (data) => {
        setCurrentDataModal(data)
        openModal()
    }

    const handleDeletePost = async ({ id }: HandleDeleteArgs) => {
        const confirm = window.confirm('Are you sure you want to delete the post?')
        if (!confirm) return

        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => {
                const newData = currentData.filter(post => post.id !== id)

                dispatch(setCurrentData(newData))

                toast.success('The post was deleted correctly')
            })
            .catch((error) => {
                toast.error('There was an error when deleted the post')
                console.log('🚀 ~ file: useHandlePost.ts:31 ~ handleDeletePost:HandleDelete ~ error:', error)
            })
    }
    return { handleEditPost, handleDeletePost }
}
export default useHandlePost
