import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Files from './Components/Files';


const theme = createTheme();


function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} disableGutters  >
       
        {/* <MainPage /> */}
        <Files/>
       
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
