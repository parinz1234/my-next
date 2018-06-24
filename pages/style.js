import styled, { keyframes } from 'styled-components'
import { Button } from 'antd'

// Example
const Example = styled.h1`
  font-size: 30px;
  color: salmon;
`

// Passing props
const Box = styled.div`
  border: 1px solid black;
  background-color: ${props => props.color || 'lightgrey'};
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
`

const MyButton = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  ${ props => props.primary && `
    background: palevioletred;
    color: white;
  `}
`

// Extending styles
// can using with component was create from styled-component
// const TomatoButton = MyButton.extend`
//   color: tomato;
//   border-color: tomato;
// `

const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`

// SCSS
const UI = styled.ul`
  > li {
    color: salmon;
    &:first-child {
      color: cadetblue;
    }
  }
`
// Animations
const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

const CustomButton = styled(Button)`
  border-color: salmon;
`

export default () => <div>
  {/* Example */}
  <Example>Style components</Example>

  {/* Passing props */}
  <Box />
  <Box size="30px" />
  <Box color="red" />
  <Box size="120px" color="palevioletred" />

  <MyButton>Default</MyButton>
  <MyButton primary>Primary</MyButton>

  {/* Extending styles */}
  <TomatoButton>Tomato Button</TomatoButton>

  {/* SCSS */}
  <UI>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
  </UI>

  {/* Animations */}
  <Rotate>Hello</Rotate>

  <Button type="primary">Primary</Button>

  {/* external component */}
  <CustomButton >Button</CustomButton>
</div>