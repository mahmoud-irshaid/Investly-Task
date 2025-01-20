import { useEffect, useState, Suspense, lazy } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Loader from './components/Loader';
import PageTitle from './components/PageTitle/PageTitle';
import DefaultLayout from './layout/DefaultLayout';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Projects = lazy(() => import('./pages/Projects/Projects'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        {' '}
        {/* Show loader while components are being lazy-loaded */}
        <Routes>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <>
                <PageTitle title="Dashboard" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <PageTitle title="Projects" />
                <Projects />
              </>
            }
          />
        </Routes>
      </Suspense>
    </DefaultLayout>
  );
}

export default App;
