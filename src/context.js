import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

//allways provide children! or we wont see anything on page, since AppProvider wrapping all our App
const AppProvider = ({ children }) => {
    return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };