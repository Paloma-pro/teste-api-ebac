const Joi = require ('joi')

const usuariosSchema = Joi.object({
    quantidade: Joi.number(),
    usuarios: Joi.array().items({
        nomeUsuario: Joi.string(),        
        emailUsuario: Joi.string(),
        password: Joi.string(),
        administrador: Joi.string(),
        _idUsuario: Joi.string()
    })   
})

export default usuariosSchema;