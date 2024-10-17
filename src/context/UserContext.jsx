import { createContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          isLogin: true,
          userInfo: {
            email: user.email,
            photo: user.photoURL,
            name: user.displayName,
          },
        });
      } else {
        setUser({
          isLogin: false,
          userInfo: {},
        });
      }
      setLoading(false);
    });

    return subscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loading ? <Loader /> : children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
