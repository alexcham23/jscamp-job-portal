import {validateJob, validatePartialJob} from '../schemas/job.schema.js'

/**
 * Valida un objeto de trabajo
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns
 */
const validateCreate = (req, res, next) => {
    const result = validateJob(req.body)
    
    // Si la validación falla, respondemos con un error 400 y los mensajes de error
    if (!result.success) {
        return res.status(400).json({ error: 'Error de validación', details: result.error.issues })
    }
    // dejamos el body limpio y validado para que el controlador lo use
    req.body = result.data
    next()
}

/**
 * Valida parcialmente un objeto de trabajo
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns
 */

const validateUpdate = (req, res, next) => {
    const result = validatePartialJob(req.body)
    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message)})
    }
    req.body = result.data
    next()
}

export {validateCreate, validateUpdate}