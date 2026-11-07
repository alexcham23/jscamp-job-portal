import {useFilter} from "../hooks/useFilter";
import JobListings from "../componets/jobListings";
import Pagination from "../componets/pagination/pagination";
import SearchFormSection from "../componets/searchFormSection";
import style from "./css/Search.module.css";

const Search = () => {
  const {
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
  } = useFilter();

  const title = loading
    ? "Cargando..."
    : `Resultados de la búsqueda: ${total} ,pagina ${currentPage} - DevJobs`;
  return (
    <main>
      <title>{title}</title>
      <meta name="description" content="Explora miles de oportunidades laborales en el sector tecnológico. Encuentra tu próximo empleo en DevJobsGT." />
      <SearchFormSection
        initialText={textToFilter}
        initialFilters={filters}
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />
      <section className={style.searchResults} >
        <h2 style={{ textAlign: "center" }}>Resultados de la búsqueda</h2>
        {loading ? <p>Cargando empleos...</p> : <JobListings jobs={jobs} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
};

export default Search;
