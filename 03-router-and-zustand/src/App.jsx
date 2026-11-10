import {lazy, Suspense} from 'react';
import {Routes,Route } from 'react-router';
// components
import Header  from './componets/Header.jsx';
import Footer from './componets/Footer.jsx';
import ProtectedRoute from './componets/ProtectedRoute';

//pages
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const SearchPage = lazy(() => import('./pages/SearchPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/404.jsx'));
const JobDetail = lazy(() => import('./pages/Detail.jsx'));
const ProfilePage = lazy(() => import('./pages/ProfilePage.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/RegisterPage.jsx'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Cargando página...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={
            <ProtectedRoute redirectTo="/login">
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
