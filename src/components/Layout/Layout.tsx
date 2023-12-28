import Head from 'next/head'
import React, { type ReactNode } from 'react'

import { Box, Stack } from '@mui/material'

import Header from './Header/Header'

export interface LayoutProps {
  title: string
  children: ReactNode
  description: string

}

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <Stack
      spacing={2}
      height={'100vh'}
      direction={'column'}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Box
        width={'100%'}
        flexGrow={1}
        minHeight={'400px'}
      >
        {children}
      </Box>

    </Stack>
  )
}

export default Layout
