
function criarquiz(elemento){
    const escondido = document.querySelector(".inicio");
    const criar = document.querySelector(".informacoesbasicas")
    escondido.classList.add("display");
    criar.classList.remove("display");

}
function voltarInicio(elemento){
    const escondido = document.querySelector(".inicio");
    const all = document.querySelector(".controle");
    escondido.classList.remove("display");
    all. classList.add("display");
}