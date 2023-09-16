import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='profile__box'>
      <div className='flex__box-lg'>
        <div className='profile__image'></div>
        <div>
          <div className='profile__email'>sangjin@gmail.com</div>
          <div className='profile__name'>유저</div>
        </div>
      </div>
      <Link to='/' className='profile__logout'>
        로그아웃
      </Link>
    </div>
  );
};

export default Profile;