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

export default function Atv02MuitosItens() {
  return (
    <div>
      <button onClick={handleClick}>Clique abaixo para carregar várias atividades</button>
      <div id="activities"></div>
    </div>
  );
  
  function handleClick() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const activitiesDiv = document.getElementById('activities');
        activitiesDiv.innerHTML = '';
        data.forEach(item => {
          const status = item.completed ? 'feito' : 'a fazer';
          const p = document.createElement('p');
          p.textContent = `${item.id} - ${item.title}: ${status}`;
          activitiesDiv.appendChild(p);
        });
      })
      .catch(error => console.error('Erro ao carregar as atividades:', error));
  }
}