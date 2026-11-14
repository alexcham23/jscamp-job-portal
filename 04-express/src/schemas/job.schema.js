import {z} from 'zod';

const jobSchema = z.object({
    titulo: z.string()
        .min(3, { message: 'Titulo debe tener al menos 3 caracter' })
        .max(100, { message: 'El titulo no puede exceder los 100 caracteres' }),
    empresa:z.string(),
    ubicacion:z.string(),
    descripcion:z.string().optional(),
    data: z.object({
        technology:z.array(z.string()),
        modalidad:z.enum(['presencial', 'remoto', 'híbrido'], { message: 'Modalidad debe ser Presencial, Remoto o Híbrido' }),
        nivel:z.string(),
    })
});

/**
 * Valida un objeto de trabajo
 * @param {*} input 
 * @returns 
 */
const validateJob = (input)=>{
    return jobSchema.safeParse(input)
}

/**
 * Valida parcialmente un objeto de trabajo
 * @param {*} input 
 * @returns 
 */

const validatePartialJob = (input)=>{
    return jobSchema.partial().safeParse(input)
}

export {validateJob, validatePartialJob, jobSchema}