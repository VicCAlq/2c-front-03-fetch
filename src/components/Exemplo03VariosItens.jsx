// Elementos necessários para o componente
import { useState } from 'react'

// Estilos de "CSS"
const estilo = {
  usuario: {
    backgroundColor: "#acd",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
}

export default function Exemplo03VariosItens() {

  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(<p>A lista de usuários aparecerá aqui no lugar deste texto</p>)

  // Função que vai carregar a lista do endereço listado.
  async function carregarLista() {
    // 1ª etapa: Enviar requisição
    await fetch(
      'https://jsonplaceholder.typicode.com/users/',
      { method: 'GET', }
    )
    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return resposta.json()
    })
    // 3ª etapa: Usar o resultado
    .then((resultado) => {
      console.log(resultado)
      // Aqui como se trata de uma lista de usuários, usaremos um método
      // chamado "map", que funciona como um loop de "for item in lista"
      const listaDeUsuarios = <div>
        {resultado.map((conteudo) => {
          return <div style={{
            margin: "10px", padding: "5px", backgroundColor: "#7ab", borderRadius: "5px",
          }}>
            <p>Nome: {conteudo.name}</p>
            <p>Email: {conteudo.email}</p>
            <p>Site: {conteudo.website}</p>
          </div>
        })}
      </div>

      // Jogamos o valor da lista de itens a serem exibidos para
      // a variável de estado "lista"
      setResultado(listaDeUsuarios)
    })
    // Se houverem erros mais severos, estes são tratados na função de
    // "catch" abaixo:
    .catch(error => {
      console.log("Erro: ", error)
    })
  }

  // Parte visual do componente
  return(
    <div style={estilo.usuario}>
      <p>
        Carregue a lista de usuários abaixo:
      </p>
      <button style={estilo.botao} onClick={() => carregarLista()}>
        <p style={estilo.textoBotao}>Carregar usuário</p>
      </button>
      {resultado}
    </div>
  )
}
