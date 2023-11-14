const campo = document.querySelector('.dadosAPI')
const btn = document.querySelector('.btn')


const consumirAPI = async() => {

 const API = await fetch(`https://api.kanye.rest/`)
 const dados= await API.json()
 return dados

}

const renderizarFrase = async () => {

const Aguardar = await consumirAPI()

campo.innerHTML = Aguardar.quote


}

btn.addEventListener('click', (renderizarFrase) )



