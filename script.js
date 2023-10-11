const input = document.querySelector("#buscar")
const button = document.querySelector("#boton")
const contenedor = document.querySelector("#card")

button.addEventListener('click', (e) => {
    e.preventDefault();
    informacion(input.value);
})

function informacion(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            crearInformacion(data);
        })
}

function crearInformacion(data) {
    const img = document.querySelector('#img')
    img.src = data.image;

    document.querySelector('#id').textContent = data.id
    document.querySelector('#titulo').textContent = data.title
    document.querySelector('#precio').textContent = data.price
    document.querySelector('#categoria').textContent = data.category
    document.querySelector('#descripcion').textContent = data.description
}