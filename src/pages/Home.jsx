import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`

const Content = styled.div`
  background: white;
  padding: 2rem;
  border: 1px solid #ddd;
  margin-bottom: 2rem;
`

const Paragraph = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
`

function Home() {
  return (
    <Container>
      <Title>Welcome to My React Site</Title>
      <Subtitle>This is a multi-page React application</Subtitle>
      
      <Content>
        <Paragraph>
          This website was built using React and React Router. It has multiple pages
          that you can navigate between using the menu at the top.
        </Paragraph>
        <Paragraph>
          Check out the About page to see some interactive components!
        </Paragraph>
      </Content>
    </Container>
  )
}

export default Home
