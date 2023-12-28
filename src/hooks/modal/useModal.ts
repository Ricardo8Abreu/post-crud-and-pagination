import { useAppDispatch, useAppSelector } from '@/store'

import { openModal as handleOpen, type ModalsName, closeModal as handleClose, setModalCurrentData } from '@/store/modals/modalsSlice'
import { type HandleEditArgs } from '@/types/types'

const useModal = (modalName: ModalsName) => {
    const dispatch = useAppDispatch()
    const states = useAppSelector((state) => state.modalsSlice)

    const { modalsState, currentData } = states

    // get state selected modal
    const isOpen = modalsState[modalName]

    const openModal = () => {
        dispatch(handleOpen(modalName))
    }

    const closeModal = () => {
        dispatch(handleClose(modalName))
    }

    const setCurrentDataModal = (data: HandleEditArgs) => {
        dispatch(setModalCurrentData(data))
    }

    return { isOpen, currentData, openModal, closeModal, setCurrentDataModal }
}

export default useModal
