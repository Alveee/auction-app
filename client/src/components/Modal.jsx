import React from "react";

const Modal = (props) => {
  const { show, children } = props;
  const showHideClassName = show ? "show d-block" : "d-none";

  return (
    <div className={`modal ${showHideClassName}`}>
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
