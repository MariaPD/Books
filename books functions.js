var data;

window.onload = () => obtenerLibros()

const obtenerLibros = () => fetch("https://api.myjson.com/bins/zyv02", {
  method: "GET",
}).then(function(response){
  if(response.ok){
    return response.json();
  }
  throw new Error(response.statusText);
}).then(function(json){
  data = json.books
  crearTarjeta(data)
/*  crearListaLibros(data)
  crearListaPortadas(data)*/
  /*buscarLibros(data)*/
  console.log(data);
}).catch(function(error){
  console.log("Request failed:" + error.message);
});


function crearTarjeta(tarjeta){
  
  var lista = tarjeta.map(function(libros){
    return "<div class='flip-card'>" +
      "<div class='flip-card-inner'>" +
        "<div class='flip-card-front'>" + "<img src=" + libros.cover + "/>" +
        "</div>" +
        "<div class='flip-card-back'>" + 
    "<p>" + libros.title + "</p>" + "<p>" + libros.description + "</p>" +
        "</div>" +
      "</div>" +
    "</div>"
  })  
  document.getElementById("card").innerHTML = lista;
}

/*function crearListaLibros(lista)  {
    
  var listaLibros = lista
  
  document.getElementById("books").innerHTML = listaLibros.map(libros => "<p>" + libros.title + "</p>" + "<p>" + libros.description + "</p>")
}

function crearListaPortadas(lista) {
  
  var listaPortadas = lista
  
  document.getElementById("covers").innerHTML = listaPortadas.map(portadas => "<img src=" + portadas.cover + "/>")
}*/

function buscarLibros(libros){
  
  var input = document.getElementById("buscador").value
  
  var busqueda = libros.filter(libro => libro.title.toLowerCase().includes(input.toLowerCase()));
  
  console.log("busqueda", busqueda);
  
  crearTarjeta(busqueda);
 
}