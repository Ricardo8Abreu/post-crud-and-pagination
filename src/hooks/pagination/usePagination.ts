import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

interface UsePaginationParams {
    maxPage: number
}

const usePagination = ({ maxPage }: UsePaginationParams) => {
    const { replace } = useRouter()

    const pathName = usePathname()
    const searchParams = useSearchParams()

    const params = new URLSearchParams(searchParams.toString())
    const initialPageNumber = 1

    const page = Number(searchParams.get('pagination')) || initialPageNumber

    // pagination handler

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
        ) => {
            // update the page number in the url
            params.set('pagination', String(newPage + 1))
           void replace(`${pathName}?${params.toString()}`)
    }

    return {
        page,
        handleChangePage
    }
}
export default usePagination
