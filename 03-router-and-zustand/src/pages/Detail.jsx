import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router';
import Link from '../componets/Link';
import markdown from 'snarkdown';
import style from './css/Detail.module.css';
import useAuthStore from '../store/authStore';
import useFavoritesStore from '../store/favoritesStore';



const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const html = markdown(jobId);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const JobSection = ({ title, content }) => {
    return (
      <section className={style.section}>
        <h2 className={style.sectionTitle}>{title}</h2>
        <div
          className={`${style.sectionContent} prose`}
          dangerouslySetInnerHTML={{ __html: markdown(content) }}
        />
      </section>

    )
  }

  const DetailPageBreadCrumb = ({job}) => {
    return (
      <div className={style.container}>
        <nav className={style.breadcrumb}>
          <Link 
            href="/search"  
            className={style.breadcrumbButton}
          >Empleos</Link>
          <span className={style.breadcrumbSeparator}>/</span>
          <span className={style.breadcrumbCurrent}>{job.titulo}</span>
        </nav>
      </div>
    )
  }

  const DetailPageHeader = ({job}) => {
    return (
      <>
        <header className={style.header}>
          <h1 className={style.title}>{job.titulo}</h1>
          <p className={style.meta}>{job.empresa} - {job.ubicacion}</p>
        </header>
        <div className={style.actionButtons}>
          <DetailApplyButton/>
          <DetailFavoriteButton jobId={job.id}/>
        </div>
      </>
    )
  }

  const DetailApplyButton = () => {
    const {isLoggedIn} = useAuthStore()
    return(
      <button disabled={!isLoggedIn} className={style.applyButton}>
        {isLoggedIn ? 'Aplicar ahora' : 'Inicia sesión para aplicar'}
      </button>
    )
  }

  const DetailFavoriteButton = ({jobId}) => {
    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const favorite = favorites.includes(jobId);

    return (
      <button
        type="button"
        className={`${style.favoriteButton} ${favorite ? style.favoriteButtonActive : ''}`}
        aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        aria-pressed={favorite}
        title={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        onClick={() => toggleFavorite(jobId)}
      >
        <span aria-hidden="true">{favorite ? '❤️' : '🤍'}</span>
      </button>
    )
  }

  useEffect(() => {
    const fetchJobDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`);
        if (!response.ok) {
          navigate('/not-found'); // Redirige a la página 404 si el trabajo no se encuentra
        }
        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetail();
  }, [jobId]);

  if (loading) {
    return (
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
        <div >
          <p>Loading...</p>
        </div>
      </div>
    );
  }
    
  if (error|| !job) {
    return (
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
        <div className={ style.error} >
          <h2 className={style.errorTitle}>
            Oferta de empleo no encontrada.
          </h2>
          <button 
          onClick={() => navigate('/')}
          className={style.errorButton}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }


  return (
    <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
      <DetailPageBreadCrumb job={job} />
      <DetailPageHeader job={job} />

      <JobSection title="Descripción del puesto" content={job.content.description}/>
      <JobSection title="Responsabilidades" content={job.content.responsibilities}/>
      <JobSection title="Requisitos" content={job.content.requirements}/>
      <JobSection title="Acerca de la empresa" content={job.content.about}/>
    </div>
  );
};

export default JobDetail;