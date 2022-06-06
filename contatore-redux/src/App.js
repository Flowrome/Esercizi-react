import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Label from './components/Label';
import { connect } from 'react-redux';

function App(props) {

  console.log(props.value);
  return (
    <div className="App">
      <h1>Esercizio contatore</h1>
      <Input />
      <Button name='+' isIncrement/>
      <Button name='-'/>
      <Label value={0}/>
    </div>
  );
}

export default connect(state => ({value: state.value}))(App);
