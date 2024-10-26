import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../../layout/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const SuperheroDetailsPage = lazy(() => import('../../pages/SuperheroDetailsPage/SuperheroDetailsPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="superheroes/:superheroId" element={<SuperheroDetailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
