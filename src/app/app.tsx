import {
  Home,
  ProfilePage,
  Modal,
  Login,
  Register,
  ProtectedRoute,
  NotFound404,
  Error500,
  Skill
} from '@pages';

import { ConfirmModal, Created, NeedRegister, Offered } from '@widgets';
import './styles/index.css';
import styles from './app.module.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header, Footer } from '@features';
import { TUser } from '@api';
import { userCardsThunk } from '@entities/UserCards';
import { skillsThunk } from '@entities/Skills';
import { useSelector, useDispatch } from './store/store';
import { selectUser } from '@entities';
import { setIsAuthChecked } from '@entities/User/store';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const loading = useSelector(getLoading);
  //const error = useSelector(getError);

  const location = useLocation();
  const background = location.state && location.state.background;
  const userData = useSelector(selectUser);
  const isLoggedIn = false;
  const isRegisterRoute = location.pathname === '/register';
  useEffect(() => {
    dispatch(userCardsThunk.getUserCards());
    dispatch(skillsThunk.getSkills());

    if (!localStorage.getItem('email')) {
      dispatch(setIsAuthChecked(true));
    }
  }, []);

  return (
    <div className={styles.app}>
      <Header
        isLoggedIn={isLoggedIn}
        data={userData?.userCard}
        isFormOpen={isRegisterRoute}
        onCloseForm={() => {
          navigate('/');
        }}
      />
      <div className={styles.main}>
        <Routes location={background || location}>
          <Route path='/' element={<Home />} />
          <Route
            path='/skill/exchenge'
            element={<Created onClose={() => navigate(-1)} />}
          />

          <Route path='/skill/:id' element={<Skill />} />
          <Route
            path='/profile'
            index
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/offered'
            element={<Offered onClose={() => navigate('/')} />}
          />

          <Route
            path='/register'
            element={
              <ProtectedRoute onlyUnAuth>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </div>
      <div className={styles.footer}>{!isRegisterRoute && <Footer />}</div>
    </div>
  );
};

export default App;
