// Elementos necessários para o componente
import { useState } from 'react'

// Estilos de "CSS"
const estilo = {
  usuario: {
    backgroundColor: "#8d9",
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

export default function Exemplo02Tratamento() {

  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(<p>Os dados do usuário aparecerão no lugar deste texto</p>)

  // Função que vai carregar a lista do endereço listado.
  async function carregarUsuario() {
    // 1ª etapa: Enviar requisição
    // "fetch" é a função que envia uma mensagem para um endereço.
    await fetch(
      // Este é o endereço a ser acessado
      'https://jsonplaceholder.typicode.com/users/1',
      // Aqui definimos o método da requisição
      { method: 'GET', }
    )
    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {
      // Se a resposta não tiver um valor "ok", anunciamos um erro
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      // Se não der erro, convertemos o resultado para JavaScript
      return resposta.json()
    })
    // 3ª etapa: Usar o resultado
    .then((resultado) => {
      console.log(resultado)
      const usuario = <div style={{
        margin: "10px", padding: "5px", backgroundColor: "#6a7", borderRadius: "5px",
      }}>
        <p>Nome: {resultado.name}</p>
        <p>Email: {resultado.email}</p>
        <p>Site: {resultado.website}</p>
      </div>

      // Jogamos o valor da lista de itens a serem exibidos para
      // a variável de estado "resultado"
      setResultado(usuario)
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
        Carregue o usuário abaixo:
      </p>
      <button style={estilo.botao} onClick={() => carregarUsuario()}>
        <p style={estilo.textoBotao}>Carregar usuário</p>
      </button>
      {resultado}
    </div>
  )
}
