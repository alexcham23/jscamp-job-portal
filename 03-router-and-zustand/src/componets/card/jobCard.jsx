import { useState } from 'react';
import  Link  from '../link';
import style from './JobCard.module.css';

const JobCard = ({job}) => {  

    const JobApplyButton = ({jobId}) => {
        const [isApplied, setIsApplied] = useState(false);
        
        const handleApplyClick = () => {
            setIsApplied(true);
        };

        const buttonClasses = isApplied ? 'button-apply-job is-applied' : 'button-apply-job';
        const buttonText = isApplied ? 'Aplicado' : 'Aplicar';

        return (
            <button className={buttonClasses} onClick={handleApplyClick}>{buttonText}</button>
        );
    }


    return (
      <article
        className="job-listing-card"
        data-modalidad={job.data.modalidad}
        data-level={job.data.nivel}
        data-tecnology={job.data.tecnologia}
      >
        <div>
          <h3>
            <Link className={style.title} href={`/jobs/${job.id}`}>
              {job.titulo}
            </Link>
          </h3>
          <small>
            {job.empresa} | {job.ubicacion}
          </small>
          <p>{job.descripcion}</p>
        </div>
        <div className={style.action}>
          <Link href={`/jobs/${job.id}`} className={style.details}>
            Ver detalles
          </Link>
          <JobApplyButton jobId={job.id} />
        </div>
      </article>
    );
}

export default JobCard;