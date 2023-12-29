import { type GetStaticProps } from 'next'

import { type TablePostHeadData } from '@/components/TablePosts/TablePostHead/TablePostHead'

import useRender from '@/hooks/requests/useRender'
import useHandlePost from '@/hooks/post/useHandlePost'

import Layout from '@/components/Layout/Layout'
import TablePosts from '@/components/TablePosts/TablePosts'
import CustomAlerts from '@/components/z_Reusable/CustomAlerts/CustomAlerts'
import TablePostBody from '@/components/TablePosts/TablePostBody/TablePostBody'

interface HomeProps {
  dataTableHead: TablePostHeadData
}

export default function Home ({ dataTableHead }: HomeProps) {
  const { handleEditPost, handleDeletePost } = useHandlePost()
  const { dataPost, quantity, error, message, isLoading } = useRender()

  if (error) return <CustomAlerts.Error message={message} />

  return (
    <Layout
      title='CRUD Posts'
      description='CRUD Posts for everyone'
    >

      <TablePosts
        maxPage={quantity || 0}
        dataHead={dataTableHead}
      >

        <TablePostBody
          data={dataPost}
          isLoading={isLoading}
          handleEdit={handleEditPost}
          handleDelete={handleDeletePost}

        />

      </TablePosts>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const dataTableHead = ['Title', 'Body', 'Actions']

  return {
    props: {
      dataTableHead
    }
  }
}
