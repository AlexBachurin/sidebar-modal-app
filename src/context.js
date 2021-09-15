import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

//allways provide children! or we wont see anything on page, since AppProvider wrapping all our App
const AppProvider = ({ children }) => {
    //state for modal toggle
    const [isModalOpen, setIsModalOpen] = useState(false);
    //state for sidebar toggle
    const [showSidebar, setShowSidebar] = useState(false);

    // MODAL
    const openModalHandler = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    // SIDEBAR
    const openSidebarHandler = (e) => {
        e.preventDefault();
        setShowSidebar(true);
    }
    const closeSidebar = () => {
        setShowSidebar(false);
    }
    return <AppContext.Provider
        value={{ isModalOpen, showSidebar, openModalHandler, closeModal, openSidebarHandler, closeSidebar }}>{children}
    </AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };