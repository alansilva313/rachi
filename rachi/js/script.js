const ico = [
    {
        icone: '<i class="bi bi-person-add"></i>',
        titulo: 'Crie conexões',
        descricao: 'Lorem ipsum dolor sit amet, consecteteu.'
    },

    {
        icone: '<i class="bi bi-shield-check"></i>',
        titulo: '100% gratuito',
        descricao: 'Lorem ipsum dolor sit amet, consecteteu.'
    },

    {
        icone: '<i class="bi bi-emoji-smile"></i>',
        titulo: 'Compartilhamento',
        descricao: 'Lorem ipsum dolor sit amet, consecteteu.'
    }
]

var icones = document.querySelector('#icones')
function iniciarIcone(){
   ico.forEach(dados => {

    icones.innerHTML += `
    <div class='opcoes'>
    <i>${dados['icone']}</i>
    <h3>${dados['titulo']}</h3>
    <p>${dados['descricao']}</p>

    </div>
    `
    
   });
}

iniciarIcone()