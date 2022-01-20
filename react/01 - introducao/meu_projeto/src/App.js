import './App.css';
import HelloWord from './components/HelloWorld.js'
import Frase from './components/Frase.js'
import DizMeuNome from './components/DizMeuNome';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Item from './components/Item';

function sum(a, b){
  return a + b
}
function App() {
  const url = 'https://via.placeholder.com/153'
  // marca quando passa numero da um erro pois o valor requerido é um texto
  return (
    <div className="App">
      <List />
      <h1>TESTE CSS</h1>
      <h2>Alterando o JSX com variavel</h2>
      <p>Olá {sum(1,5)}</p> 
      <img src={url} alt="Imagen aleatória" />
      <HelloWord />
      <Frase />
      <Frase />
      <DizMeuNome nome="Jozezao" />
      <Pessoa nome="Rodrigo" idade="28" profissao="pedreiro" foto="https://via.placeholder.com/125" />
    </div>
  );
}

export default App;
