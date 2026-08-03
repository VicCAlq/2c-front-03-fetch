/*
* ATIVIDADE 02: MUITOS ITENS
*
* Crie e exporte por padrão um componente chamado Atv02MuitosItens, que deve ter
* uma <div>, e dentro desta <div> um <button> com o conteúdo 
* "Clique abaixo para carregar várias atividades", que quando pressionado
* fará uma requisição usando "fetch" para a URL abaixo:
*
* https://jsonplaceholder.typicode.com/todos
*
* Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
* userId: número inteiro
* id: número inteiro
* title: texto
* completed: booleano
*
* Ao receber este conteúdo, ele deve ser exibido da seguinte forma
* dentro de uma <div> abaixo do <button>, onde cada item será
* um <p> dentro dessa view:
* [id] - [title]: [status]
* Os colchetes indicam que deve se tratar de uma variável, e não
* do texto dentro deles.
* O valor de "status" deve ser "feito" se completed for true, 
* ou "a fazer" se completed for false
*/

import { useState } from 'react'

const estilos = {
	itens: {
		height: "150px",
		overflowY: "auto"
	}
}

export default function Atv02MuitosItens() {
	const [itens, defItens] = useState(<ul></ul>)

	const carregarAtividades = async () => {
		await fetch(
			"https://jsonplaceholder.typicode.com/todos",
			{ method: "GET" }
		).then((resposta) => {
			if (resposta.ok)
				return resposta.json()
		}).then((resultado) => {
			defItens(<ul style={ estilos.itens }>
				{ resultado.map(dado => <li key={ dado.id }>{dado.id} - {dado.title}: {dado.completed.toString()}</li>) }
			</ul>)
		})
	}

	return (
		<div>
			<button onClick={ carregarAtividades }>Clique abaixo para carregar várias atividades</button>
			{ itens }
		</div>
	)
}
