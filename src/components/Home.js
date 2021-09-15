import React from 'react'
import { FaBars } from 'react-icons/fa'
const Home = () => {
    return (
        <main>
            <button className="sidebar-toggle">
                <FaBars />
            </button>
            <button className="btn">
                open modal
            </button>
        </main>


    )
}

export default Home

