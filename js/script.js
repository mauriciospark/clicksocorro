/*
  ============================================================================
  PROPRIETÁRIO: Mauricio Spark
  MARCA:        Spark Mauricio
  PROJETO:      ClickSocorro
  VERSÃO:       v1.0.0
  LINHAGEM:     SPARK
  ============================================================================
  Documento de Planejamento de Escopo
  COPYRIGHT: © 2026 / Mauricio Spark. Todos os direitos reservados.
  ============================================================================
*/
//Jinwookaisel
document.querySelectorAll('.btn-tel').forEach(botao => {
    botao.addEventListener('click', function(e) {
        // Detecção simples de dispositivo móvel
        const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
        
        if (!isMobile) {
            e.preventDefault(); // Impede o navegador de tentar discar
            
            const numero = this.getAttribute('href').replace('tel:', '');
            
            // Copia o número para a área de transferência
            navigator.clipboard.writeText(numero).then(() => {
                alert(`Número ${numero} copiado! Como você está no computador, use seu telefone para discar.`);
            });
        }
    });
});
document.querySelector('a[href="tel:190"]').addEventListener('click', function(e) {
    const confirmar = confirm("Você tem certeza que deseja ligar para a Polícia Militar?");
    if (!confirmar) {
        e.preventDefault(); // Cancela a ação se o usuário desistir
    }
});

function buscarLocalizacao() {
    const textoCoordenadas = document.getElementById('coordenadas');
    
    if (navigator.geolocation) {
        textoCoordenadas.innerText = "Buscando satélites...";
        
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                const lat = posicao.coords.latitude;
                const lon = posicao.coords.longitude;
                // Você também pode converter isso para um link do Google Maps
                textoCoordenadas.innerHTML = `Sua Lat/Lon: <strong>${lat}, ${lon}</strong><br>
                <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">Ver no Mapa</a>`;
            },
            (erro) => {
                textoCoordenadas.innerText = "Não foi possível obter a localização: " + erro.message;
            },
            { enableHighAccuracy: true } // Força o uso do GPS do celular se disponível
        );
    } else {
        textoCoordenadas.innerText = "Geolocalização não é suportada pelo seu navegador.";
    }
}
/*Jinwookaisel*/ */