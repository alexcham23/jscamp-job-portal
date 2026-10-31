import { state } from './config.js';

state.count++;
console.log(state);

const filterLocation = document.querySelector('#filter-location');
const filterTechnology = document.querySelector('#filter-technology');
const filterExperience = document.querySelector('#filter-experience-level');
const searchInput = document.querySelector('#empleos-search-input');
const mensaje = document.querySelector('#filter-selected-value');

const normalizeValue = (value) => value.toLowerCase().replace(/-level$/, '').replace('js', '');

function filterJobs() {
    const jobs = document.querySelectorAll('.job-listing-card');
    const location = filterLocation.value;
    const technology = normalizeValue(filterTechnology.value);
    const experience = normalizeValue(filterExperience.value);
    const search = searchInput.value.trim().toLowerCase();

    mensaje.textContent = location ? `Has seleccionado: ${location}` : '';

    jobs.forEach((job) => {
        const text = job.textContent.toLowerCase();
        const technologies = (job.dataset.technology || '').split(',').map(normalizeValue);
        const matchesLocation = !location || job.dataset.modalidad === location;
        const matchesTechnology = !technology || technologies.includes(technology);
        const matchesExperience = !experience || normalizeValue(job.dataset.nivel) === experience;
        const matchesSearch = !search || text.includes(search);

        job.classList.toggle(
            'is-hidden',
            !(matchesLocation && matchesTechnology && matchesExperience && matchesSearch)
        );
    });
}

[filterLocation, filterTechnology, filterExperience].forEach((filter) => {
    filter.addEventListener('change', filterJobs);
});
searchInput.addEventListener('input', filterJobs);
