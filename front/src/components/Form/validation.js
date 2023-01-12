export default function validate(userData){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPwd =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/i;

    const errors={}

    if (!userData.username){
        errors.username = 'no puede estar en blanco';
        console.log("username en blanco")
    } else if (!regexEmail.test(userData.username)) {
        errors.username = 'Debe ser un correo electrónico';
        console.log("no pasa regex mail")
    } else if (userData.username.length>35){
        errors.username = 'Debe tener menos de 35 caracteres';
        console.log("tiene mas de 35 caracteres")
    } else {
        errors.username="";
        console.log("ahora si regexmail")
    }

    if(!regexPwd.test(userData.password)) {
        errors.password = `la contraseña tiene que tener al menos un número\n
        y una longitud entre 6 y 10 caracteres.`
        console.log("no pasa regpw")
    } else {
        errors.password="";
        console.log("ahora si regexpw")
    }

    return errors;

}