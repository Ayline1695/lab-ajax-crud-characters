const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    event.preventDefault();
    const charactersA = await charactersAPI.getFullList(); // esto es un objeto promesa (en espera)
    const container = document.querySelector('.character-info');
    container.innerHTML = ""
    charactersA.forEach(characters => {
      container.innerHTML += `${characters.name}`
    });
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    event.preventDefault();
    const idCharacters  = await charactersAPI.getOneRegister();
    console.log("characters", idCharacters)
    const container = document.querySelector('.character-info');
    idCharacters.forEach(charactersid=> {
      container.innerHTML += `${charactersid}`
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
