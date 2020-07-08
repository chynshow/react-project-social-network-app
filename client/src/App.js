import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Alert from './components/Alert';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings';
import Users from './components/Users';
import Registration from './components/Registration';
import Login from './components/Login';
import Loader from './components/Common/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { initApp } from './redux/auth/authActions';

const App = () => {
  const { isinit, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(initApp());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isinit && loading ? (
        <Loader />
      ) : (
        <div className="l-grid">
          <Header />
          <Alert />
          <Navigation />
          <main className="l-main-content">
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/users" component={Users} />
          </main>
        </div>
      )}
    </>
  );
};

export default App;
