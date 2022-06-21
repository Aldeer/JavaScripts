//addEventListener

//forma optima y correcta de crear elementos en mi html
/* const lista = document.getElementById('lista')
const template = document.querySelector('#template-li').content
const arrayLista = ['item 1', 'item 2', 'item 3']
const fragment =  document.createDocumentFragment()

arrayLista.forEach(item => {
  template.querySelector('span').textContent = item
  const clone = template.cloneNode(true)
  fragment.appendChild(clone)
})
lista.appendChild(fragment) */


/* const lista = document.getElementById('lista')
const arrayLista = ['item 1', 'item 2', 'item 3']
let fragment = ''
arrayLista.forEach(item => {
  fragment += `
    <li class='list'>
      <b>Nombre: </b> <span class='text-danger'>${item}</span>
    </li>
    `
})
lista.innerHTML = fragment */
/* const fragment = document.createDocumentFragment()

arrayLista.forEach(item => {
  const li = document.createElement('li')
  li.classList.add('list')
  const b = document.createElement('b')
  b.textContent = 'Nombre: '
  li.appendChild(b)
  const span = document.createElement('span')
  span.classList.add('text-danger')
  span.textContent = item
  li.appendChild(span)
  fragment.appendChild(li)
})
lista.appendChild(fragment) */
/* const obtenerPokemones = async() => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data =  await respuesta.json()
    const arrayNombres = data.results.map(pokemon => pokemon.name)
    console.log(arrayNombres)
  } catch (error) {
    console.log(error)
  }
}
 obtenerPokemones() */
