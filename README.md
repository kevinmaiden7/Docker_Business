# Ingeniería Web: Contenedores
## Angular, Node.js, MongoDB, Docker

Los contenedores son unidades de software que empaquetan código y todas sus dependencias. Estos permiten ejecutar imágenes, las cuales son paquetes de software independientes.
Los contenedores son la evolución de las máquinas virtuales, y a diferencia de estas,se caracterizan por ser mucho más livianos.
Los contenedores se usan para ejecutar aplicaciones de forma rápida y confiable en diferentes entornos informáticos; son importantes, además, porque ofrecen excelentes ventajas: son ligeros, son portables, permiten ser reusados, ofrecen un rápido despliegue y un uso eficiente de recursos.

## API Students
La ruta de la API Students es `/student`

El modelo para un registro de estudiante es el siguiente:
{   
    name: {
        type: String
    },
    surename: {
        type: String
    },
    level: {
        type: Number
    },
    average_grade: {
        type: Number
    }
}

### Endpoints

### GET

`/student` --> Entrega todos los registros de la colección students.

`/student/{id}` --> Entrega un registro específico de estudiante por id.

`/student/delete/{id}` --> Se elimina un registro específico de estudiante por id.

### POST

`/student/add` --> Se crea un nuevo registro de estudiante.

`/student/update/{id}` --> Se modifica un registro de estudiante por id.
