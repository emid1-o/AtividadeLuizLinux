const artistaInput = document.getElementById('artista');
const botaoDeBusca = document.getElementById('buscarButton');
botaoDeBusca.addEventListener('click', buscarAlbuns)
const resultadosDiv = document.getElementById('resultados');
const resultadosDivDois = document.getElementById('resultadosDois');
const resultadosDivTres = document.getElementById('resultadosTres');
const nomeUm = document.getElementById('nomeUm');
const nomeDois = document.getElementById('nomeDois');
const nomeTres = document.getElementById('nomeTres');



async function buscarAlbuns() {
  const artista = artistaInput.value;
  

  const apiKey = '399449a14b34a0d70c3d8f8579d72be6';
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artista}&api_key=${apiKey}&limit=3&format=json`;


  try {
    
    const response = await fetch(url);
    console.log("resposta da API recebida");

    const data = await response.json();

    const primeiroAlbum = data.topalbums.album[0].name;
    const segundoAlbum = data.topalbums.album[1].name;
    const terceiroAlbum = data.topalbums.album[2].name;
    const imagemAlbum = data.topalbums.album[0].image[2]['#text'];
    const imagemAlbumDois = data.topalbums.album[1].image[2]['#text'];
    const imagemAlbumTres = data.topalbums.album[2].image[2]['#text']

    nomeUm.innerHTML = ` 1 - ${primeiroAlbum}`;
    resultadosDiv.innerHTML = `<img src="${imagemAlbum}">`;
    nomeDois.innerHTML = ` 2 - ${segundoAlbum}`;
    resultadosDivDois.innerHTML = `<img src="${imagemAlbumDois}">`;
    nomeTres.innerHTML = ` 3 - ${terceiroAlbum}`;
    resultadosDivTres.innerHTML = `<img src="${imagemAlbumTres}">`;

    console.log(`Os albuns mais ouvido são: ${primeiroAlbum, segundoAlbum, terceiroAlbum}`);

  } catch (error) {

    console.error("algo deu errado", error.message);
  }
}

