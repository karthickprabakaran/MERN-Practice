import React from 'react';
import { createContext, useContext } from 'react';

const authContext = createContext();

function ContextProvider({children}) {
const [user,setUser] = useState(null);

  return (
    
    <authContext.Provider value={{user}}>
        {children}
    </authContext.Provider>
  )
}

export const useAuth = ()=> useContext(authContext);

export default ContextProvider
