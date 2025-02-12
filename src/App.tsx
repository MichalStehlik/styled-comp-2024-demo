import Box, {StyledBox} from './components/Box'
import Button from './components/Button'
import './App.css'

function App() {
  return (
    <>
      <Box>X</Box>
      <Box c="red">Y</Box>
      <StyledBox c="blue">Z</StyledBox>
      <Button c="orange" type="button" onClick={()=>alert("pressed")}>Stiskni mě</Button>
    </>
  )
}

export default App
