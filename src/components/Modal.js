import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Modal = () => {
    //get needed values from global context
    const { closeModalOnOverlayClick, modalOverlayRef, isModalOpen, closeModal } = useGlobalContext();
    let clsName = 'modal-overlay';
    //add class if ismodalopen in true state
    if (isModalOpen) {
        clsName += ' show-modal'
    }
    return (
        <div onClick={closeModalOnOverlayClick} ref={modalOverlayRef} className={clsName}>
            <div className="modal-container">
                <h3>modal content</h3>
                <button onClick={closeModal} className="close-modal-btn">
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal

