import React from 'react'
import styled from 'styled-components'
 
interface PageProps extends React.PropsWithChildren {}
const Page: React.FC<PageProps> = ({children}: PageProps) => {
  return (
    <PageContainer>
      {children}
    </PageContainer>
  )
}

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`
export default Page
 
Page.displayName = "Page"