const {response} = require('express');
const Usuario = require('../models/usuario');

const getUsuarios = async (req,res = response) =>{
    //{ok: true, msg: getUsuarios}

    const desde = Number(req.query.desde) || 0;

    const usuarios = await Usuario
    .find({_id:{ $ne: req.uid}}) //todos los usuarios menos el que tenga mi id
    .sort('-online')
    .skip(desde);
    //.limit(50);

    res.json({
        ok:true,
        usuarios
    })
}

module.exports = {
    getUsuarios
}