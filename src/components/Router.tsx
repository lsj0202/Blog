import Profile from 'pages/profile';
import { useState } from 'react';

import Home from 'pages/home';
import Posts from 'pages/posts';
import Detail from 'pages/posts/detail';
import Edit from 'pages/posts/edit';
import New from 'pages/posts/new';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Login from 'pages/login';
import SignUp from 'pages/signup';

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    // firebase Auth가 인증되면 true로 변경해주는 로직 추가

    <>
      <Header />
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<Detail />} />
            <Route path='/posts/new' element={<New />} />
            <Route path='/posts/edit/:id' element={<Edit />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<Navigate replace to='/login' />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Router;
