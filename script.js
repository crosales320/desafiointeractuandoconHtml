class Pelicula {
    constructor (id, nombre, horario, precio, disponibilidad){
        this.id = id;
        this.nombre = nombre;
        this.horario = horario;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }
}

const pelicula1 = new Pelicula(1,"Thor", 21, 800, 180);
const pelicula2 = new Pelicula(2,"Minions", 18, 600, 275);
const pelicula3 = new Pelicula(3,"Elvis", 22, 700, 211);
const pelicula4 = new Pelicula(4,"Jurassic World", 17, 500, 219);

const peliculas = [pelicula1, pelicula2, pelicula3, pelicula4];


const divPeliculas = document.getElementById ("peliculas")

peliculas.forEach(pelicula => {
    divPeliculas.innerHTML += `
    <div class="card peliculas" id="peliculas${pelicula.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> Pelicula: ${pelicula.nombre}</h5>
                <p class="card-text"> Horario: ${pelicula.horario} hrs </p>
                <p class="card-text"> Precio: ${pelicula.precio}</p>
                <p class="card-text"> Disponibilidad: ${pelicula.disponibilidad}</p>
        </div>
        </div>   
    ` 
})

class User {
    constructor(username, horario, entradas) {
        this.username = username
        this.horario = horario
        this.entradas = entradas
    }
}

const users= []

const form = document.getElementById('idForm')
const divUsers = document.getElementById('divUsers')
const botonUsers = document.getElementById('botonUsers')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let username = document.getElementById('idUser').value 
    let horario = document.getElementById('idHorario').value  
    let entradas = document.getElementById('idEntradas').value 

    const user = new User (username, horario, entradas)
    users.push(user)
    console.log(users)
    form.reset()
})

botonUsers.addEventListener('click', () => {
    users.forEach(user => {
        divUsers.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${user.username}</h5>
                <p class="card-text">${user.horario} hrs</p>
                <p class="card-text">${user.entradas} Entradas</p>
            </div>
        </div>
        `
    })
})


