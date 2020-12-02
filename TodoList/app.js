//Definicion de variables
const formulario = document.querySelector('#entradas');
const listaTweets  = document.querySelector('#tweets');
const listado = document.querySelector('#Mis-Tweets');
const btnLimpiar = document.querySelector('#btnlimpiar');
let tweets = [];
//Variable Tweets vacio porque alli se van a cargar los datos de la informacion que se venga cargando





// Definicion de Event Listeners
eventListener();
function eventListener() {
    console.log('aqui estoy madre');

       formulario.addEventListener('submit', agregarTweet); 
}

btnLimpiar.onclick = () => {
    localStorage.clear();
    limpiarHTML();
    listado.classList.remove('tweet-box');

}







// Definicion de Funciones
function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweets').value;
    
    //Verificacion que el area de texto no quede vacia
    if (tweet ==='') {
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }
    //Creacion del objeto para guardar los elementos para luego ponerlos en el otro lado
    const tweetObj = {
        id: Date.now(),
        mensaje: tweet
    }
    //Objetos creados con los mensajes acumulados e identificados
    tweets = [...tweets, tweetObj];

    console.log(tweets);
    //si el area no esta vacia, va a crear el objeto para guardarlo
    // se borramn los mensajes depues de escrito y almacenados
    limpiarTweets();
    crearHTML();

}


function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const principal = document.querySelector('#principal');
    principal.appendChild(mensajeError);

    setTimeout( () => principal.removeChild(mensajeError), 3000);

}

function limpiarTweets() {
   if(listaTweets.value !== '') {
        listaTweets.value = '';
    };
    }


function crearHTML() {
//esta funcion se inserta en vista que cada vez que se carga un tweet, este no se borra sino que queda guardado, y se repite la informacion, entonces se le va a pedir que se borre cada vez y se actualice con la informacion nueva
    limpiarHTML();
    if(tweets.length > 0) {
        tweets.forEach(tweet => {

            //Ademas se crea un boton para elminar los tweets.
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            listado.appendChild(btnEliminar);

            //Añadir funcion de elminar Tweet
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('p');
            //anadir texto
            li.innerText = tweet.mensaje;
            listado.appendChild(li);
            listado.classList.add('tweet-box')
        })
    } else {
       listado.classList.remove('tweet-box');
    }

    sincronizarStorage();
}

function limpiarHTML() {
    while(listado.firstChild) {
        listado.removeChild(listado.firstChild);
    }
//esta funcion va a ser especifica para la funcion que queremos hacer
}

function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id != id);
    crearHTML();

}

function sincronizarStorage() {
    localStorage.setItem('Tweet', JSON.stringify(tweets));
}