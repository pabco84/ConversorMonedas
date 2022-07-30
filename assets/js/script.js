const moneda = document.querySelector("#selector");
const cantidad = document.querySelector("#ingreso");
const boton = document.querySelector("#boton");
const paginapieuro = "https://mindicador.cl/api/euro"
const paginapiuf = "https://mindicador.cl/api/uf"
console.log(cantidad.value);
console.log(moneda.value);

async function Cambios() {
/*     try{ */
    const res = await fetch(paginapi);
    cambios = await res.json();
    cambios = await cambios.serie
    cambios.splice(10, (cambios.length - 10))
    ultimo = cambios[0].valor
    console.log(cambios);
    console.log(ultimo);
    return cambios;        
/* } */
/* catch(){
    alert("Error al actualizar DOM");
} */
}

boton.addEventListener("click", () =>{
if (cantidad.value <=0){
    alert("ingrese una cantidad mayor que 0");
}
else{
    if (moneda.value === "dolar") {
    const paginapidolar = "https://mindicador.cl/api/dolar";
        paginapi = paginapidolar;
        Cambios();
        resultado = (cantidad.value)/ultimo;
        console.log(resultado);
        resultado.innerHTML = resultado;
    }
    else{}
    }

/*     console.log(cambios); */



}
)