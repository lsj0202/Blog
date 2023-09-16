import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <Link to='/posts/new'>글쓰기</Link>
        <Link to='/posts'>게시글</Link>
        <Link to='/profile'>프로필</Link>
      </div>
      <div
        className='header__title'
        onClick={() => {
          navigate('/');
        }}
      >
        상진로그
      </div>
    </header>
  );
};

export default Header;
