import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import { store } from '@/store'
import { Provider } from 'react-redux'

import ModalAddPost from '@/components/Modals/ModalAddPost/ModalAddPost'
import ModalEditPost from '@/components/Modals/ModalEditPost/ModalEditPost'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster/>
      <ModalAddPost/>
      <ModalEditPost/>
      <Component {...pageProps} />
    </Provider>
  )
}
