import { useState } from 'react'

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

  const [resultado, setResultado] = useState(<p>Os dados do usuário aparecerão no lugar deste texto</p>)

  async function carregarUsuario() {
    await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
      { method: 'GET', }
    )
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return resposta.json()
    })
    .then((resultado) => {
      console.log(resultado)
      const usuario = <div style={{
        margin: "10px", padding: "5px", backgroundColor: "#6a7", borderRadius: "5px",
      }}>
        <p>Nome: {resultado.name}</p>
        <p>Email: {resultado.email}</p>
        <p>Site: {resultado.website}</p>
      </div>

      setResultado(usuario)
    })
    .catch((erro) => {
      console.log("Erro: ", error)
    })
  }

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
