import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form'
import Condicional from './components/Condicional';
import Listas from './components/Listas';
import NomeCompleto from './components/NomeCompleto';

function App() {
  const x = [{
    nome: 'juse', 
    idade: 12
  },{
    nome: 'jusesao2',
    idade: 13
  },{
    nome: 'pedro2',
    idade: 16
  },{
    nome: 'pedrao',
    idade: 23
  }]
  const y = [
    'joao',
    'pedro',
    'jose'
  ]
  return (
   <div className="App">
     <Evento numero="1"/>
     <Form />
     <h1>Condicional</h1>
     <Condicional />
     <h1>renderizacao de listas</h1>
     <Listas itens={y} lista={x}/>
     <Listas itens={[]} lista={x}/>
     <h1>STATE LIFT</h1>
     <NomeCompleto />
   </div>
  );
}

export default App;
