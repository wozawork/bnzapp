import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userState, setUserState] = useState('');

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {props.children}
    </UserContext.Provider>
  );
};
