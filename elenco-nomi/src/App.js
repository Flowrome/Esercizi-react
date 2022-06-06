import './App.css';
import Row from './components/Row';
import { invertTheme, Th, theme, Title } from './App-style';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Title>Elenco nomi</Title>
      <table>
        <thead>
        <ThemeProvider theme={invertTheme}>
          <tr>
            <Th>Nome</Th>
            <Th>Cognome</Th>
            <Th>Nome completo</Th>
          </tr>
        </ThemeProvider>
        </thead>
        <tbody>
        <Row name='Pippo' surname='Baudo'/>
        </tbody>
      </table>
      </ThemeProvider>
    </div>
  );
}

export default App;
