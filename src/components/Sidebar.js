import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { links, social } from '../data'
const Sidebar = () => {
    return (
        <aside className="sidebar show-sidebar">
            <div className="sidebar-header">
                <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1631669002/logo-horizontal-svg_jg4e3x.svg" alt="logo" className="logo" />
                <button className="close-btn">
                    <AiOutlineClose />
                </button>


            </div>
            <ul className="links">
                {/* display links from data */}
                {links.map(({ id, url, text, icon }) => {
                    return (
                        <li key={id}>
                            <a href={url}>{icon}{text}</a>
                        </li>
                    )
                })}

            </ul>
            <ul className="social-icons">
                {/* display social icons from data */}
                {social.map(({ id, url, icon }) => {
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}

            </ul>
        </aside>
    )
}

export default Sidebar
