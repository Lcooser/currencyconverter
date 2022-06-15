const input = document.getElementById('inputButton')
const calcula = document.getElementById('submitButton')
const resultado = document.getElementById('resultado')


function exibirNaTela(dados){

    
const valorReal = input.value
    let valorDoReal = dados.USD_BRL * valorReal
    let html = ''
    html += 
    `<div>
        <h2>Resultado</h2> 
        <input type="text" value="${valorDoReal}">
    </div>`

    resultado.innerHTML =  html

}

function exibirErro(){
    
    console.log('Ops, deu erro!')
}

function transformarEmJson(response){
    return response.json()
}


calcula.addEventListener('click', function(e){
    fetch('https://free.currconv.com/api/v7/convert?q=USD_BRL,BRL_USD&compact=ultra&apiKey=e68b0696a552775e5656')
        .then(transformarEmJson)
        .then(exibirNaTela)
        .catch(exibirErro)
    
})
