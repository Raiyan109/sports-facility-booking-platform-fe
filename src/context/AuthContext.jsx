import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [mernAuth, setMernAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    // const data = localStorage.getItem("userId");
    const data = localStorage.getItem("auth");
    // console.log(data);
    if (data) {
      const parsedData = JSON.parse(data);
      console.log(parsedData.data);
      setMernAuth({
        ...mernAuth,
        user: parsedData.data,
        token: parsedData.token,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    mernAuth,
    setMernAuth,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
