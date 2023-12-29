import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { setCurrentData } from '@/store/data/dataSlice'
import { useAppDispatch, useAppSelector } from '@/store'

import { type ApiResponseGetPostsData } from '@/pages/api/posts'

import verifyData from '@/utils/data/verifyData'
import useFetchSWR from './useFetchSWR'

const useRender = () => {
    const searchParams = useSearchParams()

    const dispatch = useAppDispatch()
    const { currentData } = useAppSelector(state => state.dataSlice)

    const page = Number(searchParams.get('pagination')) || 1

    const { data, error, message, isLoading } = useFetchSWR(`api/posts?page=${page}`)
    const dataResponse: ApiResponseGetPostsData = data?.data || { data: null, quantity: null }

    const { data: dataPost, quantity } = dataResponse
    const { value: hasData } = verifyData(dataPost || [])

    useEffect(() => {
        hasData && dispatch(setCurrentData(dataPost))
    }, [data])

    return {
        error,
        hasData,
        message,
        quantity,
        dataPost: currentData,
        isLoading
    }
}
export default useRender
