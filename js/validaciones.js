export const validarCantidadCaracteres = (texto, min, max)=>{
    if(texto.length >= min && texto.length <= max){
        return true;
    }else{
        return false;
    }
}

// /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i