import Box, {StyledBox} from './components/Box'
import Button from './components/Button'
import './App.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  color: {
    primary: 'blue',
    secondary: 'green',
  },
  spaces: {
    s: '10px',
    m: '20px',
    l: '30px',
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
`;

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box>X</Box>
      <Box c="red">Y</Box>
      <StyledBox c="blue">Z</StyledBox>
      <Button c="orange" type="button" onClick={()=>alert("pressed")}>Stiskni mě</Button>
      <Button type="button" onClick={()=>alert("pressed 2")}>I mě stiskni</Button>
    </ThemeProvider>
    </>
  )
}

export default App
