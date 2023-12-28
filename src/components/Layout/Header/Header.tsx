import { AppBar, Button, Toolbar } from '@mui/material'

import useModal from '@/hooks/modal/useModal'

const Header = () => {
    const { openModal } = useModal('AddPost')

    return (
        <AppBar
            position="sticky"
            color='transparent'
        >
            <Toolbar
                variant='regular'
            >
                <Button
                    color="primary"
                    variant="contained"
                    onClick={openModal}
                >
                    Create Post
                </Button>
            </Toolbar>
        </AppBar>
    )
}
export default Header
