//Função sendText manda o texto para a api e retorna imprimindo na tela com a show
function sendText(){
    const data = {
        texto: document.getElementById('texto').value ,
    }
    axios.post('http://localhost:4041/test',data)
        .then((response) => show(response.data))
}

//Função show imprime no html os resultados da API
function show(results){
    let output = "";
    for( let result of results){
        output += `<ul><h5>${result.nivel}: ${result.quantidade}</h5></ul>`;
        document.querySelector("#print-results").innerHTML = output;
    }
   
}
