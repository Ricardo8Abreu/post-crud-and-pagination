import CustomAlerts from '@/components/z_Reusable/CustomAlerts/CustomAlerts'

export interface GetResponseConditionalComponentProps { [x: string]: ConditionalComponentProps }
export type GetResponseConditionalComponent = (arg: GetResponseConditionalComponentProps) => void

export type MessageNoDataCustom = string | null | undefined

export interface ConditionalComponentProps {
    error: boolean
    label: string
    hasData: boolean | null
    message: string
    isLoading: boolean
    defaultMessage?: boolean
    messageNoDataCustom?: MessageNoDataCustom
}

const getConditionalComponent = ({ error, isLoading, hasData, message, label = 'elements', defaultMessage = true, messageNoDataCustom }: ConditionalComponentProps) => {
    if (error) {
        return <CustomAlerts.Error message={message} />
    }
    if (isLoading) {
        return <CustomAlerts.Loading message={'Loading...'} />
    }
    if (!hasData) {
        // if messageNoDataCustom is null, it makes ConditionalComponent not take into account when there is no data and does not throw an error
        if (messageNoDataCustom === null) return null

        // default initial message
        let initialMessage = `There are no ${messageNoDataCustom || label}`

        // if defaultMessage is disabled and messageNoDataCustom is passed, set messageNoDataCustom as the initial message
        if (!defaultMessage && messageNoDataCustom) {
            initialMessage = messageNoDataCustom
        }

        //  if defaultMessage is disabled and messageNoDataCustom is not passed, set default initial message
        const emptyMessage = !defaultMessage
            ? initialMessage
            : `${initialMessage}, click on create to add a new post`
        return <CustomAlerts.Empty message={`${emptyMessage}`} />
    }
    return null
}

export default getConditionalComponent
