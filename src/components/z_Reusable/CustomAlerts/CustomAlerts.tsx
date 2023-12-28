import { Alert, AlertTitle, CircularProgress } from '@mui/material'

interface PropsAlerts {
    icon?: JSX.Element
    severity: 'error' | 'info' | 'success' | 'warning'
    message: string
}

interface PropsAlertsSpecific extends Partial<PropsAlerts> {
    message: string
}

const Error = ({ message, ...props }: PropsAlertsSpecific) => {
    return (
        <Notification
            message={message}
            {...props}
            severity="error"
        />
    )
}

const Empty = ({ message, ...props }: PropsAlertsSpecific) => {
    return (
        <Notification
            message={message}
            {...props}
            severity="info"
        />
    )
}

const Loading = ({ message, ...props }: PropsAlertsSpecific) => {
    return (
        <Notification
            icon={<CircularProgress />}
            message={message}
            {...props}
            severity="info"
        />
    )
}

const Notification = ({ message, severity, icon, ...props }: PropsAlerts) => {
    return (
        <Alert severity={severity} {...props}>
            <AlertTitle>{message}</AlertTitle>
            {icon}
        </Alert>
    )
}

const CustomAlerts = {
    Error,
    Empty,
    Loading
}

export default CustomAlerts
