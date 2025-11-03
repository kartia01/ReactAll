import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

// function UserContext02() {
//   return (
//     <div>UserContext02</div>
//   )
// }

// export default UserContext02

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      setUser(data);
    };
    fetchData();
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
