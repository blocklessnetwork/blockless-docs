import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Help } from 'pages/Help';
import SwitchRouterToTop from './components/SwitchRouterToTop';
import { ContentWrapper } from 'pages/Documentation/components/ContentWrapper';
import { ConceptsReference } from 'pages/ConceptsReference';
import { docsRoutes } from 'utils/constants/documentstion';
import { conceptsRoutes } from 'utils/constants/concepts';
import { referenceRoutes } from 'utils/constants/reference';

const App = () => {
  // Redirect all requests to the base name blog
  if (!window.location.pathname.startsWith('/docs')) {
    window.history.replaceState(
      '',
      '',
      '/docs' + window.location.pathname
    )
  }

  return (
    <BrowserRouter basename='/docs'>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Help />} />
            {Object.values(docsRoutes).map((route, i) => (
              <Route key={i} path={route} element={<ContentWrapper />} />
            ))}
            {Object.values(conceptsRoutes).map((route, i) => (
              <Route key={i} path={route} element={<ConceptsReference />} />
            ))}
            {Object.values(referenceRoutes).map((route, i) => (
              <Route key={i} path={route} element={<ConceptsReference />} />
            ))}
            <Route path="/docs/functions" element={<ContentWrapper />} />
          </Routes>
        </main>
        <Footer />
        <SwitchRouterToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
