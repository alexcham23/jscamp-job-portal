// components
import Header  from './componets/header';
import Footer from './componets/footer';
import Router from './componets/router';
//pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
      <Header />
      <Router path="/" component={HomePage} />
      <Router path="/search" component={SearchPage} />
      <Footer />
    </>
  )
}

export default App
