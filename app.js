const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/eddy';

mongoose.connect(url_db)
.then(() => {
    console.log('conexion exitosa')
})
.catch((err) =>{
    console.log('no jalo')
})

const esquemaAlumnos = new mongoose.Schema(
    {
        name: {
            type:String
        },
        apepat: {
            type:String
        },
        apemat: {
            type:String
        },
        telnumber: {
            type:Number
        },
        fechanac: {
            type:Date
        },


    }

)

const alumnos =new mongoose.model('tabla de registro de alumnos', esquemaAlumnos)

alumnos.create(
    {
        name:'eduardo',
        apepat: 'rocha',
        apemat: 'ovalle',
        telnumbre: 449387566,
        fechanac: new Date(2003, 8, 14)

    }
)