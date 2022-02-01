import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../context/firebase';

const useAuthListener = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listner = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // we have a user, therfore we can store the user in the localStorage
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // we don't have a authUser, therfore clear the localStorage
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listner();
  }, [firebase]);

  return { user };
};

export default useAuthListener;
