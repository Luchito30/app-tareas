const fs = require("fs");
const path = require("path");
const process = require("process");
const moduloTareas = require("./modules/funcionesDeTareas");

const comando = process.argv[2];
let id;
let titulo;
let estado;

switch (comando) {
    case "listar":
    moduloTareas.mostarLista();
        break;
    case "tarea":
    id = +process.argv[3];
    console.log(moduloTareas.mostarTarea(id));
        break;
    case "crear":
    titulo = process.argv[3];
    console.log(moduloTareas.agregarTarea(titulo));
        break;
    case "editar":
    id =  +process.argv[3];
    titulo = process.argv[4];
    moduloTareas.editarTarea(id,titulo);
        break;
    case "pendiente":
    id = +process.argv[3];
    console.log(moduloTareas.pendienteTarea(id));
        break;        
    case "enprogreso":
    id = +process.argv[3];
    console.log(moduloTareas.pregresoTarea(id));
        break;
    case "terminada":
    id = +process.argv[3];
    console.log(moduloTareas.terminadaTarea(id));
        break;
    case "eliminar":
    id = +process.argv[3]
    console.log(moduloTareas.eliminarTarea(id));
        break;
    case "filtrar":
    estado = process.argv[3];
    console.log(moduloTareas.filtrarPorEstado(estado))   
        break;   
    case "cantidadtareas":
    console.log("\n\nLa cantidad de tareas son: "+ moduloTareas.cantidadTareas() + "\n\n"); 
        break;
    case "portada":
    moduloTareas.portadaTarea();
        break;
    case "indice":
    moduloTareas.indiceTarea();  
        break;      
    case "ayuda":
    moduloTareas.ayudaTarea();
        break;
    case "buscar":
        key = process.argv[3]
        console.log(moduloTareas.buscarTarea(key))
        break;
    case undefined:
    console.log("\n\nAtención! : ¡Tienes que pasar una acción!\n\n");
        break;
    default:
        console.log("\n\n¡No entiendo qué quieres hacer!\n\n");
}