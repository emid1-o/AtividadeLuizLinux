const artistaInput = document.getElementById('artista');
const botaoDeBusca = document.getElementById('buscarButton');
botaoDeBusca.addEventListener('click', buscarAlbuns)
const resultadosDiv = document.getElementById('resultados');


async function buscarAlbuns() {
  const artista = artistaInput.value;
  

  const apiKey = '399449a14b34a0d70c3d8f8579d72be6';
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artista}&api_key=${apiKey}&limit=3&format=json`;


  try {
    
    const response = await fetch(url);
    console.log("resposta da API recebida");

    const data = await response.json();
    console.log("conversao pra JSON");

    const primeiroAlbum = data.topalbums.album[0].name;
    const imagemAlbum = data.topalbums.album[0].image[2]['#text'];
    resultadosDiv.innerHTML = `<img src="${imagemAlbum}">`;
    console.log(`O album mais ouvido é: ${primeiroAlbum}`);

  } catch (error) {

    console.error("algo deu errado", error.message);
  }
}

