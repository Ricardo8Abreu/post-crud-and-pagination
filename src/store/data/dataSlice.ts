import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type Post } from '@/types/types'

const currentData: Post[] = []

const initialState = {
  currentData

}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCurrentData: (state, action: PayloadAction<any>) => {
      state.currentData = action.payload
    }
  }
})

export const { setCurrentData } = dataSlice.actions

export default dataSlice.reducer
