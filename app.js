const DATA_CASAS = "/inmobiliaria.json";

const mostrarResultados = document.getElementsByClassName("casas-contenedor")[0];

fetch(DATA_CASAS)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar.');
        }
        return response.json();
    })
    .then((data) => {
        const casas = data.casas;
        let content = '<h1 class="titulo">INMOBILIARIA JAP</h1>'; 

        casas.forEach((casa) => {
            content += `
                <div class="casa"> 
                    <h2 class="direccion">${casa.direccion}</h2>
                    <h2 class="barrio">Barrio: ${casa.barrio}</h2>
                    <h2 class="precio">Precio: ${casa["precio alquiler"]}</h2>
                    <h2 class="habitaciones">Habitaciones: ${casa.habitaciones}</h2>
                    <img class="img" src='${casa.img}'></img>
                </div>`;
        });
        mostrarResultados.innerHTML = content;

    })
    .catch((error) => {
        console.error(error);
    });
