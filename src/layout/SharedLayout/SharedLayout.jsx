import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '../../components/Loader/Loader';

import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={css.loaderBox}>
              <Loader size="20vw" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
