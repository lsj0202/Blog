import { useEffect, useState } from 'react';
import { app } from './firebase';
import Router from 'components/Router';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // css 작성방법
import Init from 'components/Init';
import { useRecoilState } from 'recoil';
import { userInfo } from 'api/recoil';

const App = () => {
  const auth = getAuth(app);

  const [user, setUser] = useRecoilState<User | null>(userInfo);

  console.log('유저', user);

  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(user);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Init />}
    </>
  );
};

export default App;
