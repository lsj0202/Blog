import Profile from 'pages/Profile';
import Home from 'pages/home';
import Posts from 'pages/posts';
import Detail from 'pages/posts/detail';
import Edit from 'pages/posts/edit';
import New from 'pages/posts/new';
import { Routes, Route, Navigate } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<Detail />} />
      <Route path='/posts/new' element={<New />} />
      <Route path='/posts/edit/:id' element={<Edit />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
};

export default Router;
