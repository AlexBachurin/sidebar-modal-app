import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
const Sidebar = () => {
    return (
        <aside className="sidebar show-sidebar">
            <div className="sidebar-header">
                <img src="" alt="logo" className="logo" />
                <button className="close-btn">
                    <AiOutlineClose />
                </button>


            </div>
            <ul className="links">
                <li><a href="#">home</a></li>
                <li><a href="#">etc</a></li>
            </ul>
            <ul className="social-icons">
                <li><a href="#">twitter</a></li>

            </ul>
        </aside>
    )
}

export default Sidebar
