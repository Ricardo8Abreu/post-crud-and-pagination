import useSWR, { type SWRConfiguration } from 'swr'

interface Config {
    config?: SWRConfiguration
    messageURL?: string | 'URL was not passed'
    messageError?: string | 'Error in the swr request'
}
interface MessageConfig {
    error: {
        isError: boolean
        message: string
    }
    loading: {
        isLoading: boolean
        message: string
    }
    messageServer?: string
}

export type Mutation = (() => Promise<any>) | undefined

const handleMessage = (props: MessageConfig) => {
    const {
        error: { isError, message: messageError = 'Error' },
        loading: { isLoading, message: messageLoading = 'Loading' },
        messageServer = null

    } = props

    if (messageServer) return messageServer

    if (isError) return messageError

    if (isLoading) return messageLoading

    return 'Ok'
}

const fetcher = async (args: RequestInfo | URL) => await fetch(args).then(async res => await res.json()).catch(() => null)
const useFetchSWR = (url: string, personalConfig?: Config) => {
    const { config, messageURL = 'URL was not passed', messageError = 'Error in the request' } = { ...personalConfig }

    const { data, error, isLoading, mutate } = useSWR(url, fetcher, config)

    if (!url || url === 'undefined') {
        return {
            data: null,
            message: messageURL,
            isLoading: false,
            error: true
        }
    }
    const newData = typeof data === 'string' ? undefined : data

    return {
        data: newData,
        error: error || data?.status === false,
        isLoading: isLoading || newData === undefined,
        mutation: async () => await mutate(url),
        message: handleMessage({
            messageServer: data?.message,
            error: {
                isError: error,
                message: error?.message || messageError

            },
            loading: {
                isLoading,
                message: 'Loading'
            }
        })
    }
}

export default useFetchSWR
