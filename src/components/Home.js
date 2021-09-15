import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Home = () => {
    //get functions for buttons from global context
    const { openModalHandler, openSidebarHandler } = useGlobalContext();
    return (
        <main>
            <button onClick={openSidebarHandler} className="sidebar-toggle">
                <FaBars />
            </button>
            <button onClick={openModalHandler} className="btn">
                open modal
            </button>
        </main>


    )
}

export default Home

