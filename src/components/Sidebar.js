import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { links, social } from '../data'
import { useGlobalContext } from '../context';
const Sidebar = () => {
    //get needed values from global context
    const { showSidebar, closeSidebar } = useGlobalContext();
    //add class if showSidebar in true state
    let clsName = 'sidebar';
    if (showSidebar) {
        clsName += ' show-sidebar'
    }
    return (
        <aside className={clsName}>
            <div className="sidebar-header">
                <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1631669002/logo-horizontal-svg_jg4e3x.svg" alt="logo" className="logo" />
                <button onClick={closeSidebar} className="close-btn">
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
