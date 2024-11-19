
const baseDeDatos = [
    {
        id:1,
        nombre: "Trabajos en alturas",
        costo: 450,
    },
    {
        id:2,
        nombre: "Equipo de Protección Personal",
        costo: 300,
    },
    {
        id:3,
        nombre: "Brigadas multifuncionales",
        costo: 300,
    },
    {
        id:4,
        nombre: "Trabajos en espacios confinados",
        costo: 450,
    },
    {
        id:5,
        nombre: "Brigadas de evacuación",
        costo: 300,
    },
    {
        id:6,
        nombre: "Brigadas de incendios",
        costo: 300,
    },
]

const listado = [

]

function curso (curso, precio) {
    this.curso = curso;
    this.precio = precio;
}

let costoFinal = 0

function añadir (){
    let cursoPedido = parseInt(prompt("Indica el ID del curso que quieres añadir"));
    let encontrarCurso = baseDeDatos.find(curso => curso.id === cursoPedido);
    console.log(encontrarCurso)

    if (encontrarCurso) {
        let nuevoCurso = new curso(encontrarCurso.nombre, encontrarCurso.costo);
        listado.push(nuevoCurso)
        alert(`Curso añadido: ${encontrarCurso.nombre} con un coste de $${encontrarCurso.costo}`)
        costoFinal += encontrarCurso.costo
        return listado
    } else {
        alert(`Curso no encontrado`);
    }
}



let agregar = confirm("¿Quieres añadir un curso?")

while(agregar){
    añadir(); 
    agregar = confirm("¿Quires añadir más cursos?")
}
alert(`El costo final es de $${costoFinal}`)
console.table(listado)
