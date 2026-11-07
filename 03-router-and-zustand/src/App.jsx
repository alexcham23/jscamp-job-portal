import {lazy, Suspense} from 'react';
import {Routes,Route } from 'react-router';
// components
import Header  from './componets/header';
import Footer from './componets/footer';

//pages
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const SearchPage = lazy(() => import('./pages/SearchPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/404.jsx'));
const JobDetail = lazy(() => import('./pages/Detail.jsx'));


function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Cargando página...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
