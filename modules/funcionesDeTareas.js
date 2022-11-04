const fs = require("fs");
const path = require("path");

const moduloTareas = {
    archivo:"tareas.json",
    archivo2:"portada.json",
    archivo3:"indice.json",
    archivo4:"ayuda.json",
    leerJSON : function(){
        const tareasJson = fs.readFileSync(path.join(__dirname,"..","data",this.archivo),"utf-8");
        const tareasParceado = JSON.parse(tareasJson);
        return tareasParceado;
    },
    guardarJSON : function(ruta){
        fs.writeFileSync(path.join(__dirname,"..","data",this.archivo),JSON.stringify(ruta,null,3),"utf-8");
    },
    horaTarea : function(){
        let fechaAcutual = new Date();
            let dia = fechaAcutual.getDate();
            let mes = fechaAcutual.getMonth();
            let anio = fechaAcutual.getFullYear();
            let hora = fechaAcutual.getHours();
            let minutos = fechaAcutual.getMinutes();
            let seg = fechaAcutual.getSeconds();

            let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

       return "Fecha y hora: " + dia + " de " + meses[mes] + " del " + anio + " a las " + hora+":"+minutos+":"+seg
    
    },
    mostarLista: function(){
        let arrayTareas = moduloTareas.leerJSON();

            console.log("\n\nLa Lista de tus Tareas: ");
        
            arrayTareas.forEach((tareas,indice) => {
            console.log(`\n${indice + 1}- Titulo: ${tareas.titulo}\n   Estado: ${tareas.estado}\n`);
        });
    },
    mostarTarea : function(id){
        if(isNaN(id)){
            return "\n\nAtención!: ¡Se debe ingresar un ID valido!\n\n";
        };

       id = Math.floor(id);
        const tareas = this.leerJSON()
        
       const tarea = tareas.find(tarea =>{
        return tarea.id === id
       })
        return tarea ? `\n\nInformacion de la Tarea:\n\n- ID: ${tarea.id}\n- Titulo: ${tarea.titulo}\n- Estado: ${tarea.estado}\n\n` : "\n\nAtención!: ¡No hay tareas para mostar con el ID: " + id + "!\n\n"
       },
    agregarTarea : function(titulo){
        let validacion = !titulo ? "\nAtención!: ¡Debes ingresar la Tarea a crear!\n" : false
        
        if(validacion){
        return validacion;
        }

        const tareas = this.leerJSON();

        let nuevoID = tareas[tareas.length - 1].id

        let nuevaTarea = {
            id: nuevoID + 1,
            titulo: titulo.trim(),
            estado: "pendiente"
        }
        tareas.push(nuevaTarea)

        this.guardarJSON(tareas)
        console.log("\n¡Tarea creada con exito!\n\n Información de la tarea creada:\n\n ");
        return `- ID: ${nuevaTarea.id}\n- Tarea: ${nuevaTarea.titulo}\n- Estado: pendiente\n`;
    },
    editarTarea : function(id,titulo){
        
        let validacion = !id ? "\n\nAtención!: ¡Debes ingresar un ID para editar la tarea!\n\n" : false
        
            if(validacion){
                console.log(validacion);
            return validacion;
            }
            
        let tareas = this.leerJSON();
        
        let tareasModificadas = tareas.map(tarea =>{
            if(tarea.id === id){
                let tareaModificada = {
                    id : tarea.id,
                    titulo : titulo ? titulo : tarea.titulo,
                    estado : tarea.estado
                }
                console.log("\n\nLa Tarea antes que se modifique es :\n\n"); 
                console.log(`${tarea.id}- Titulo: ${tarea.titulo}\n   Estado: ${tarea.estado}\n\n¡Se modifico con Exito!\n\n`);
                return tareaModificada;
            }
            return tarea;
        })
        this.guardarJSON(tareasModificadas);
        return tareasModificadas;
    },
    pendienteTarea : function(id){
        let validacion = !id ? "\nAtención!: ¡Debes ingresar el ID de la tarea que quieres pasar el estado pendiente!\n" : false
        
        if(validacion){
        return validacion;
        }

        const tareas = this.leerJSON();

        let tareasModificadas = tareas.map(tarea =>{
            if(tarea.id === id){
                let tareaModificada = {
                    id : tarea.id,
                    titulo : tarea.titulo,
                    estado : "pendiente"
                }
                console.log("\n\nLa Tarea antes que se modifique es :\n\n"); 
                console.log(`${tarea.id}- Titulo: ${tarea.titulo}\n   Estado: ${tarea.estado}\n\n¡Se modifico con Exito!\n\n`);
                return tareaModificada;
            }
            return tarea;
        })
        this.guardarJSON(tareasModificadas);
        return tareasModificadas;
    },
    pregresoTarea : function(id){
        let validacion = !id ? "\nAtención!: ¡Debes ingresar el ID de la tarea que quieres pasar el estado a en progreso!\n" : false
        
        if(validacion){
        return validacion;
        }

        const tareas = this.leerJSON();

        let tareasModificadas = tareas.map(tarea =>{
            if(tarea.id === id){
                let tareaModificada = {
                    id : tarea.id,
                    titulo : tarea.titulo,
                    estado : "en progreso"
                }
                console.log("\n\nLa Tarea antes que se modifique es :\n\n"); 
                console.log(`${tarea.id}- Titulo: ${tarea.titulo}\n   Estado: ${tarea.estado}\n\n¡Se modifico con Exito!\n\n`);
                return tareaModificada;
            }
            return tarea;
        })
        this.guardarJSON(tareasModificadas);
        return tareasModificadas;
    },
    terminadaTarea : function(id){
    let validacion = !id ? "\nAtención!: ¡Debes ingresar el ID de la tarea que quieres pasar el estado a terminada!\n" : false
        
        if(validacion){
        return validacion;
        }

        const tareas = this.leerJSON();

        let tareasModificadas = tareas.map(tarea =>{
            if(tarea.id === id){
                let tareaModificada = {
                    id : tarea.id,
                    titulo : tarea.titulo,
                    estado : "terminada"
                }
                console.log("\n\nLa Tarea antes que se modifique es :\n\n"); 
                console.log(`${tarea.id}- Titulo: ${tarea.titulo}\n   Estado: ${tarea.estado}\n\n¡Se modifico con Exito!\n\n`);
                return tareaModificada;
            }
            return tarea;
        })
        this.guardarJSON(tareasModificadas);
        return tareasModificadas;
    },
    portadaTarea : function(){
        const portadaJson = fs.readFileSync(path.join(__dirname,"..","data",this.archivo2),"utf-8");
        const portadaParceado = JSON.parse(portadaJson);
        console.log("\n\nInformacion de la Aplicacion:\n");
        console.log(`- Titulo: ${portadaParceado.Titulo}\n- Version: ${portadaParceado.Version}\n- Tipo: ${portadaParceado.Tipo}\n- Comandos: ${portadaParceado.Comandos}\n- Creador: ${portadaParceado.Creador}\n- Profesores: ${portadaParceado.Profesores}\n\n`);
        
        return portadaParceado;
    },
    indiceTarea : function(){
        const indiceJson = fs.readFileSync(path.join(__dirname,"..","data",this.archivo3),"utf-8");
        const indiceParceado = JSON.parse(indiceJson);
        console.log("\n\nPara poder usar la App de Tareas se tiene los siguientes Comandos:\n");
        console.log(`- Indice: ${indiceParceado.Indice}\n- Portada: ${indiceParceado.Portada}\n- Listar: ${indiceParceado.Listar}\n- Ayuda: ${indiceParceado.Ayuda}\n- Tarea: ${indiceParceado.Tarea}\n- Crear: ${indiceParceado.Crear}\n- Editar: ${indiceParceado.Editar}\n- Pendiente: ${indiceParceado.Pendiente}\n- Enprogreso: ${indiceParceado.Enprogreso}\n- Terminada: ${indiceParceado.Terminada}\n- Eliminar: ${indiceParceado.Eliminar}\n- Buscar: ${indiceParceado.Buscar}\n- Filtrar: ${indiceParceado.Filtrar}\n- Cantidadtareas: ${indiceParceado.Cantidadtareas}\n\n`);
    
        return indiceParceado;
    },
    ayudaTarea : function(){
        const ayudaJson = fs.readFileSync(path.join(__dirname,"..","data",this.archivo4),"utf-8");
        const ayudaParceado = JSON.parse(ayudaJson);
        console.log(`\n\nPara realizar comandos, seguir los siguientes formatos\n-Parametros(a,b,c)\n`);
        console.log(`- Listar: ${ayudaParceado.listar}\n- Tarea: ${ayudaParceado.tarea}\n- Crear: ${ayudaParceado.crear}\n- Editar: ${ayudaParceado.editar}\n- Pendiente: ${ayudaParceado.pendiente}\n- Enprogreso: ${ayudaParceado.enprogreso}\n- Terminada: ${ayudaParceado.terminada}\n- Filtrar: ${ayudaParceado.filtrar}\n- Cantidadtareas: ${ayudaParceado.cantidadtareas}\n- Portada: ${ayudaParceado.portada}\n- Indice: ${ayudaParceado.indice}\n- Eliminar: ${ayudaParceado.eliminar}\n- Buscar: ${ayudaParceado.buscar}\n\n`)
        return ayudaParceado
    },
    eliminarTarea : function(id){
        if(!id){
            return "Atención!: ¡Se necesita el ID de la tarea a eliminar!"
        }

        let tareas = this.leerJSON();
        
        let tareasNoeliminadas = tareas.filter(tarea => tarea.id !== id);
        this.guardarJSON(tareasNoeliminadas);
        console.log("\n\nSe elimino la tarea\n\n- Las tareas quedan son las siguientes:\n");
        console.log(tareasNoeliminadas);
        return tareasNoeliminadas;

        },
        buscarTarea : function(key){
            if(!key){
                return "\nAtención!: Indique que quiere buscar\n\n"
            }
            
            const tareas = this.leerJSON();
            const fecha = this.horaTarea();
            const tareasFiltrados = tareas.filter(tarea => {
                return tarea.titulo.toLowerCase().includes(key.toLowerCase())
            });
            console.log("\nLa cantidad de resultados para la busqueda son: " + tareasFiltrados.length + "\n" + fecha)
            return tareasFiltrados.length ? tareasFiltrados :"\nAtención!: No resultados para " + key +"\n\n";
    
        },
        filtrarPorEstado:  function(estado){
            let validacion = !estado ? "\nAtención!: ¡Debes ingresar un estado para consultar las tareas!\n\nLos estados a consultar son:\n- pendiente\n- en progreso\n- terminada\n\n" : false
        
            if(validacion){
            return validacion;
            }
        const tareas = this.leerJSON();
        const fecha = this.horaTarea();
        
        let estadosFiltrados = tareas.filter(tarea => estado.toLowerCase() === tarea.estado);
        console.log("\nLa cantidad de tareas para el estado " + estado + " son: " + estadosFiltrados.length + "\n" + fecha + "\n")
        return  estadosFiltrados.length ? estadosFiltrados :"\n\nAtención!: No hay resultados para mostrar del estado " + estado + "\n\n";
        },
        cantidadTareas : function(){
            const tareas = this.leerJSON();
            const fecha = this.horaTarea();
            let cantidadTareas = tareas.length
            return "\n\nLa cantidad de tareas son: " + cantidadTareas + "\n" + fecha + "\n\n"
        }
}


module.exports =  moduloTareas;