import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'
import Container from './components/Container/Container'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container/>
    </ThemeProvider>
  );
}

export default App;
