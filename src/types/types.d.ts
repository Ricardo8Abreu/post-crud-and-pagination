interface Post {
    id: number
    body: string
    title: string
    userId: number
}

interface ApiResponse<Data = any> { status: boolean, data: Data | null, message: string }

type HandleEditArgs = Pick<Post, 'id' | 'title' | 'body'>
type HandleDeleteArgs = Pick<Post, 'id'>

type HandleEdit = (data: HandleEditArgs) => void
type HandleDelete = (data: HandleDeleteArgs) => void

export type {
    Post,
    ApiResponse,

    HandleEdit,
    HandleDelete,
    HandleEditArgs,
    HandleDeleteArgs

}
