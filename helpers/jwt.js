const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = {
            uid
        }

        jwt.sign(
            //Lo que quiro guardar
            payload,
            //La palabra secreta
            process.env.JWT_KEY,
            //Info adicional
            { expiresIn: '28h' },
            //Error o todo sale bien
            (err, token) => {
                if (err) {
                    //No se pudo crear el token
                    reject('No se puedo generar el JWT')
                } else {
                    //Tenemos token
                    resolve(token);
                }
            }

        )
    }
    )
}

module.exports = {
    generarJWT
}