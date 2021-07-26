/*
    path: api/login'
*/

const { Router, response } = require('express');
const { check } = require('express-validator');

const { crearUsuario, loginUsuario,renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.post('/new',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatoriro').not().isEmpty(),
        check('email', 'Ingrese un email válido').isEmail(),
        check('password', 'La clave es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearUsuario);

router.post('/',
    [
        check('email', 'El email es obligatoriro').not().isEmpty(),
        check('email', 'Ingrese un email válido').isEmail(),
        check('password', 'La clave es obligatoria').not().isEmpty(),
        validarCampos
    ],
    loginUsuario);


//validarJWT
router.get('/renew', [validarJWT], renewToken);

module.exports = router;