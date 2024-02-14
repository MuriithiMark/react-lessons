import React from 'react'
import { createContext } from 'react'
import store from './store';

const StoreContext = createContext();

function StoreProvider({children}) {
  return (
    <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
  )
}

export { StoreContext }
export default StoreProvider