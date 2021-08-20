
const criarTarefa = (evento) => {

	evento.preventDefault()

	const list = document.querySelector('[data-list]')
	const input = document.querySelector('[data-input]')
	const valor = input.value

	const tarefa = document.createElement('li')
	tarefa.classList.add
	const conteudo = `<p class="task">${valor}</p>`

	tarefa.innerHTML = conteudo

	list.appendChild(tarefa)
	input.value = ' '
}
	const novaTarefa = document.querySelector('[data-botao]')

	novaTarefa.addEventListener('click', criarTarefa)