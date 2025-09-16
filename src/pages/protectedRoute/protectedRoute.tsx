import { Navigate, useLocation } from 'react-router-dom';
import DataLoader from '@shared/ui/DataLoader/DataLoader';
import { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from '@app/store/store';
import { selectIsUserAuth, selectUser } from '@entities';
import { selectAuthChecked } from '@entities/User/model/selectors';
type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactElement;
};

export const ProtectedRoute = ({
  onlyUnAuth = false,
  children
}: ProtectedRouteProps) => {
  const isAuthChecked = true;
  const user = useSelector(selectUser);
  const location = useLocation();

  if (!isAuthChecked) {
    return <DataLoader />;
  }

  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate replace to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return (
      <Navigate to='/register' replace state={{ from: location.pathname }} />
    );
  }

  return children;
};
