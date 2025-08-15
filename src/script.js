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

ScrollReveal().reveal('.logo',{
  origin:'left',
  distance:'100px',
  duration: 2000,
  easnig:'ease-in-out',
});
ScrollReveal().reveal('.entrada',{
  origin:'right',
  distance:'200px',
  duration:1900,
  easnig:'ease-in-out',
});
ScrollReveal().reveal('.introducao',{
  origin:'right',
  distance:'200px',
  duration:1600,
  easnig:'ease-in-out',
  });
ScrollReveal().reveal('.cabecalho',{
  origin:'top',
  distance:'200px',
  duration:3000,
  easnig:'ease-in-out',
  });