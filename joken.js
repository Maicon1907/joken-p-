  function jogar(escolhaUsuario) {
                const opcoes = ['pedra', 'papel', 'tesoura'];
                const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

                let resultado = '';

                if (escolhaUsuario === escolhaComputador) {
                    resultado = 'EMPATE!';
                } else if (
                    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
                    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
                    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
                ) {
                    resultado = 'VOCÊ VENCEU!';
                } else {
                    resultado = 'VOCÊ PERDEU!';
                }

                document.getElementById('resultado').innerText = `Você escolheu: ${escolhaUsuario}.
                 O computador escolheu: ${escolhaComputador}.
                  ${resultado}`;
                  const pontuacaoUsuario = document.querySelector('#pontuacao');
                  const pontuacaoComputador = document.querySelector('#pontuacao-computador');
                      
                  

                  
                if (resultado === 'VOCÊ VENCEU!') {
                    pontuacaoUsuario.innerText = parseInt(pontuacaoUsuario.innerText) + 1;
                } else if (resultado === 'VOCÊ PERDEU!') {
                    pontuacaoComputador.innerText = parseInt(pontuacaoComputador.innerText) + 1;
                }

            }