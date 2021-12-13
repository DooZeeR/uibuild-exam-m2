const formHTML = `
    <form action="">
        <div><h1>Visszajelzés</h1></div>
        <div><input type="text" name="name" id="name" placeholder="Tárgy"></div>
        <div class="textareadiv"><textarea id="textarea" name="textarea" rows="2" cols="55" placeholder="Megjegyzés"></textarea></div>
        <div class="check"><input type="checkbox" name="data" id="data">
        <label for="data">Elolvastam és elfogadom az <a href="">Adatkezelési tájékoztató</a></label></div>
        <div><button type="submit">MENTÉS</button></div>
    </form>
`;



function loadEvent() {
    const rootElement = document.getElementById('root');

    rootElement.insertAdjacentHTML('beforeend', formHTML);
}
  
window.addEventListener("load", loadEvent);





