import styles from './css/ProfilePage.module.css';
import useAuthStore from '../store/authStore';

const ProfilePage = () => {
    const { logout } = useAuthStore();

    return (
      <main className={styles.profilePage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.avatar}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h1 className={styles.name}>Usuario Demo</h1>
            <p className={styles.email}>usuario@example.com</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Información Personal</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Nombre Completo</span>
                <span className={styles.infoValue}>Usuario Demo</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>usuario@example.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Teléfono</span>
                <span className={styles.infoValue}>+502 8945 6545</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Dirección</span>
                <span className={styles.infoValue}>
                  123 Calle Principal, Ciudad
                </span>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Experiencia</h2>
            <div className={styles.experienceItem}>
              <h3 className={styles.experienceTitle}>Desarrollador Frontend</h3>
              <p className={styles.experienceCompany}>
                Empresa XYZ • 2021 - Presente
              </p>
              <p className={styles.experienceDescription}>
                Desarrollo de aplicaciones web con React, TypeScript y Next.js.
              </p>
            </div>
            <div className={styles.experienceItem}>
              <h3 className={styles.experienceTitle}>Desarrollador Junior</h3>
              <p className={styles.experienceCompany}>
                Startup ABC • 2019 - 2021
              </p>
              <p className={styles.experienceDescription}>
                Mantenimiento y desarrollo de features en aplicaciones legacy.
              </p>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Habilidades</h2>
            <div className={styles.skills}>
              <h3 className={styles.skill}>React</h3>
              <p className={styles.skill}>TypeScript</p>
              <p className={styles.skill}>Next.js</p>
              <p className={styles.skill}>Node.js</p>
              <p className={styles.skill}>MongoDB</p>
              <p className={styles.skill}>Git</p>
              <p className={styles.skill}>Docker</p>
              <p className={styles.skill}>AWS</p>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.editButton}>Editar Perfil</button>
            <button className={styles.logoutButton} onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </main>
    );
}

export default ProfilePage