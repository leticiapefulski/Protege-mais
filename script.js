// Lógica da Simulação Interativa
function iniciarSimulacao() {
// Esconde a tela inicial de monitoramento
document.getElementById('screen-normal').classList.remove('active');

// Mostra a tela de alerta de chuva
document.getElementById('screen-alert').classList.add('active');

// Esconde o botão de iniciar e mostra o de resetar
document.getElementById('btn-simular').style.display = 'none';
document.getElementById('btn-reset').style.display = 'inline-block';

// Após 4 segundos, avança para o alerta de enchente (A água subiu)
setTimeout(() => {
document.getElementById('screen-alert').classList.remove('active');
document.getElementById('screen-flood').classList.add('active');
}, 4000);
}

function mostrarSocorro() {
// Esconde a tela de enchente
document.getElementById('screen-flood').classList.remove('active');

// Mostra a tela de SOS
document.getElementById('screen-sos').classList.add('active');
}

function resetarSimulacao() {
// Esconde todas as telas
document.getElementById('screen-alert').classList.remove('active');
document.getElementById('screen-flood').classList.remove('active');
document.getElementById('screen-sos').classList.remove('active');

// Mostra a tela inicial
document.getElementById('screen-normal').classList.add('active');

// Reseta os botões
document.getElementById('btn-simular').style.display = 'inline-block';
document.getElementById('btn-reset').style.display = 'none';
}

// Efeito suave de rolagem para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetElement = document.querySelector(this.getAttribute('href'));
if (targetElement) {
targetElement.scrollIntoView({ behavior: 'smooth' });
}
});
});
