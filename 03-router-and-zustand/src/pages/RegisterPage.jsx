import { useId } from 'react'
import { useNavigate } from 'react-router'
import styles from './css/Auth.module.css'
import useAuthStore  from '../store/authStore'

const Register=() => {
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()

    const navigate = useNavigate()
    const { login } = useAuthStore()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get(nameId)
        const email = formData.get(emailId)
        const password = formData.get(passwordId)

        if (name && email && password) {
            login()
            navigate('/search')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Crear Cuenta</h1>
                <p className={styles.subtitle}>
                    Registrate para aplicar a ofertas de trabajo.
                </p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor={nameId} className={styles.label}>
                            Nombre Completo
                        </label>
                        <input 
                        id={nameId}
                        name={nameId}
                        type="text"
                        className={styles.input}
                        placeholder="Juan Perez"
                        required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor={emailId} className={styles.label}>
                            Correo Electrónico
                        </label>
                        <input 
                        id={emailId}
                        name={emailId}
                        type="email"
                        className={styles.input}
                        placeholder="juan@example.com"
                        required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor={passwordId} className={styles.label}>
                            Contraseña
                        </label>
                        <input 
                        id={passwordId}
                        name={passwordId}
                        type="password"
                        className={styles.input}
                        placeholder="••••••••"
                        required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        crear cuenta
                    </button>
                </form>
                <p className={styles.footer}>
                    ¿Ya tienes una cuenta?{' '}
                    <a href="/login" className={styles.link}>
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    )
}


export default Register