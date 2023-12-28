import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type HandleEditArgs } from '@/types/types'

const modalsState = {
  AddPost: false,
  UpdatePost: false
}

const currentData: HandleEditArgs = {
  id: NaN,
  title: '',
  body: ''
}

const initialState = {
  modalsState,
  currentData
}

type ModalState = typeof modalsState

export type ModalsName = keyof ModalState
export type ModalData = typeof currentData

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalsName>) => {
      state.modalsState[action.payload] = true
    },
    closeModal: (state, action: PayloadAction<ModalsName>) => {
      state.modalsState[action.payload] = false
    },
    setModalCurrentData: (state, action: PayloadAction<ModalData>) => {
      state.currentData = action.payload
    }

  }
})

export const { openModal, closeModal, setModalCurrentData } = modalsSlice.actions

export default modalsSlice.reducer
