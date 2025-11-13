import React, { useState } from 'react'
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

const CounterBox = styled.div`
  background: #f0f0f0;
  padding: 2rem;
  border: 1px solid #ddd;
  text-align: center;
  margin: 2rem 0;
`

const CounterTitle = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`

const CounterDisplay = styled.div`
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  margin: 1rem 0;
`

const Button = styled.button`
  background: #667eea;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
`

const ToggleBox = styled.div`
  background: #f0f0f0;
  padding: 2rem;
  border: 1px solid #ddd;
  text-align: center;
  margin: 2rem 0;
`

const ToggleTitle = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`

const ToggleButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
`

const Message = styled.p`
  color: #333;
  margin-top: 1rem;
  font-size: 1rem;
`

function About() {
  const [count, setCount] = useState(0)
  const [isToggled, setIsToggled] = useState(false)

  return (
    <Container>
      <Title>About This Project</Title>
      
      <Content>
        <Paragraph>
          This is a React application with multiple pages. I'm learning how to use
          React Router to navigate between different pages.
        </Paragraph>
        <Paragraph>
          Below are some simple React components that use state.
        </Paragraph>
      </Content>

      <CounterBox>
        <CounterTitle>Counter</CounterTitle>
        <CounterDisplay>{count}</CounterDisplay>
        <div>
          <Button onClick={() => setCount(count - 1)}>Decrease</Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
          <Button onClick={() => setCount(count + 1)}>Increase</Button>
        </div>
      </CounterBox>

      <ToggleBox>
        <ToggleTitle>Toggle Example</ToggleTitle>
        <ToggleButton onClick={() => setIsToggled(!isToggled)}>
          {isToggled ? 'Hide' : 'Show'} Message
        </ToggleButton>
        {isToggled && (
          <Message>
            This message appears when you click the button!
          </Message>
        )}
      </ToggleBox>
    </Container>
  )
}

export default About
