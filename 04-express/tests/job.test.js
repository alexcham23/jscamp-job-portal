
import {test, describe, before, after} from 'node:test'
import assert from 'node:assert'
import app from '../src/app.js'

let server
const port = 3456
const baseUrl = `http://localhost:${port}`

//  antes de todos los tests, levantamos el servidor
before(async () => {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => resolve())
        server.on('error', reject)
    })
})

// después de todos los tests, cerramos el servidor
after(async () => {
    return new Promise((resolve, reject) => {
        if (!server?.listening) return resolve()
        server.close((err) => {
            if (err) return reject(err)
            resolve()
        })
    })
})

describe('Get /jobs', () => {
    test('debe responder con 200 y un array de trabajos', async () => {
        const response = await fetch(`${baseUrl}/jobs`)
        assert.strictEqual(response.status, 200)

        const json = await response.json()
        assert.ok(Array.isArray(json.data), 'La respuesta debe contener un array de trabajos')
    })

    test('debe filtrar trabajos por tecnología', async () => {
        const tech= 'react'
        const response = await fetch(`${baseUrl}/jobs?technology=${tech}`)
        assert.strictEqual(response.status, 200)

        const json = await response.json()
        //console.log(json.data)
        assert.ok(
            // Verificar que todos los trabajos incluyan la tecnología especificada
            json.data.every(job => job.data.technology.includes(tech)),
            `Todos los trabajos deben incluir la tecnología ${tech}`
        )
    })

    test('POST /jobs', async () => {
        const response = await fetch(`${baseUrl}/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo: 'Desarrollador Web',
                empresa: 'Tech Solutions',
                ubicacion: 'Madrid, España',
                descripcion: 'Se busca desarrollador web con experiencia en React',
                data: {
                    technology: ['react', 'javascript'],
                    modalidad: 'remoto',
                    nivel: 'junior'
                }
            })
        })

        assert.strictEqual(response.status, 201)

        const json = await response.json()
        assert.ok(json.data, 'El trabajo creado debe estar presente en la respuesta')
    })
})