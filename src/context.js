import React, { useState, useContext, useRef } from 'react'

const AppContext = React.createContext();

//allways provide children! or we wont see anything on page, since AppProvider wrapping all our App
const AppProvider = ({ children }) => {
    //state for modal toggle
    const [isModalOpen, setIsModalOpen] = useState(false);
    //state for sidebar toggle
    const [showSidebar, setShowSidebar] = useState(false);
    //set ref for modal overaly
    const modalOverlayRef = useRef(null);
    // MODAL
    const openModalHandler = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    }
    //close modal on X click
    const closeModal = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
    }
    //close modal on outside of modal content click
    const closeModalOnOverlayClick = (e) => {
        //only invoke state change if we clicking on outside of modal content and
        //isModalOpen in true state
        if (e.target === modalOverlayRef.current && isModalOpen) {
            setIsModalOpen(false);
        }
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
        value={{ closeModalOnOverlayClick, modalOverlayRef, isModalOpen, showSidebar, openModalHandler, closeModal, openSidebarHandler, closeSidebar }}>{children}
    </AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };