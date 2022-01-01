var texto = document.getElementById('entrada-texto')
var botaoAdicionar = document.getElementById('adicionar')
var tarefas = document.getElementById('tarefas')

botaoAdicionar.addEventListener('click', insereTarefa)
function insereTarefa(){
    tarefa = texto.value
    if(tarefa){
        console.log('criando item')
        let item = document.createElement('div')
        
        item.setAttribute('class', 'tarefa-item')
        
        let descricao = document.createElement('div')
        descricao.setAttribute('class', 'tarefa-texto')

        descricao.innerText = tarefa
        let botoesItem = document.createElement('div')
        botoesItem.setAttribute('class', 'botoes-item')

        let check = document.createElement('input')
        check.setAttribute('type', 'checkbox')

        /*Criando botao deletar tarefa */
        let btnDeletar = document.createElement('button')

        let deletar = document.createElement('img')
        deletar.setAttribute('src', 'assets/deletar.png')
        deletar.setAttribute('width', '16')
        deletar.setAttribute('width', '16')
        
        // criando estrutura dos botoes do item
        btnDeletar.appendChild(deletar)
        
        botoesItem.appendChild(check)
        botoesItem.appendChild(btnDeletar)

        /*Criando estrutura da caixa de tarefas */
        item.appendChild(descricao)
        item.appendChild(botoesItem)

        tarefas.appendChild(item)
        
    }
    
}
    