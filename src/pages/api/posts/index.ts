import { type Post, type ApiResponse } from '@/types/types'
import verifyData from '@/utils/data/verifyData'

import type { NextApiRequest, NextApiResponse } from 'next'

import { dataBackendPost } from '../../../../data'
import axios from 'axios'

export interface ApiResponseGetPostsData {
    data: Post[] | null
    quantity: number | null
}

export type ApiResponseGetPosts = ApiResponse<ApiResponseGetPostsData>
const environment = process.env.NODE_ENV

export default async function (req: NextApiRequest, res: NextApiResponse<ApiResponseGetPosts>) {
    try {
        const querys = req.query

        const page = Number(querys.page) || 1
        const recordsPerPage = Number(querys.recordsPerPage) || 10

        const start = (page - 1) * recordsPerPage
        const end = start + recordsPerPage


        if (environment === "development") {

            const posts = dataBackendPost
            const paginatedPosts = posts.slice(start, end)

            const { quantity } = verifyData(posts)

            return res.status(200).json({ status: true, data: { data: paginatedPosts, quantity }, message: 'Ok' })
        }

        if (environment === "production") {
            await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    const posts = response.data
                    const paginatedPosts = posts.slice(start, end)

                    const { quantity } = verifyData(posts)

                    res.status(200).json({ status: true, data: { data: paginatedPosts, quantity }, message: 'Ok' })
                })
                .catch(error => {
                    console.error(error)
                    res.status(500).json({ status: false, data: { data: null, quantity: null }, message: 'An error occurred while fetching posts' })
                })
        }
    } catch (error) {
        const newError = error as Error
        res.status(500).json({ status: false, data: { data: null, quantity: null }, message: `An error occurred while fetching posts, ${newError.message}` })
    }
}
