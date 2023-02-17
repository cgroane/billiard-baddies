import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../shared'
 
interface PageProps extends React.PropsWithChildren {}
const Page: React.FC<PageProps> = ({children}: PageProps) => {
  return (
    <PageContainer display={'block'} width={'100%'} height={'100%'}>
      {children}
    </PageContainer>
  )
}

const PageContainer = styled(FlexBox)`
`
export default Page
 
Page.displayName = "Page"