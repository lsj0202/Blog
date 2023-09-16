import { useState } from 'react';
import { app } from './firebase';
import Router from 'components/Router';
import { getAuth } from 'firebase/auth';

const App = () => {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  return <Router isAuthenticated={isAuthenticated} />;
};

export default App;
