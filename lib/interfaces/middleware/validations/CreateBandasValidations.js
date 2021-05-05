function createBandaValidator(data){
    const {
        nombre,
        integrantes, 
        fecha_inicio, 
        fecha_separacion, 
        pais
    } = data;

    // Validaciones del campo nombre
    if(typeof nombre !== 'string'){
        throw new Error('El campo "NOMBRE" debe ser una cadena de texto');
    }
    
    if(nombre.length <= 0 || nombre === undefined || nombre === null){
        throw new Error('El campo "NOMBRE" es obligatorio');
    }

    if(nombre.length > 100){
        throw new Error('El campo "NOMBRE" debe tener menos de 100 caracteres');
    }

    // Validaciones del campo integrantes
    if(typeof integrantes !== 'number'){
        throw new Error('El campo "INTEGRANTES" debe ser numerico');
    }
    
    if(integrantes <= 0){
        throw new Error('La banda debe tener almenos un integrante');
    }

    if(integrantes === undefined || integrantes === null){
        throw new Error('El campo "INTEGRANTES" es obligatorio');
    }

    // Validaciones del campo fecha_inicio
    if(typeof fecha_inicio !== 'string'){
        throw new Error('El campo "FECHA_INICIO" debe ser una cadena de texto');
    }

    if(fecha_inicio === undefined || fecha_inicio === null){
        throw new Error('El campo "FECHA_INICIO" es obligatorio');
    }

    if(fecha_inicio === /^\d{4}([./-])\d{2}\1\d{2}$/){
        throw new Error('formato de fecha invalido, FORMATO: yyyy-mm-dd, Ejemplo: 2000-10-23');
    }

    // Validaciones del campo fecha_separacion
    if(typeof fecha_separacion !== 'string'){
        throw new Error('El campo "FECHA_SEPARACION" debe ser una cadena de texto');
    }

    if(fecha_separacion === /^\d{4}([./-])\d{2}\1\d{2}$/){
        throw new Error('formato de fecha invalido, FORMATO: yyyy-mm-dd, Ejemplo: 2000-10-23');
    }

        // Validaciones del campo pais
        if(typeof pais !== 'string'){
            throw new Error('El campo "PAIS" debe ser una cadena de texto');
        }
        
        if(pais.length <= 0 || pais === undefined || pais === null){
            throw new Error('El campo "PAIS" es obligatorio');
        }
    
        if(pais.length > 100){
            throw new Error('El campo "PAIS" debe tener menos de 100 caracteres');
        }
}


module.exports = {
    createBandaValidator,
}