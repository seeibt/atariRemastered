// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("/src/imagens/estrada.png");
  imagemDoAtor = loadImage("/src/imagens/ator-1.png");
  imagemCarro = loadImage("/src/imagens/carro-1.png");
  imagemCarro2 = loadImage("/src/imagens/carro-2.png");
  imagemCarro3 = loadImage("/src/imagens/carro-3.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("/src/sons/trilha.mp3");
  somDaColisao = loadSound("/src/sons/colidiu.mp3");
  somDoPonto = loadSound("/src/sons/pontos.wav");
}