import { useState } from 'react'

interface Params {
  min: number
  max: number
  current?: number
}
// type SetIndex = (indexControl: -1 | 1) => void
export interface UseIndexReturn {
  index: number
  setIndex: (indexControl: -1 | 1) => void
  resetIndex: () => void
}

const useIndex = ({ min = 0, max, current }: Params): UseIndexReturn => {
  const [index, setSliderIndex] = useState(current ?? min)

  const setIndex = (indexControl: -1 | 1) => {
    const indexNuevo = index + indexControl
    if (indexNuevo > max) { setSliderIndex(0); return }
    if (indexNuevo < min) { setSliderIndex(max); return }
    setSliderIndex(indexNuevo)
  }
  const resetIndex = () => {
    setSliderIndex(min)
  }

  return { index, setIndex, resetIndex }
}

export default useIndex
