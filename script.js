var botao1 = document.getElementById("botao1");
var resultado = document.getElementById("resultado");
var quantasPiadas = document.getElementById("quantaspiadas");
var principal = document.getElementById("principal");
var campoResultado = document.getElementById("campoResultado");
var msgInicial = document.getElementById("msgInicial");
var campoPiadas = document.getElementById("campoPiadas");
var erro = document.getElementById("erroAjax");
        
// Implementa o primeiro botão: CHUCKNORRIS it!
botao1.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    var pesquisa = document.getElementById("pesquisa").value;
    // Se houver algo na tela, limpe
    if(campoPiadas.innerHTML.length > 0){
        campoPiadas.innerHTML = "";
    }
    // adiciona valor do input ao fim da URL
    xhr.open("GET", "https://api.chucknorris.io/jokes/search?query=" + pesquisa);
    xhr.addEventListener("load", function(){
        if (xhr.status == 200){
            var resposta = xhr.responseText;
            var piadas = JSON.parse(resposta);
        // for para selecionar todos os elementos do array piadas.result e adiciona no campoPiadas  
            for (var i = 0; i < piadas.result.length; i ++){
                var paragraph = document.createElement("p");
                paragraph.textContent = piadas.result[i].value;
                campoPiadas.appendChild(paragraph);
            }
        // cria um campo específico para o resultado do botão 1 e mostra p número de resultados
            campoPiadas.classList.remove("redBgd");
            campoPiadas.classList.add("blueBgd");
            quantasPiadas.textContent = i;
            // impede que msgInicial e erro apareçam em qualquer hipótese de erro
            msgInicial.classList.remove("invisivel");
            erro.classList.add("invisivel");
        } else {
            //exibe a msg erro escondida e esconde a msgInicial
            erro.classList.remove("invisivel");
            msgInicial.classList.add("invisivel"); 
             /* // impede que um pequeno bug apareça quando aperta-se um botão depois do outro.
            O bug é uma pequena caixa com a cor do campo */ 
            campoPiadas.classList.remove("blueBgd");
            campoPiadas.classList.remove("redBgd");  
        }
    })
    xhr.send();
})
        
// Implementação do Botão estilo Feeling Lucky
botao2.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    var pesquisa = document.getElementById("pesquisa").value;
    // Se houver algo na tela, limpe
    if(campoPiadas.innerHTML.length > 0){
        campoPiadas.innerHTML = "";
    }
    // adicionar valor do input ao fim da URL
    xhr.open("GET", "https://api.chucknorris.io/jokes/search?query=" + pesquisa);
    xhr.addEventListener("load", function(){
        if (xhr.status == 200){
            msgInicial.classList.add("invisivel");
            var resposta = xhr.responseText;
            var piadas = JSON.parse(resposta);
             // O "feeling lucky" funciona como uma escolha aleatória dentro do array de piadas gerado pela requisição Ajax
            var numeroAleatorio = Math.floor(Math.random()*piadas.result.length);
            var paragraph = document.createElement("p");
            paragraph.textContent = piadas.result[numeroAleatorio].value;
            // o resto da implementação é semelhante à do botão 1
            campoPiadas.appendChild(paragraph);
            campoPiadas.classList.remove("blueBgd");
            campoPiadas.classList.add("redBgd");
            erro.classList.add("invisivel");
        } else {
            erro.classList.remove("invisivel");
            msgInicial.classList.add("invisivel");  
            campoPiadas.classList.remove("blueBgd");
            campoPiadas.classList.remove("redBgd");    
        }
    })
    xhr.send();
})
    