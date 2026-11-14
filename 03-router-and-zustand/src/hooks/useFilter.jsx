import {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router';

const RESULTS_PER_PAGE = 4;

const useFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState(() => {
        return {
            technology: searchParams.get('technology') || '',
            location: searchParams.get('location') || '',
            experienceLevel: searchParams.get('level') || '',
        };
    });

    const [textToFilter, setTextToFilter] = useState(() => {
        return searchParams.get('text') || '';
    });

    const [currentPage, setCurrentPage] = useState(() => {
        return parseInt(searchParams.get('page')) || 1;
    });

    const [jobs, setJobs] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true)

        const params = new URLSearchParams()
        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('type', filters.location)
        if (filters.experienceLevel) params.append('level', filters.experienceLevel)

        const offset = (currentPage - 1) * RESULTS_PER_PAGE
        params.append('limit', RESULTS_PER_PAGE)
        params.append('offset', offset)

        const queryParams = params.toString()
      
        const response = await fetch(`http://localhost:1234/jobs?${queryParams}`)
        const json = await response.json()

        setJobs(json.data)
        setTotal(json.total)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
    }, [filters, textToFilter, currentPage]);

    useEffect(() => {

        setSearchParams(()=>{
            const params = new URLSearchParams()
            if (textToFilter) params.append('text', textToFilter)
            if (filters.technology) params.append('technology', filters.technology)
            if (filters.location) params.append('type', filters.location)
            if (filters.experienceLevel) params.append('level', filters.experienceLevel)
            if (currentPage > 1) params.append('page', currentPage)
    
            return params         
        })

    }, [filters, textToFilter, currentPage, setSearchParams]);


    const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleSearch = (filters) => {
        setFilters(filters);
        setCurrentPage(1);
    }

    const handleTextFilter=(newTextToFilter) => {
        setTextToFilter(newTextToFilter);
        setCurrentPage(1);
    }

    return {
        loading,
        filters,
        jobs,
        total,
        totalPages,
        textToFilter,
        currentPage,
        handleSearch,
        handleTextFilter,
        handlePageChange,
    }
}

export {useFilter};