/***
 *  Entitidades de la aplicación 
 */

export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    data: JobData;
    content?: JobContent;
}

export interface JobData {
    technology: string[];
    modality: "remote" | "onsite" | "hybrid";
    level: "junior" | "mid" | "senior";
}

export interface JobContent {
    description: string;
    responsibilities: string;
    requirements: string;
    about: string;
}
/***
 *  DTO's de la aplicación
 */

// DTO para la creación de un nuevo trabajo sin el campo 'id'
export type CreateJobDTO = Omit<Job, 'id'>;

// DTO para la actualización de un trabajo existente, todos los campos son opcionales
export type UpdateJobDTO = Partial<CreateJobDTO>;

/***
 *  Filtros de la aplicación
 */

export interface JobFilters {
    tech?: string;
    modality?: JobData['modality'];
    level?: JobData['level'];
}

/***
 *  Respuestas de la aplicación
 */

export interface ApiError{
    message: string;
    errors?: unknown[];
}