const pedidoInput = document.getElementById('pedidoInput');
const enviarBtn = document.getElementById('enviarBtn');

enviarBtn.addEventListener('click', () => {
    const numeroWhatsApp = '554896758331';

    const mensagem = pedidoInput.value;


    if(mensagem.trim() !== ''){
        const mensagemCodificada = encodeURIComponent(mensagem);

        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

        window.open(urlWhatsApp, '_blank');
    }else {
    alert('Por favor, digite uma mensagem antes de enviar.');
  }
});