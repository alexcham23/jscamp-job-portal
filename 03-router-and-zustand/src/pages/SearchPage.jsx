import { useState } from "react";

import {useFilter} from "../hooks/useFilter";
import JobListings from "../componets/jobListings";
import Pagination from "../componets/pagination/pagination";
import SearchFormSection from "../componets/searchFormSection";

const Search = () => {
  const {
    loading,
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
    : `Resultados de la búsqueda: ${total} ,pagina ${currentPage}`;
  return (
    <main>
      <h1>{title}</h1>
      <meta name="description" content="Explora miles de oportunidades laborales en el sector tecnológico. Encuentra tu próximo empleo en DevJobs." />
      <SearchFormSection
        initialText={textToFilter}
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />
      <section>
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
