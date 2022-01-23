import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form'
import Condicional from './components/Condicional';

function App() {
  return (
   <div className="App">
     <Evento numero="1"/>
     <Form />
     <h1>Condicional</h1>
     <Condicional />
   </div>
  );
}

export default App;
