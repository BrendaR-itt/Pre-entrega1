// ! SIMULADOR DE PRESUPUESTO PERSONAL
// *VARIABLES
let ingresoFijo = 0;
let totalGastos = 0;
let CantGastosFijos = 0;
let gastosFijos = [];
let gastosVariables = [];
let categoriaGastoFijo =[];
let categoriaGasto = [];

//! SOLICITUD DE INGRESOS FIJO
ingresoFijo = parseFloat(prompt("Añada sus ingresos totales(sin comas ni puntos)"));

if (ingresoFijo > 0 && !isNaN(ingresoFijo)) {
    if(confirm("¿Desea añadir un gasto?") == true){
        GastosFijos();
    }else{
        alert("Tienes un ingreso de " + ingresoFijo);
    }
}else{
    alert("Ingreso no válido");
}

//! FUNCIÓN PARA GESTIONAR GASTOS FIJOS
function GastosFijos(){
    if (confirm("¿Tiene gastos fijos?") == true){
        CantGastosFijos = parseInt(prompt("¿Cuantos gastos fijos tiene actualmente?"));
        if (isNaN(CantGastosFijos) || CantGastosFijos <= 0){
            alert("Ingreso no valido");
            return;
        }
        agregarGastosFijos();
    }else{
        agregarGastos();
    }
}
//!FUNCION PARA AÑADIR GASTOS FIJOS
function agregarGastosFijos(){
    for (let i = 0; i < CantGastosFijos; i++){
        let gasto = parseFloat(prompt("Agregue su gasto " + (i+1) +" fijo"));
        if (isNaN(gasto) || gasto <= 0){
            alert("Ingreso no válido");
            i--;
            continue;
        }
        let categoria = prompt("Ingrese la categoría del gasto fijo");
        gastosFijos.push(gasto);
        categoriaGastoFijo.push(categoria);
        totalGastos += gasto;
    }
    actualizarIngreso();
}

//!FUNCION DE GASTOS SUELTOS
function agregarGastos(){
    while (true) {
        let gasto = parseFloat(prompt("Añada su gasto"));
        if (isNaN(gasto) || gasto <= 0){
            alert("Ingreso no válido");
            continue;
        }
        let categoria = prompt("Ingrese la categoría");
        gastosVariables.push(gasto);
        categoriaGasto.push(categoria);
        totalGastos += gasto;
        ingresoFijo -= gasto;

        if (ingresoFijo <= 0){
            alert("Ya no tienes dinero, o tus gastos exceden tu dinero actual");
            break;
        }
        if (confirm("¿Desea añadir otro gasto variable?") == true){
            continue;
        }else{
            alert("Gracias por utilizar el programa :) Te quedan: "+ingresoFijo+". Gastaste: "+totalGastos);
            mostrarResumen();
            break;
        }
    }
}
// ! ACTUALIZAR INGRESO Y DECIDIR ACCIÓN
function actualizarIngreso(){
    ingresoFijo -= totalGastos;
    if(ingresoFijo <= 0){
        alert("Ya no tienes dinero, o tus gastos exceden tu dinero actual");
    }else{
        if(confirm("¿Desea añadir más gastos?")==true){
            alert("Te quedan: "+ingresoFijo);
            agregarGastos();
        }else{
            alert("Gracias por utilizar el programa :) Te quedan: "+ingresoFijo+". Gastaste: "+totalGastos);
            mostrarResumen();
        }
    }
}

//! MOSTRAR RESUMEN POR CONSOLA
function mostrarResumen(){
    console.log("Ingreso fijo:" + (ingresoFijo + totalGastos));
    console.log("Gastos fijos: " + gastosFijos);
    console.log("Categoría gastos fijos: " + categoriaGastoFijo);
    console.log("Gastos sueltos: " + gastosVariables);
    console.log("Categoría de gastos extra: "+categoriaGasto);
    console.log("Gastos totales: "+ totalGastos);
    console.log("Saldo final: "+ ingresoFijo);
}