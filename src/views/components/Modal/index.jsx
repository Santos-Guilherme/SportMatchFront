import React from "react";
import "./index.scss";

export default function Modal({ children, onClose }) {
    return (
        <div className="Modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}
