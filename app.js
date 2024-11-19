// const curso = prompt("Elige el ID del curso que deseas tomar");
// console.log(curso);

// const personas = parseInt(prompt("¿Cuántas personas tomarán el curso?"));
// console.log(personas);

function cuentaCurso(costoCurso, costoPersona){
    precioFinal = costoCurso * costoPersona
    return precioFinal
}


function cursoSolicitado(){
    const curso = parseInt(prompt("Elige el ID del curso que deseas tomar, solo selecciona un curso, posteriormente podrás añadir más"));
    console.log(curso);
    if (!isNaN(curso) && (curso <= 9) && (curso >= 1)) {
        if((curso == 1) || (curso == 4) || (curso == 7)){
            precioCurso = 450;
        } else {
            precioCurso = 300;
        }
        alert(`El precio del curso seleccionado es de $${precioCurso}`)
    } else {
        alert("Ingresa un ID correcto")
    }
}


 function personasSolicitadas (){
     const personas = parseInt(prompt("¿Cuántas personas tomarán el curso? (Máximo 30 personas por curso)"));
     console.log(personas)
     if (!isNaN(personas) && (personas <= 30) && (personas >= 1)) {
         alert(`El número de personas a tomar el curso son ${personas}`)
         if (personas >=30) {
             alert("El número máximo de personas por grupo es de 30");
         } 
     } else {
         alert("Ingresa un número válido de personas");
     }
 }

 function cuentaPrevia (personas, precioCurso){
    console.log(personas);
    console.log(precioCurso);
    let cuenta = parseInt((personas*precioCurso));
    alert(`Tu cuenta es de ${cuenta}`);
    }

let totalDeCursos = 0;
let agregar = confirm("¿Quires añadir más cursos?");

while(agregar){
    cursoSolicitado();
    personasSolicitadas();
    cuentaPrevia();    
    agregar = confirm("¿Quires añadir más cursos?")
}
/* cursoSolicitado();
personasSolicitadas();
cuentaPrevia();  */

