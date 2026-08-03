/*
* ATIVIDADE 04: TRATAR ERROS DE MUITOS
*
* Crie e exporte por padrão um componente chamado Atv04TratarErrosDeMuitos, 
* que deve ter uma <div>, e dentro desta <div> um <button> com o 
* conteúdo "Clique abaixo para carregar uma atividade", que quando 
* pressionado fará uma requisição usando "fetch" para a URL abaixo:
*
* https://jsonplaceholder.typicode.com/comments
*
* Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
* postId: número inteiro
* id: número inteiro
* name: texto
* email: texto
* body: texto
*
* Ao receber este conteúdo, você deve tratar ele dentro do primeiro ".then"
* para verificar se existe um "ok" dentro da resposta, e tratar por erros
* de requisição após o segundo ".then" dentro de um ".catch".
*
* No segundo ".then" o valor recebido deve ser exibido da forma abaixo:
* Dentro de um elemento <div> abaixo do <button>, cada item será
* exibido dentro de sua própria <div> com o conteúdo abaixo:
* <p>[postId]: [id] - [email]</p>
* <p>[name]</p>
* <p>[body]</p>
* Os colchetes indicam que deve se tratar de uma variável, e não
* do texto dentro deles.
*/

import { useState } from 'react'

const estilos = {
	itens: {
		height: "150px",
		overflowY: "auto"
	}
}

export default function Atv04TratarErrosDeMuitos() {
	const [itens, defItens] = useState(<ul>Nada para ver aqui, por enquanto.</ul>)

	const carregarComentarios = async () => {
		await fetch(
			"https://jsonplaceholder.typicode.com/comments",
			{ method: "GET" }
		).then((resposta) => {
			if (!resposta.ok)
				throw new Error(`Ocorreu um erro durante a requisição. ${resposta.status}: ${resposta.statusText}`)

			return resposta.json()
		}).then((resultado) => {
			const cadaItem = (dado) => {
				const { postId, id, name, email, body } = dado
				return (
					<li key={ id }>
						<div>
							<p>{ postId }: { id } - { email }</p>
							<p>{ name }</p>
							<p>{ body }</p>
						</div>
					</li>
				)
			}

			defItens(<ul style={ estilos.itens }>{ resultado.map(cadaItem) }</ul>)
		}).catch((erro) => {
			window.alert(erro.message)
		})
	}

	return (
		<div>
			<button onClick={ () => carregarComentarios() }>Clique abaixo para carregar vários comentários</button>
			{ itens }
		</div>
	)
}
