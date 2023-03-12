var banner = 
    ["Os melhores do Brasil!", "Qualidade e preço baixo!"];

var bannerAtual = 0;    

function trocarBanner(){
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('h2#mensagem').textContent =
    banner[bannerAtual];
}

setInterval(trocarBanner, 1000);