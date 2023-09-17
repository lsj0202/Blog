import { useEffect, useState } from 'react';
import { app } from './firebase';
import Router from 'components/Router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // css 작성방법
import Init from 'components/Init';

const App = () => {
  const auth = getAuth(app);

  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  console.log('auth', isAuthenticated);

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
