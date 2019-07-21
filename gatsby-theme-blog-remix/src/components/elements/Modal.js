import React from "react"

import Portal from "./Portal"

const Modal = ({ children, toggle }) => {
  return (
    <Portal id="portal">
      <div className="modal-wrapper">
        <div className="bg" />
        <div className="card">{children}</div>
      </div>
    </Portal>
  )
}

export default Modal
