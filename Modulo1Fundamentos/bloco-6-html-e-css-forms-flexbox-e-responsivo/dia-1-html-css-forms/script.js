const localbotoes = document.querySelector('#botoes');

function criarButtonEnviar() {
    const criacaoEnviar = document.createElement('button');
    criacaoEnviar.classList = 'botoesnovo';
criacaoEnviar.innerHTML= 'Enviar';
    localbotoes.appendChild(criacaoEnviar);
  }
  criarButtonEnviar();