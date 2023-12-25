import { app } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';
import { userInfo } from 'api/recoil';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

const Profile = () => {
  const onSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      toast.success('로그아웃 되었습니다.');
    } catch (error: any) {
      toast.error(error?.code);
    }
  };

  const userInformation = useRecoilValue(userInfo);

  return (
    <div className='profile__box'>
      <div className='flex__box-lg'>
        <div className='profile__image'></div>
        <div>
          <div className='profile__email'>{userInformation?.email}</div>
          <div className='profile__name'>{userInformation?.displayName || '사용자'}</div>
        </div>
      </div>
      <Link to='/' className='profile__logout'>
        로그아웃
      </Link>
    </div>
  );
};

export default Profile;
